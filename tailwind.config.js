/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: [
    './*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  theme: {
    screens : {
      sm : '576px',
      md : '768px',
      lg : '992px',
      xl : '1200px',
    },
    container : {
      center : true,
      padding : '1rem' // 16px
    },
    extend: {
      fontFamily: {
      'montserrat' : ['Montserrat'],
    },
  },
},
  plugins: [], 
}
