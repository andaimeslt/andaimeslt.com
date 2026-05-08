import type { Metadata } from 'next'
import { Inter, Manrope } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppFloat from '@/components/WhatsAppFloat'
import CookieBanner from '@/components/CookieBanner'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})
const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
})

export const metadata: Metadata = {
  title: 'Andaimes LT — Aluguer de andaimes em Braga e distrito',
  description:
    'Aluguer de andaimes europeus, modulares e torres móveis em Braga e todo o distrito. Transporte e montagem certificada incluídos. Resposta em 2 horas, entrega em 24h.',
  keywords: [
    'aluguer andaimes Braga',
    'andaimes distrito Braga',
    'andaimes europeus Portugal',
    'torres móveis aluguer',
    'andaimes modulares',
  ],
  openGraph: {
    title: 'Andaimes LT — Aluguer de andaimes em Braga e distrito',
    description:
      'Aluguer de andaimes europeus, modulares e torres móveis em Braga e todo o distrito. Transporte e montagem certificada incluídos. Resposta em 2 horas, entrega em 24h.',
    url: 'https://andaimeslt.com',
    siteName: 'Andaimes LT',
    locale: 'pt_PT',
    type: 'website',
  },
  alternates: { canonical: 'https://andaimeslt.com' },
  robots: { index: true, follow: true },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Andaimes LT',
  telephone: '+351913517713',
  email: 'geral@andaimeslt.com',
  url: 'https://andaimeslt.com',
  areaServed: {
    '@type': 'AdministrativeArea',
    name: 'Distrito de Braga',
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Braga',
    addressCountry: 'PT',
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '08:00',
    closes: '18:00',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} ${manrope.variable} font-sans antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
        <CookieBanner />
      </body>
    </html>
  )
}
