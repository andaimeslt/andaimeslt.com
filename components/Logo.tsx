interface LogoProps {
  variant?: 'dark' | 'light'
  className?: string
}

export default function Logo({ variant = 'dark', className = '' }: LogoProps) {
  const primary  = variant === 'light' ? '#FFFFFF'           : '#1B3B2F'
  const secondary = variant === 'light' ? 'rgba(255,255,255,0.65)' : '#2D5F4C'

  return (
    <svg
      viewBox="0 0 108 46"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Andaimes LT"
      className={className}
    >
      {/* LT monogram */}
      <text
        x="0"
        y="34"
        style={{
          fontFamily: 'var(--font-manrope), Arial Black, sans-serif',
          fontWeight: 800,
          fontSize: '38px',
          fill: primary,
          letterSpacing: '-1px',
        }}
      >
        LT
      </text>
      {/* Separator bar */}
      <rect x="1" y="37" width="90" height="1.5" fill={secondary} opacity="0.4" rx="1" />
      {/* ANDAIMES label */}
      <text
        x="1"
        y="46"
        style={{
          fontFamily: 'var(--font-inter), Arial, sans-serif',
          fontWeight: 300,
          fontSize: '9px',
          fill: secondary,
          letterSpacing: '3.5px',
        }}
      >
        ANDAIMES
      </text>
    </svg>
  )
}
