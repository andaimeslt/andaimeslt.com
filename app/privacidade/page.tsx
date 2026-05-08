import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Política de Privacidade — Andaimes LT',
  robots: { index: false },
}

export default function Privacidade() {
  return (
    <section className="py-32 bg-brand-bg min-h-screen">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="font-heading font-800 text-3xl text-forest mb-6">Política de Privacidade</h1>
        <p className="text-brand-muted text-sm mb-8">Última actualização: maio 2026</p>
        <div className="bg-white rounded-xl p-8 shadow-sm text-brand-text space-y-6 text-[0.95rem] leading-relaxed">
          <p>
            A Andaimes LT, com sede em Braga, Portugal, é responsável pelo tratamento dos seus dados
            pessoais recolhidos através deste website, nos termos do Regulamento Geral sobre a
            Protecção de Dados (RGPD — Regulamento UE 2016/679).
          </p>
          <h2 className="font-heading font-700 text-xl text-forest">Dados recolhidos</h2>
          <p>
            Quando preenche o formulário de orçamento, recolhemos nome, telefone, email e informações
            sobre a sua obra. Estes dados são utilizados exclusivamente para responder ao seu pedido.
          </p>
          <h2 className="font-heading font-700 text-xl text-forest">Finalidade e base legal</h2>
          <p>
            O tratamento baseia-se no seu consentimento (art. 6.º, n.º 1, al. a) do RGPD) e na
            execução de medidas pré-contratuais a pedido do titular dos dados.
          </p>
          <h2 className="font-heading font-700 text-xl text-forest">Conservação dos dados</h2>
          <p>
            Os dados são conservados pelo período necessário para a finalidade que motivou a sua
            recolha, no máximo 2 anos, salvo obrigação legal em contrário.
          </p>
          <h2 className="font-heading font-700 text-xl text-forest">Os seus direitos</h2>
          <p>
            Tem direito de acesso, rectificação, apagamento, portabilidade e oposição ao tratamento.
            Para exercer estes direitos, contacte{' '}
            <a href="mailto:geral@andaimeslt.com" className="text-forest-mid underline">
              geral@andaimeslt.com
            </a>
            .
          </p>
          <h2 className="font-heading font-700 text-xl text-forest">Cookies</h2>
          <p>
            Utilizamos cookies necessários ao funcionamento do website e, com o seu consentimento,
            cookies analíticos para melhorar a experiência de navegação. Pode gerir as suas
            preferências a qualquer momento.
          </p>
          <p className="text-brand-muted text-sm border-t pt-4">
            {/* [Placeholder — documento a rever por advogado/responsável legal antes do deploy] */}
            Esta política será actualizada com a morada completa e NIF da empresa após registo
            formal da mesma.
          </p>
        </div>
      </div>
    </section>
  )
}
