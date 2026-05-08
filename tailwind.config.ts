import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          DEFAULT: '#1B3B2F',
          mid:     '#2D5F4C',
          light:   '#3A7A63',
        },
        brand: {
          bg:    '#F4F6F5',
          text:  '#0F1B16',
          muted: '#5A6B65',
        },
        wa: '#25D366',
      },
      fontFamily: {
        sans:    ['var(--font-inter)',    'system-ui', 'sans-serif'],
        heading: ['var(--font-manrope)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
