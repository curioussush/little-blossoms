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
        'baby-blue': '#E0F4FF',
        'blush-pink': '#FFE4E9',
        'mint-green': '#E0F7F4',
        'cream': '#FFFEF5',
        'soft-blue': '#B4E0FF',
        'soft-pink': '#FFB8D1',
        'soft-mint': '#A8E6DB',
        'text-dark': '#2C3E50',
        'text-light': '#7F8C8D',
      },
      fontFamily: {
        'sans': ['Segoe UI', 'Roboto', 'sans-serif'],
      },
      borderRadius: {
        'xl': '1.5rem',
        '3xl': '2rem',
      },
      boxShadow: {
        'soft': '0 4px 15px rgba(0, 0, 0, 0.08)',
        'soft-md': '0 8px 25px rgba(0, 0, 0, 0.1)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in',
        'slide-up': 'slideUp 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          'from': { opacity: '0' },
          'to': { opacity: '1' },
        },
        slideUp: {
          'from': { transform: 'translateY(20px)', opacity: '0' },
          'to': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
export default config
