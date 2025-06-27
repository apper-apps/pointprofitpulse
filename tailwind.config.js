/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
colors: {
        primary: {
          50: '#E8F6F5',
          100: '#D1EDEB',
          200: '#A3DBD7',
          300: '#75C9C3',
          400: '#47B7AF',
          500: '#2B7A78',
          600: '#236965',
          700: '#1B5452',
          800: '#133E3C',
          900: '#0B2726',
        },
        secondary: {
          50: '#F0F9FF',
          100: '#E0F2FE',
          200: '#BAE6FD',
          300: '#7DD3FC',
          400: '#38BDF8',
          500: '#0EA5E9',
          600: '#0284C7',
          700: '#0369A1',
          800: '#075985',
          900: '#0C4A6E',
        },
        secondary: {
          50: '#E8F8F7',
          100: '#D1F1EF',
          500: '#3AAFA9',
600: '#2E8C87',
        },
        accent: {
          50: '#FFF8E8',
          100: '#FFF1D1',
          200: '#FFE4A3',
          500: '#FFC947',
          600: '#E6B539',
        },
        success: {
          50: '#E8F5E8',
          500: '#27AE60',
          600: '#229954',
        },
        warning: {
          500: '#F39C12',
        },
        danger: {
          50: '#FDEBEA',
          500: '#E74C3C',
          600: '#C0392B',
        }
      },
      fontFamily: {
        'display': ['DM Sans', 'system-ui', 'sans-serif'],
        'body': ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'pulse-profit': 'pulse-profit 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-gentle': 'bounce-gentle 1s ease-in-out infinite',
      },
      keyframes: {
        'pulse-profit': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
        'bounce-gentle': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-4px)' },
        }
      }
    },
  },
  plugins: [],
}