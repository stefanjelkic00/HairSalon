// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,jsx,ts,tsx}',
    './src/app/components/**/*.{js,jsx,ts,tsx}',
  ],
  safelist: [
    'animate-fade-in-up',
  ],
  theme: {
    extend: {
      colors: {
        'salon-purple': '#4c3f75',
        'salon-light': '#d7d3de',
        'salon-black': '#000000',
        'salon-white': '#ffffff',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};