import OrcamentoForm from '@/components/OrcamentoForm'

/* ─── Icons ─────────────────────────────────────────────────── */
function CheckIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
      <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

/* ─── 1. HERO ────────────────────────────────────────────────── */
function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen bg-forest hero-pattern flex items-center overflow-hidden"
    >
      {/* Decorative shape */}
      <div
        className="absolute right-0 top-0 bottom-0 w-1/3 hidden lg:block opacity-10 pointer-events-none"
        aria-hidden="true"
      >
        <svg viewBox="0 0 200 600" className="h-full w-full" fill="none">
          <rect x="20"  y="40"  width="8" height="520" fill="white" rx="4" />
          <rect x="50"  y="20"  width="8" height="560" fill="white" rx="4" />
          <rect x="80"  y="60"  width="8" height="480" fill="white" rx="4" />
          <rect x="110" y="0"   width="8" height="600" fill="white" rx="4" />
          <rect x="140" y="40"  width="8" height="520" fill="white" rx="4" />
          <rect x="170" y="80"  width="8" height="440" fill="white" rx="4" />
          {/* Horizontal bars */}
          {[100, 200, 300, 400, 500].map(y => (
            <rect key={y} x="10" y={y} width="190" height="5" fill="white" rx="2" />
          ))}
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 lg:py-40">
        {/* Pill */}
        <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/90 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-7">
          <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="currentColor" aria-hidden="true">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
          </svg>
          Aluguer de andaimes em Braga
        </div>

        {/* H1 */}
        <h1 className="font-heading font-800 text-4xl sm:text-5xl lg:text-6xl text-white leading-tight max-w-2xl mb-6">
          Andaimes LT em breve em Braga.{' '}
          <em className="not-italic text-white/75">20% de desconto para os primeiros clientes.</em>
        </h1>

        {/* Subtitle */}
        <p className="text-white/70 text-lg max-w-xl leading-relaxed mb-8">
          Estamos a preparar o lançamento da Andaimes LT — aluguer flexível de andaimes em Braga e
          todo o distrito. Reserve já o seu lugar e garanta 20% de desconto na primeira obra.
        </p>

        {/* Guarantee banner */}
        <div className="inline-flex items-start gap-3 bg-white/10 border border-white/20 rounded-xl px-5 py-4 mb-8 max-w-lg">
          <CheckIcon className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
          <span className="text-white/90 text-sm leading-relaxed">
            Operação prevista para{' '}
            <strong className="text-white">30 de Junho 2026</strong>{' '}
            · Lugares limitados para o desconto de lançamento
          </span>
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4 items-start">
          <div className="flex flex-col">
            <a
              href="#orcamento"
              className="inline-flex items-center gap-2 bg-white text-forest font-heading font-700 text-base px-7 py-4 rounded-xl hover:bg-white/90 transition-colors"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor" aria-hidden="true">
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm7 13H5v-.23c0-.62.28-1.2.76-1.58C7.47 15.82 9.64 15 12 15s4.53.82 6.24 2.19c.48.38.76.97.76 1.58V19z" />
              </svg>
              Reservar lugar com 20% desconto
            </a>
            <span className="text-white/50 text-xs mt-2 pl-1">
              ✓ Sem compromisso · Cancelamento livre · Aviso por email quando arrancarmos
            </span>
          </div>
          <a
            href="#equipamentos"
            className="inline-flex items-center gap-2 border-2 border-white/40 text-white font-semibold text-base px-7 py-4 rounded-xl hover:border-white/70 hover:bg-white/5 transition-colors"
          >
            Ver equipamentos
          </a>
        </div>
      </div>

      {/* Wave bottom */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none">
        <svg viewBox="0 0 1440 56" className="w-full" fill="#ffffff" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0,56 C360,0 1080,0 1440,56 L1440,56 L0,56 Z" />
        </svg>
      </div>
    </section>
  )
}

