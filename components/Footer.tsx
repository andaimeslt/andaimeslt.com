import Logo from './Logo'

export default function Footer() {
  return (
    <footer className="bg-forest text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div>
            <Logo variant="light" className="h-10 w-auto mb-3" />
            <p className="text-sm text-white/50 max-w-xs leading-relaxed">
              Aluguer de andaimes em Braga e todo o distrito.<br />
              NIF: <span className="italic opacity-60">[pendente de configuração]</span>
            </p>
          </div>

          <div className="flex flex-col gap-1 text-sm text-white/50">
            <a href="tel:+351913517713" className="hover:text-white transition-colors">+351 913 517 713</a>
            <a href="mailto:geral@andaimeslt.com" className="hover:text-white transition-colors">geral@andaimeslt.com</a>
            <span>Segunda a Sexta, 8h–18h</span>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-xs text-white/40">
          <p>© 2026 Andaimes LT. Todos os direitos reservados.</p>
          <div className="flex flex-wrap items-center gap-4">
            <a href="/privacidade" className="hover:text-white/70 transition-colors">Política de Privacidade</a>
            <a href="/termos"      className="hover:text-white/70 transition-colors">Termos e Condições</a>
            <button
              type="button"
              data-cc="show-preferencesModal"
              className="hover:text-white/70 transition-colors cursor-pointer bg-transparent border-0 p-0 text-xs text-white/40 font-sans"
            >
              Alterar preferências de cookies
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
