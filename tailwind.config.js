/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        coffee: {
          50: '#f5f5dc',
          100: '#ede0d4',
          200: '#e5c8b0',
          300: '#d9b38c',
          400: '#cf9663',
          500: '#b4843d',
          600: '#8d6630',
          700: '#705226',
          800: '#503a1d',
          900: '#332410',
        },
        darkCoffee: {
          50: '#1e1e1e',
          100: '#262626',
          200: '#333333',
          300: '#404040',
          400: '#4d4d4d',
          500: '#595959',
          600: '#666666',
          700: '#737373',
          800: '#808080',
          900: '#8c8c8c',
        },
      },
      backgroundImage: {
        'hero-pattern': "url('https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp')",
        'footer-texture': "url('/img/footer-texture.png')",
      }
    },
  },
  plugins: [require('daisyui')],
  darkMode: 'class', // Aktifkan dark mode dengan class
};
