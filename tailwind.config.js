/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        kenya: {
          green: '#16a34a',
          'green-light': '#22c55e',
          'green-dark': '#15803d',
          forest: '#052e16',
          gold: '#ca8a04',
          earth: '#78350f',
          sand: '#fef3c7',
        }
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'gradient-shift': 'gradientShift 15s ease infinite',
        'shimmer': 'shimmer 3s infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(34, 197, 94, 0.3)',
        'glow-lg': '0 0 40px rgba(34, 197, 94, 0.4)',
      }
    },
  },
  plugins: [],
};
