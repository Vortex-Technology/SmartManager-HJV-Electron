/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx,ejs,css}'],
  theme: {
    extend: {
      fontFamily: {
        body: 'Roboto',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
