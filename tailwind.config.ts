import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bg-img-1': "url('/img-1.png')",
        'bg-img-2': "url('/img-2.png')",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
          pattern: "url('/pattern.png')",
          'pattern-2': "url('/pattern-bg.png')",
      },
    },
  },
  plugins: [],
  safelist: [
    'bg-img-1',
    'bg-img-2',
    'bg-pattern',
    'bg-pattern-2'
  ]
}
export default config
