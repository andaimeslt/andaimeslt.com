import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Termos e Condições — Andaimes LT',
  robots: { index: false },
}

export default function Termos() {
  return (
    <section className="py-32 bg-brand-bg min-h-screen">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="font-heading font-800 text-3xl text-forest mb-6">Termos e Condições</h1>
        <p className="text-brand-muted text-sm mb-8">Última actualização: maio 2026</p>
        <div className="bg-white rounded-xl p-8 shadow-sm text-brand-text space-y-6 text-[0.95rem] leading-relaxed">
          <p>
            Os presentes Termos e Condições regem o aluguer de equipamentos de andaimes pela
            Andaimes LT (adiante "empresa") a clientes (adiante "cliente").
          </p>
          <h2 className="font-heading font-700 text-xl text-forest">Orçamentos e reservas</h2>
          <p>
            Os orçamentos têm validade de 7 dias. A reserva fica confirmada após aceitação formal
            por escrito ou via WhatsApp.
          </p>
          <h2 className="font-heading font-700 text-xl text-forest">Entrega e montagem</h2>
          <p>
            A empresa assegura transporte e montagem com pessoal certificado. O cliente deve
            garantir acesso livre ao local da obra.
          </p>
          <h2 className="font-heading font-700 text-xl text-forest">Caução</h2>
          <p>
            É exigida uma caução reembolsável na entrega do equipamento. O valor é definido no
            orçamento em função do material alugado. A caução é devolvida na totalidade após
            devolução do material em bom estado.
          </p>
          <h2 className="font-heading font-700 text-xl text-forest">Responsabilidade</h2>
          <p>
            O cliente é responsável pela utilização correcta do equipamento durante o período de
            aluguer. Danos por uso indevido são da responsabilidade do cliente.
          </p>
          <h2 className="font-heading font-700 text-xl text-forest">Contacto</h2>
          <p>
            Para qualquer questão, contacte{' '}
            <a href="mailto:geral@andaimeslt.com" className="text-forest-mid underline">
              geral@andaimeslt.com
            </a>{' '}
            ou ligue para{' '}
            <a href="tel:+351913517713" className="text-forest-mid underline">
              +351 913 517 713
            </a>
            .
          </p>
          <p className="text-brand-muted text-sm border-t pt-4">
            {/* [Placeholder — documento a rever por advogado/responsável legal antes do deploy] */}
            Este documento será actualizado com o NIF e morada completa da empresa após registo
            formal.
          </p>
        </div>
      </div>
    </section>
  )
}
