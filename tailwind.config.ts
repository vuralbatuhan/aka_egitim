import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'aka-maroon': '#6A0B1C',
        'aka-dark-maroon': '#3C0C0B',
        'aka-maroon-light': '#5C1E1C',
        'aka-orange': '#F07D2C',
        'aka-dark-gray': '#222222',
        'aka-gray': '#333333',
        'aka-light-gray': '#666666',
        'aka-bg-gray': '#EEEEEE',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
