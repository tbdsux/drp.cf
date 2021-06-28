
const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./components/**/*.tsx', './pages/**/*.tsx'],
  mode: 'jit',
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      ...colors,
    },
    fontFamily: {
      sans: ['"Fira Sans"', ...defaultTheme.fontFamily.sans]
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
