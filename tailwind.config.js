const { colors } = require('./src/renderer/styles/variables/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx,ejs,css}'],
  theme: {
    extend: {
      colors,

      fontFamily: {
        body: 'Roboto',
        title: 'Kalnia',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
