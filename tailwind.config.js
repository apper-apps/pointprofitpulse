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
          500: '#3B82F6',
          600: '#2563EB',
          700: '#1E40AF',
          800: '#1E3A8A',
          900: '#1E2A5A',
        },
        accent: {
          50: '#FFF8E8',
          100: '#FFF1D1',
          200: '#FFE4A3',
          300: '#FFD770',
          400: '#FFCA3D',
          500: '#FFC947',
          600: '#E6B539',
          700: '#CC9F2B',
          800: '#B3881D',
          900: '#99710F',
        },
        success: {
          50: '#E8F5E8',
          100: '#D1EBD1',
          200: '#A3D7A3',
          300: '#75C375',
          400: '#47AF47',
          500: '#27AE60',
          600: '#229954',
          700: '#1D8348',
          800: '#186E3C',
          900: '#135830',
        },
        warning: {
          50: '#FEF3E2',
          100: '#FDE7C5',
          200: '#FBCF8B',
          300: '#F9B751',
          400: '#F79F17',
          500: '#F39C12',
          600: '#DB8B0F',
          700: '#C37A0C',
          800: '#AB6909',
          900: '#935806',
        },
        danger: {
          50: '#FDEBEA',
          100: '#FBD7D5',
          200: '#F7AFAB',
          300: '#F38781',
          400: '#EF5F57',
          500: '#E74C3C',
          600: '#C0392B',
          700: '#A93226',
          800: '#922B21',
          900: '#7B241C',
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