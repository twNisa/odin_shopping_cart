/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens:{
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      bg: '#fafafa',
      accent: '#d87d4a',
      accentLight: '#fbaf85',
      gray: '#f1f1f1',
      lightGray: '#d3d3d3',
      white: '#fff',
      black: '#191919',
      text: 'rgba(0,0,0,0.5)',
      textLight: 'rgba(255,255,255,0.5)',
      divider: 'rgba(255,255,255,0.1)',
      placeholder: 'rgba(0,0,0,.4)',
      inputBorder: '#CFCFCF',
      inputError: '#CD2C2C',
    },
    fontFamily: {
      heading: `'Manrope', sans-serif`,
      body: `'Manrope', sans-serif`,
    },
  },
  plugins: [],
}
