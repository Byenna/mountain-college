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
      animation : {
        blob : 'blob 37s ease-in-out infinite',
      },
      keyframes : {
        blob : {
          '0%' : {
            transform : 'translate(0px, 0px) scale(1)',
          },
          '33%' : {
            transform : 'translate(0px, -50px) scale(2)',
          },
          '66%' : {
            transform : 'translate(100px, 20px) scale(0.8)',
          },
          '100%' : {
            transform : 'translate(0px, 0px) scale(2)',
          },
        },
      },
      colors : {
        'primary' : '#00c876',
        'primary-100' : '#00c87657',
        'secondary' : '#201630',
        'secondary-100' : '#2016301c',
        
      },
      fontFamily: {
      'montserrat' : ['Montserrat'],
    },
  },
},
  plugins: [], 
}