/* ─── 2. PARA QUEM TRABALHAMOS ───────────────────────────────── */
function ParaQuem() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <span className="inline-block bg-forest/8 text-forest text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full mb-6">
          Para quem trabalhamos
        </span>
        <p className="text-brand-muted text-lg leading-relaxed">
          Trabalhamos com pintores, reformistas, pequenos empreiteiros e profissionais autónomos
          que precisam de andaimes para obras pequenas e médias. Alugamos a partir de poucos metros
          quadrados, por apenas alguns dias se for necessário, e entregamos em obra com montagem
          certificada incluída. Sem mínimos, sem burocracia, sem esperas.
        </p>
      </div>
    </section>
  )
}

/* ─── 3. EQUIPAMENTOS ───────────────────────────────────────── */
const EQUIPAMENTOS = [
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7" fill="currentColor" aria-hidden="true">
        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z" />
      </svg>
    ),
    title: 'Andaime Europeu',
    desc: 'Andaime de fachada tradicional, ideal para trabalhos de pintura, reboco e pequenas reparações em fachadas. Sistema seguro, montagem rápida.',
    tags: ['Pintura', 'Reboco', 'Reparações de fachada'],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7" fill="currentColor" aria-hidden="true">
        <path d="M3 3h18v2H3V3zm0 16h18v2H3v-2zm0-8h18v2H3v-2zm2-4h2v2H5V7zm0 8h2v2H5v-2zm12-8h2v2h-2V7zm0 8h2v2h-2v-2z" />
      </svg>
    ),
    title: 'Andaime Modular',
    desc: 'Sistema multidirecional adaptável a qualquer geometria de obra. Perfeito para construções com formas irregulares ou acessos complicados.',
    tags: ['Construção', 'Reabilitação', 'Obras complexas'],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7" fill="currentColor" aria-hidden="true">
        <path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
      </svg>
    ),
    title: 'Torres Móveis',
    desc: 'Torres de trabalho com rodas para intervenções rápidas em altura. Fáceis de mover, montagem em minutos, ideais para trabalhos de manutenção.',
    tags: ['Manutenção', 'Iluminação', 'Trabalhos pontuais em altura'],
  },
]

