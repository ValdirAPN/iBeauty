/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    screens: {
      mobile: '480px',
      tablet: '768px',
      desktop: '1440px',
    },
    colors: {
      primary: {
        100: '#ffd9e4',
        300: '#ffb3c8',
        400: '#ff6680',
        800: '#b34766',
        900: '#5f162b'
      },
      'white': '#ffffff',
      'black': '#000000'
    },
    extend: {
      transitionProperty: {
        'height': 'height'
      }
    },
  },
  plugins: [],
}