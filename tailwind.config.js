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
      colors : {
        'primary' : '#00c876',
        'primary-100' : '#00c87657',
        'secondary' : '#201630',
      },
      fontFamily: {
      'montserrat' : ['Montserrat'],
    },
  },
},
  plugins: [], 
}
