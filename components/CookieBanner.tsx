'use client'
import { useEffect } from 'react'
import 'vanilla-cookieconsent/dist/cookieconsent.css'

type GTag = (...args: unknown[]) => void

function updateConsent(acceptedCategory: (cat: string) => boolean) {
  const w = window as Window & { gtag?: GTag }
  if (typeof w.gtag !== 'function') return

  if (acceptedCategory('analytics')) {
    w.gtag('consent', 'update', { analytics_storage: 'granted' })
  }
  if (acceptedCategory('marketing')) {
    w.gtag('consent', 'update', {
      ad_storage: 'granted',
      ad_user_data: 'granted',
      ad_personalization: 'granted',
    })
  }
}

export default function CookieBanner() {
  useEffect(() => {
    import('vanilla-cookieconsent').then(({ run, acceptedCategory }) => {
      run({
        cookie: { name: 'andaimeslt_consent', expiresAfterDays: 365 },

        guiOptions: {
          consentModal: {
            layout: 'bar',
            position: 'bottom',
            equalWeightButtons: true,
            flipButtons: false,
          },
          preferencesModal: {
            layout: 'box',
            equalWeightButtons: true,
            flipButtons: false,
          },
        },

        categories: {
          necessary: { enabled: true, readOnly: true },
          analytics: {
            enabled: false,
            readOnly: false,
            autoClear: { cookies: [{ name: /^_ga/ }, { name: '_gid' }] },
          },
          marketing: {
            enabled: false,
            readOnly: false,
            autoClear: { cookies: [{ name: /^_gcl/ }, { name: /^_gads/ }] },
          },
        },

        language: {
          default: 'pt',
          translations: {
            pt: {
              consentModal: {
                title: 'Utilizamos cookies',
                description:
                  'Utilizamos cookies para garantir o funcionamento do website e, com o seu consentimento, para analisar a utilização e melhorar as nossas comunicações. Pode aceitar todas, recusar ou configurar as suas preferências. Mais informação em <a href="/privacidade" class="cc__link">Política de Privacidade</a>.',
                acceptAllBtn: 'Aceitar todas',
                acceptNecessaryBtn: 'Rejeitar todas',
                showPreferencesBtn: 'Preferências',
              },
              preferencesModal: {
                title: 'Preferências de cookies',
                acceptAllBtn: 'Aceitar todas',
                acceptNecessaryBtn: 'Rejeitar todas',
                savePreferencesBtn: 'Guardar preferências',
                closeIconLabel: 'Fechar',
                serviceCounterLabel: 'Serviço|Serviços',
                sections: [
                  {
                    title: 'Utilização de cookies',
                    description:
                      'Utilizamos cookies para garantir as funcionalidades básicas do website e para melhorar a sua experiência de navegação.',
                  },
                  {
                    title: 'Cookies necessários',
                    description:
                      'Essenciais para o funcionamento correcto do website. Não podem ser desactivados e não recolhem dados pessoais identificáveis.',
                    linkedCategory: 'necessary',
                  },
                  {
                    title: 'Cookies analíticos',
                    description:
                      'Permitem-nos analisar a utilização do website (Google Analytics 4) para melhorar a experiência de navegação. Apenas activados com o seu consentimento.',
                    linkedCategory: 'analytics',
                    cookieTable: {
                      caption: 'Cookies analíticos',
                      headers: { name: 'Cookie', domain: 'Domínio', desc: 'Descrição', expiration: 'Expiração' },
                      body: [
                        { name: '_ga',   domain: window.location.hostname, desc: 'Cookie principal do Google Analytics.', expiration: '2 anos' },
                        { name: '_ga_*', domain: window.location.hostname, desc: 'Estado de sessão do Google Analytics 4.', expiration: '2 anos' },
                      ],
                    },
                  },
                  {
                    title: 'Cookies de marketing',
                    description:
                      'Utilizados para medir o desempenho de campanhas publicitárias (Google Ads). Apenas activados com o seu consentimento.',
                    linkedCategory: 'marketing',
                    cookieTable: {
                      caption: 'Cookies de marketing',
                      headers: { name: 'Cookie', domain: 'Domínio', desc: 'Descrição', expiration: 'Expiração' },
                      body: [
                        { name: '_gcl_au', domain: window.location.hostname, desc: 'Cookie de conversão do Google Ads.', expiration: '90 dias' },
                      ],
                    },
                  },
                  {
                    title: 'Mais informações',
                    description: 'Para qualquer questão sobre cookies, <a href="/#contacto" class="cc__link">contacte-nos</a>.',
                  },
                ],
              },
            },
          },
        },

        onFirstConsent: () => updateConsent(acceptedCategory),
        onConsent:      () => updateConsent(acceptedCategory),
        onChange:       () => updateConsent(acceptedCategory),
      })
    })
  }, [])

  return null
}
