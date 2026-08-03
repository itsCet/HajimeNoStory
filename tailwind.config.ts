import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  darkMode: ['class'],
  theme: {
    extend: {
      colors: {
        ring: {
          50: '#fff5f4',
          100: '#ffe6e3',
          200: '#ffc7c0',
          300: '#ff9f93',
          400: '#ff6b58',
          500: '#f13a2a',
          600: '#d92418',
          700: '#b31912',
          800: '#8a1611',
          900: '#5c0f0b',
        },
        ember: {
          400: '#ffb347',
          500: '#ff9518',
          600: '#e87a00',
        },
        health: '#3fae5b',
        fatigue: '#c9a15a',
        coolness: '#a35bc9',
        reputation: '#3a7bd5',
      },
      fontFamily: {
        display: ['"Archivo Black"', 'system-ui', 'sans-serif'],
        body: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        seigaiha: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='30' viewBox='0 0 60 30'%3E%3Cg fill='none' stroke='%23f13a2a' stroke-opacity='0.06' stroke-width='1.5'%3E%3Cpath d='M0 30a15 15 0 0 1 30 0 15 15 0 0 1 30 0'/%3E%3Cpath d='M0 20a15 15 0 0 1 30 0 15 15 0 0 1 30 0' transform='translate(0 10)'/%3E%3C/g%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
} satisfies Config
