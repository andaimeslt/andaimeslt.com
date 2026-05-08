'use server'

export interface FormState {
  success?: boolean
  error?: string
}

export async function sendOrcamento(
  _prev: FormState,
  formData: FormData
): Promise<FormState> {
  const nome       = (formData.get('nome')       as string | null)?.trim() ?? ''
  const telefone   = (formData.get('telefone')   as string | null)?.trim() ?? ''
  const email      = (formData.get('email')      as string | null)?.trim() ?? ''
  const tipo       = (formData.get('tipo')       as string | null)?.trim() ?? ''
  const metros     = (formData.get('metros')     as string | null)?.trim() ?? ''
  const datas      = (formData.get('datas')      as string | null)?.trim() ?? ''
  const localidade = (formData.get('localidade') as string | null)?.trim() ?? ''
  const detalhes   = (formData.get('detalhes')   as string | null)?.trim() ?? ''

  if (!nome || !telefone || !email || !tipo || !metros || !datas || !localidade) {
    return { error: 'Por favor preencha todos os campos obrigatórios.' }
  }

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey || apiKey.startsWith('re_SUBSTITUA')) {
    // Dev mode — log and simulate success so the UI can be tested locally
    console.log('[Andaimes LT] Formulário (modo dev — sem envio de email):', {
      nome, telefone, email, tipo, metros, datas, localidade, detalhes,
    })
    return { success: true }
  }

  const html = `
    <h2 style="color:#1B3B2F;margin-bottom:24px">Novo pedido de orçamento — Andaimes LT</h2>
    <table cellpadding="8" cellspacing="0" style="border-collapse:collapse;font-family:sans-serif;font-size:15px">
      <tr><td style="font-weight:bold;color:#5A6B65;white-space:nowrap">Nome</td><td>${nome}</td></tr>
      <tr><td style="font-weight:bold;color:#5A6B65;white-space:nowrap">Telefone</td><td><a href="tel:${telefone}">${telefone}</a></td></tr>
      <tr><td style="font-weight:bold;color:#5A6B65;white-space:nowrap">Email</td><td><a href="mailto:${email}">${email}</a></td></tr>
      <tr><td style="font-weight:bold;color:#5A6B65;white-space:nowrap">Tipo de andaime</td><td>${tipo}</td></tr>
      <tr><td style="font-weight:bold;color:#5A6B65;white-space:nowrap">Metros quadrados</td><td>${metros} m²</td></tr>
      <tr><td style="font-weight:bold;color:#5A6B65;white-space:nowrap">Datas previstas</td><td>${datas}</td></tr>
      <tr><td style="font-weight:bold;color:#5A6B65;white-space:nowrap">Localidade da obra</td><td>${localidade}</td></tr>
      ${detalhes ? `<tr><td style="font-weight:bold;color:#5A6B65;white-space:nowrap">Detalhes</td><td>${detalhes}</td></tr>` : ''}
    </table>
  `

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        from: 'Andaimes LT <formulario@andaimeslt.com>',
        to: ['geral@andaimeslt.com'],
        reply_to: email,
        subject: `Pedido de orçamento — ${nome} (${localidade})`,
        html,
      }),
    })
    if (!res.ok) throw new Error(`Resend ${res.status}`)
    return { success: true }
  } catch (err) {
    console.error('[Andaimes LT] Erro ao enviar email:', err)
    return { error: 'Erro ao enviar. Por favor ligue para +351 913 517 713 ou tente novamente.' }
  }
}
