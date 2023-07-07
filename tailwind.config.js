/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Satoshi', 'cursive'],
      },
      colors: {
        primary1: '#022c22',
        primary2: '#1e293b',
        primary3: '#fb7185',
        borderColor: '#787878',
        bgColor: '#EDEDED',
        bgGreen: '#023423',
      },
    },
  },
  plugins: [],
};
