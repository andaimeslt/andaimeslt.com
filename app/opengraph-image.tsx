import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Andaimes LT — Aluguer de andaimes em Braga'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    <div
      style={{
        background: '#1B3B2F',
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '80px',
        fontFamily: 'system-ui, sans-serif',
      }}
    >
      {/* Logo mark */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '48px' }}>
        <div style={{ fontSize: 120, fontWeight: 900, color: '#FFFFFF', lineHeight: 1, letterSpacing: '-4px' }}>
          LT
        </div>
        <div style={{ fontSize: 20, color: 'rgba(255,255,255,0.6)', letterSpacing: '10px', marginTop: '4px', fontWeight: 300 }}>
          ANDAIMES
        </div>
      </div>
      {/* Divider */}
      <div style={{ width: 80, height: 3, background: '#2D5F4C', marginBottom: '40px' }} />
      {/* Tagline */}
      <div style={{ fontSize: 36, color: '#FFFFFF', textAlign: 'center', fontWeight: 600, maxWidth: 800, lineHeight: 1.3 }}>
        Aluguer de andaimes em Braga e todo o distrito
      </div>
      <div style={{ fontSize: 22, color: 'rgba(255,255,255,0.6)', marginTop: '20px', letterSpacing: '1px' }}>
        andaimeslt.com
      </div>
    </div>,
    { ...size }
  )
}
