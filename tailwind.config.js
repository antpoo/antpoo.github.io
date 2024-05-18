/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'bottom': '0 4px 2px -2px rgba(0, 0, 0, 0.1)',
      },
      keyframes: {
        'bounce-horizontal': {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(10px)' },
        },
      },
      animation: {
        'bounce-horizontal': 'bounce-horizontal 1.5s infinite',
      },
    },
  },
  plugins: [],
}

