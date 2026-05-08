'use client'
import { useActionState } from 'react'
import { sendOrcamento, type FormState } from '@/app/actions/sendOrcamento'

const initial: FormState = {}

const inputCls =
  'w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-brand-text text-sm focus:outline-none focus:border-forest focus:ring-2 focus:ring-forest/20 transition'

const labelCls = 'block text-sm font-semibold text-brand-text mb-1.5'

export default function OrcamentoForm() {
  const [state, action, isPending] = useActionState(sendOrcamento, initial)

  if (state.success) {
    return (
      <section id="orcamento" className="py-20 bg-brand-bg">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <div className="bg-white rounded-2xl shadow-sm p-12">
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mx-auto mb-6">
              <svg viewBox="0 0 24 24" className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h2 className="font-heading font-800 text-2xl text-forest mb-3">Pedido recebido!</h2>
            <p className="text-brand-muted text-lg">
              Entraremos em contacto em menos de 2 horas.
            </p>
            <p className="text-brand-muted text-sm mt-4">
              Em caso de urgência, ligue para{' '}
              <a href="tel:+351913517713" className="text-forest font-semibold">+351 913 517 713</a>
            </p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="orcamento" className="py-20 bg-brand-bg">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block bg-forest/10 text-forest text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full mb-4">
            Orçamento gratuito
          </span>
          <h2 className="font-heading font-800 text-3xl md:text-4xl text-brand-text mb-3">
            Peça orçamento em 30 segundos
          </h2>
          <p className="text-brand-muted text-lg">
            Resposta em menos de 2 horas em horário laboral
          </p>
        </div>

        <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-sm p-8 md:p-10">
          <form action={action} noValidate>
            {/* Row 1 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
              <div>
                <label htmlFor="nome" className={labelCls}>Nome *</label>
                <input id="nome" name="nome" type="text" required placeholder="O seu nome" className={inputCls} />
              </div>
              <div>
                <label htmlFor="telefone" className={labelCls}>Telefone *</label>
                <input id="telefone" name="telefone" type="tel" required placeholder="9XX XXX XXX" className={inputCls} />
              </div>
            </div>

            {/* Email */}
            <div className="mb-5">
              <label htmlFor="email" className={labelCls}>Email *</label>
              <input id="email" name="email" type="email" required placeholder="email@exemplo.pt" className={inputCls} />
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
              <div>
                <label htmlFor="tipo" className={labelCls}>Tipo de andaime *</label>
                <select id="tipo" name="tipo" required className={inputCls} defaultValue="">
                  <option value="" disabled>Seleccione o tipo</option>
                  <option value="Europeu">Andaime Europeu</option>
                  <option value="Modular">Andaime Modular</option>
                  <option value="Torre Móvel">Torre Móvel</option>
                  <option value="Não tenho a certeza">Não tenho a certeza</option>
                </select>
              </div>
              <div>
                <label htmlFor="metros" className={labelCls}>Metros quadrados aprox. *</label>
                <input id="metros" name="metros" type="number" required min="1" placeholder="Ex: 30" className={inputCls} />
              </div>
            </div>

            {/* Row 3 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
              <div>
                <label htmlFor="datas" className={labelCls}>Datas previstas *</label>
                <input id="datas" name="datas" type="text" required placeholder="Ex: 15–20 de junho" className={inputCls} />
              </div>
              <div>
                <label htmlFor="localidade" className={labelCls}>Localidade da obra *</label>
                <input id="localidade" name="localidade" type="text" required placeholder="Ex: Guimarães" className={inputCls} />
              </div>
            </div>

            {/* Detalhes */}
            <div className="mb-7">
              <label htmlFor="detalhes" className={labelCls}>Detalhes adicionais <span className="font-normal text-brand-muted">(opcional)</span></label>
              <textarea
                id="detalhes"
                name="detalhes"
                rows={3}
                placeholder="Tipo de obra, altura necessária, condições de acesso…"
                className={`${inputCls} resize-none`}
              />
            </div>

            {/* Error */}
            {state.error && (
              <div className="mb-5 bg-red-50 text-red-700 border border-red-200 rounded-lg px-4 py-3 text-sm">
                {state.error}
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={isPending}
              className="w-full bg-forest text-white font-heading font-700 text-base py-4 rounded-xl hover:bg-forest-mid transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isPending ? 'A enviar…' : 'Pedir orçamento agora'}
            </button>
            <p className="text-center text-brand-muted text-xs mt-3">
              ✓ Sem compromisso &nbsp;·&nbsp; Resposta em 2 horas
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}
