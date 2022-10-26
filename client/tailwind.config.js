/** @type {import('tailwindcss').Config} */

module.exports = {
  mode: 'jit',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary :'#FFC700',
        fontPrimary :'#433434',
        fontFire :'#FF1515',
        bgPrima : '#EFEFEF',
        fontred: '#974A4A',
        bginput: '#D2D2D2',
        fontRedrp: '#FF0000',
        
      },
      fontSize:{
        Fhero:'3rem',
      },
      fontFamily:{
        font_a:['Abhaya Libre','serif']

      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}