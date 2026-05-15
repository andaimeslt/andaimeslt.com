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
            Quando preenche o formulário de reserva, recolhemos nome, telefone, email e informações
            sobre a sua obra prevista. Estes dados são utilizados exclusivamente para responder ao
            seu pedido e gerir a sua reserva na lista de espera.
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
            cookies analíticos e de marketing para melhorar a experiência de navegação e medir o
            desempenho das nossas campanhas. Pode gerir as suas preferências a qualquer momento
            através do botão &ldquo;Alterar preferências de cookies&rdquo; no rodapé.
          </p>

          <h2 className="font-heading font-700 text-xl text-forest">Google Analytics 4</h2>
          <p>
            Este website utiliza o Google Analytics 4 (identificador: <strong>G-PPXBTDJ82V</strong>),
            um serviço de análise web fornecido pela Google LLC. O GA4 é utilizado para medir o
            tráfego do website e conversões (reservas na lista de espera), com a finalidade de
            melhorar o serviço e otimizar as nossas campanhas de marketing.
          </p>
          <p>
            A base legal para este tratamento é o seu consentimento. Os dados são retidos pelo
            período máximo de 14 meses. O endereço IP é anonimizado antes do envio para os
            servidores da Google. Os dados podem ser transferidos para a Google LLC, sediada nos
            Estados Unidos da América, ao abrigo de cláusulas contratuais tipo aprovadas pela
            Comissão Europeia. Para mais informações, consulte a{' '}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-forest-mid underline"
            >
              Política de Privacidade da Google
            </a>
            .
          </p>

          <h2 className="font-heading font-700 text-xl text-forest">Google Consent Mode v2</h2>
          <p>
            Este website implementa o Google Consent Mode v2, uma tecnologia de gestão técnica de
            consentimento que assegura que as ferramentas de medição da Google (Analytics e Ads)
            apenas recolhem e processam dados pessoais após o utilizador ter dado o seu
            consentimento explícito através do banner de cookies. Por defeito, todas as categorias
            de armazenamento de dados estão negadas até que o utilizador aceite as respectivas
            categorias de cookies.
          </p>

          <p className="text-brand-muted text-sm border-t pt-4">
            Esta política será actualizada com a morada completa e NIF da empresa após registo
            formal da mesma.
          </p>
        </div>
      </div>
    </section>
  )
}
