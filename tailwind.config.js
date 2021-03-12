module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'primary': '#f3c614',
        'secondary': '#353535',
      },
      height: {
        '80': '20rem',
        '100': '25rem',
      }
    }
  },
  variants: {
    extend:{
      backgroundColor: ['active'],
      textColor: ['active'],
    }
  },
  plugins: [],
}
