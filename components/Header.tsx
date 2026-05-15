'use client'
import { useState, useEffect } from 'react'
import Logo from './Logo'

const NAV_LINKS = [
  { href: '#inicio',       label: 'Início' },
  { href: '#equipamentos', label: 'Equipamentos' },
  { href: '#como-funciona',label: 'Como Funciona' },
  { href: '#cobertura',    label: 'Cobertura' },
  { href: '#contacto',     label: 'Contacto' },
]

const WA_URL =
  'https://wa.me/351913517713?text=Ol%C3%A1%2C%20gostaria%20de%20me%20inscrever%20na%20lista%20de%20espera%20do%20lan%C3%A7amento%20da%20Andaimes%20LT'

export default function Header() {
  const [menuOpen,  setMenuOpen]  = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      {/* Header sits below the PreLaunchBanner (top-8 mobile = 32px, sm:top-10 = 40px) */}
      <header
        className={`fixed top-8 sm:top-10 inset-x-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-forest/95 backdrop-blur-md shadow-lg py-3'
            : 'bg-forest py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between gap-4">
          {/* Logo */}
          <a href="/#inicio" onClick={closeMenu} aria-label="Andaimes LT — página inicial">
            <Logo variant="light" className="h-10 w-auto" />
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-7" aria-label="Navegação principal">
            {NAV_LINKS.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="text-white/80 text-sm font-medium hover:text-white transition-colors"
              >
                {label}
              </a>
            ))}
          </nav>

          {/* Desktop right actions */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 bg-[#25D366] text-white text-sm font-semibold px-3 py-1.5 rounded-lg hover:bg-[#1ebe5b] transition-colors"
            >
              <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp
            </a>
            <a
              href="#orcamento"
              className="bg-white text-forest text-sm font-bold px-4 py-2 rounded-lg hover:bg-white/90 transition-colors"
            >
              Reservar lugar
            </a>
          </div>

          {/* Mobile right */}
          <div className="flex lg:hidden items-center gap-3">
            {/* Phone icon — discrete, available after launch */}
            <a
              href="tel:+351913517713"
              className="text-white/40 hover:text-white/70 transition-colors"
              aria-label="Ligar (disponível a partir do lançamento)"
              title="Disponível a partir do lançamento"
            >
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
            </a>
            <a
              href="#orcamento"
              className="bg-white text-forest text-xs font-bold px-3 py-2 rounded-lg hover:bg-white/90 transition-colors"
            >
              Reservar
            </a>
            <button
              type="button"
              onClick={() => setMenuOpen(v => !v)}
              aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
              className="text-white p-1"
            >
              {menuOpen ? (
                <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" />
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M3 12h18M3 6h18M3 18h18" strokeLinecap="round" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 bg-forest flex flex-col items-center justify-center gap-8"
          role="dialog"
          aria-label="Menu de navegação"
        >
          <button
            type="button"
            className="absolute top-5 right-6 text-white"
            onClick={closeMenu}
            aria-label="Fechar menu"
          >
            <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" />
            </svg>
          </button>

          {NAV_LINKS.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={closeMenu}
              className="text-white text-2xl font-semibold hover:text-white/70 transition-colors"
            >
              {label}
            </a>
          ))}

          <div className="flex flex-col items-center gap-3 mt-4">
            <span className="text-white/40 text-sm italic">
              Disponível a partir do lançamento
            </span>
            <a
              href="#orcamento"
              onClick={closeMenu}
              className="bg-white text-forest font-bold px-8 py-3 rounded-xl text-base"
            >
              Reservar lugar
            </a>
          </div>
        </div>
      )}
    </>
  )
}