function Equipamentos() {
  return (
    <section id="equipamentos" className="py-20 bg-brand-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="inline-block bg-forest/8 text-forest text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full mb-4">
            Equipamentos
          </span>
          <h2 className="font-heading font-800 text-3xl md:text-4xl text-brand-text">
            Equipamentos disponíveis
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {EQUIPAMENTOS.map(({ icon, title, desc, tags }) => (
            <article
              key={title}
              className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-lg hover:border-forest/20 transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-xl bg-forest/8 text-forest flex items-center justify-center mb-5 group-hover:bg-forest group-hover:text-white transition-colors">
                {icon}
              </div>
              <h3 className="font-heading font-700 text-xl text-brand-text mb-3">{title}</h3>
              <p className="text-brand-muted text-sm leading-relaxed mb-5">{desc}</p>
              <div className="flex flex-wrap gap-2">
                {tags.map(t => (
                  <span key={t} className="bg-forest/8 text-forest text-xs font-medium px-2.5 py-1 rounded-full">
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── 4. COMO FUNCIONA ──────────────────────────────────────── */
const PASSOS = [
  {
    n: '1',
    title: 'Reserva',
    desc: 'Indique o tipo de andaime e detalhes da sua obra prevista. Garanta o seu lugar na lista de espera com 20% desconto.',
  },
  {
    n: '2',
    title: 'Confirmação',
    desc: 'Receba confirmação da sua reserva por email com o seu código de desconto.',
  },
  {
    n: '3',
    title: 'Aviso de lançamento',
    desc: 'Quando arrancarmos a 30 de Junho, contactamos-lo diretamente para coordenar a entrega.',
  },
  {
    n: '4',
    title: 'Entrega e Montagem',
    desc: 'Após o lançamento, levamos o material à obra na data combinada com montagem certificada incluída.',
  },
]

function ComoFunciona() {
  return (
    <section id="como-funciona" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="inline-block bg-forest/8 text-forest text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full mb-4">
            Processo
          </span>
          <h2 className="font-heading font-800 text-3xl md:text-4xl text-brand-text">
            Simples como deve ser
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {PASSOS.map(({ n, title, desc }, i) => (
            <div key={n} className="relative text-center">
              {/* Connector line (desktop) */}
              {i < PASSOS.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-1/2 w-full h-px bg-forest/15 -z-10" aria-hidden="true" />
              )}
              <div className="w-20 h-20 rounded-full bg-forest text-white font-heading font-800 text-3xl flex items-center justify-center mx-auto mb-5 ring-4 ring-forest/15">
                {n}
              </div>
              <h3 className="font-heading font-700 text-lg text-brand-text mb-2">{title}</h3>
              <p className="text-brand-muted text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── 5. PORQUÊ ANDAIMES LT ─────────────────────────────────── */
const RAZOES = [
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor" aria-hidden="true">
        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm7 13H5v-.23c0-.62.28-1.2.76-1.58C7.47 15.82 9.64 15 12 15s4.53.82 6.24 2.19c.48.38.76.97.76 1.58V19z" />
      </svg>
    ),
    title: 'Flexibilidade total',
    desc: 'Alugue por dias ou semanas, desde poucos metros quadrados. Sem mínimos. Adaptamo-nos ao tamanho real da sua obra.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor" aria-hidden="true">
        <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z" />
      </svg>
    ),
    title: 'Disponibilidade rápida',
    desc: 'Entrega em 24 horas em Braga cidade, 48 horas no resto do distrito. Resposta a orçamentos em menos de 2 horas em horário laboral.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor" aria-hidden="true">
        <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 4l5 2.18V11c0 3.5-2.33 6.79-5 7.93-2.67-1.14-5-4.43-5-7.93V7.18L12 5z" />
      </svg>
    ),
    title: 'Tudo incluído',
    desc: 'Transporte e montagem com pessoal certificado. Sem custos escondidos. Pequena caução reembolsável à devolução do material em bom estado.',
  },
]

function PorqueNos() {
  return (
    <section id="porque" className="py-20 bg-forest">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="inline-block bg-white/15 text-white text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full mb-4">
            Porquê nós
          </span>
          <h2 className="font-heading font-800 text-3xl md:text-4xl text-white">
            Porquê escolher-nos
          </h2>
          <p className="text-white/60 mt-4 text-base">
            Quando arrancarmos a 30 de Junho, esta é a nossa proposta:
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {RAZOES.map(({ icon, title, desc }) => (
            <div key={title} className="text-center px-4">
              <div className="w-14 h-14 rounded-xl bg-white/10 text-white flex items-center justify-center mx-auto mb-5">
                {icon}
              </div>
              <h3 className="font-heading font-700 text-xl text-white mb-3">{title}</h3>
              <p className="text-white/65 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── 6. COBERTURA ───────────────────────────────────────────── */
function Cobertura() {
  return (
    <section id="cobertura" className="py-20 bg-brand-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="inline-block bg-forest/8 text-forest text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full mb-4">
            Zona de cobertura
          </span>
          <h2 className="font-heading font-800 text-3xl md:text-4xl text-brand-text mb-4">
            Onde levamos o material
          </h2>
          <p className="text-brand-muted max-w-xl mx-auto">
            Cobrimos todo o distrito de Braga com tempos de entrega garantidos:
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {/* 24h */}
          <div className="bg-forest rounded-2xl p-8 text-white">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor" aria-hidden="true">
                  <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z" />
                </svg>
              </div>
              <div>
                <p className="text-white/60 text-xs uppercase tracking-widest font-semibold">Entrega em</p>
                <p className="font-heading font-800 text-3xl">24 horas</p>
              </div>
            </div>
            <p className="text-white font-semibold text-lg">Braga cidade</p>
          </div>

          {/* 48h */}
          <div className="bg-white rounded-2xl p-8 border border-gray-100">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-forest/10 flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-6 h-6 text-forest" fill="currentColor" aria-hidden="true">
                  <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z" />
                </svg>
              </div>
              <div>
                <p className="text-brand-muted text-xs uppercase tracking-widest font-semibold">Entrega em</p>
                <p className="font-heading font-800 text-3xl text-forest">48 horas</p>
              </div>
            </div>
            <p className="text-brand-muted text-sm leading-relaxed">
              Guimarães · Vila Nova de Famalicão · Barcelos · Fafe · Vila Verde ·
              Esposende · Amares · Póvoa de Lanhoso · Vieira do Minho ·
              Cabeceiras de Basto · Celorico de Basto · Terras de Bouro ·
              Vizela · restante distrito de Braga
            </p>
          </div>
        </div>

        {/* Google Maps */}
        <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
          <iframe
            src="https://maps.google.com/maps?q=Braga+distrito+Portugal&t=m&z=10&output=embed&iwloc=near"
            title="Mapa do Distrito de Braga"
            width="100%"
            height="420"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  )
}

/* ─── 7. SOBRE NÓS ───────────────────────────────────────────── */
function SobreNos() {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <span className="inline-block bg-forest/8 text-forest text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full mb-6">
          Quem somos
        </span>
        <h2 className="font-heading font-800 text-3xl md:text-4xl text-brand-text mb-6">
          Quem somos
        </h2>
        <p className="text-brand-muted text-lg leading-relaxed">
          Andaimes LT nasceu da experiência prática em obra. As iniciais &ldquo;LT&rdquo; vêm dos
          apelidos dos dois sócios fundadores, Lomba e Teijeiro. Trabalhamos com proximidade,
          equipamento certificado e tempos de resposta que respeitam o ritmo da sua obra. Estamos
          sediados em Braga e cobrimos todo o distrito.
        </p>
      </div>
    </section>
  )
}

/* ─── 8. CONTACTO ────────────────────────────────────────────── */
function Contacto() {
  return (
    <section id="contacto" className="py-20 bg-forest">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="inline-block bg-white/15 text-white text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full mb-4">
            Contacto
          </span>
          <h2 className="font-heading font-800 text-3xl md:text-4xl text-white">
            Fale connosco
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Telefone */}
          <div className="bg-white/10 rounded-2xl p-6 text-center">
            <div className="w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center mx-auto mb-4 text-white">
              <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor" aria-hidden="true">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
            </div>
            <p className="text-white/50 text-xs font-semibold uppercase tracking-widest mb-1">Telefone</p>
            <p className="text-white/70 text-sm leading-relaxed">
              Disponível a partir de 30 de Junho 2026<br />
              <span className="text-white/50 text-xs">Por agora, use o formulário acima</span>
            </p>
          </div>

          {/* WhatsApp */}
          <div className="bg-white/10 rounded-2xl p-6 text-center">
            <div className="w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center mx-auto mb-4 text-white">
              <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </div>
            <p className="text-white/50 text-xs font-semibold uppercase tracking-widest mb-1">WhatsApp</p>
            <a
              href="https://wa.me/351913517713?text=Ol%C3%A1%2C%20gostaria%20de%20me%20inscrever%20na%20lista%20de%20espera%20do%20lan%C3%A7amento%20da%20Andaimes%20LT"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white font-semibold text-sm hover:text-white/80 transition-colors"
            >
              +351 913 517 713
            </a>
          </div>

          {/* Email */}
          <div className="bg-white/10 rounded-2xl p-6 text-center">
            <div className="w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center mx-auto mb-4 text-white">
              <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor" aria-hidden="true">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
            </div>
            <p className="text-white/50 text-xs font-semibold uppercase tracking-widest mb-1">Email</p>
            <a
              href="mailto:geral@andaimeslt.com"
              className="text-white font-semibold text-sm hover:text-white/80 transition-colors"
            >
              geral@andaimeslt.com
            </a>
          </div>

          {/* Horário */}
          <div className="bg-white/10 rounded-2xl p-6 text-center">
            <div className="w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center mx-auto mb-4 text-white">
              <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor" aria-hidden="true">
                <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z" />
              </svg>
            </div>
            <p className="text-white/50 text-xs font-semibold uppercase tracking-widest mb-1">Disponibilidade</p>
            <p className="text-white font-semibold text-sm">Resposta a inscrições em 24h em dias úteis</p>
          </div>
        </div>

        <p className="text-center text-white/40 text-sm mt-8">
          Braga, Portugal
        </p>
      </div>
    </section>
  )
}

/* ─── PAGE EXPORT ────────────────────────────────────────────── */
export default function Home() {
  return (
    <>
      <Hero />
      <ParaQuem />
      <Equipamentos />
      <ComoFunciona />
      <PorqueNos />
      <Cobertura />
      <SobreNos />
      <OrcamentoForm />
      <Contacto />
    </>
  )
}
