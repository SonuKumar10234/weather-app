/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    colors: {
      primary: "rgb(100 157 240)", 
      lighterGray: "#EDF2F7",
      lightGray: "rgb(65 162 162)",
      cardBg: "#303134",
      borderColor: '#718096',
      red: '#ff2c2c',
      lightBlue: 'rgb(191 219 254)',
      hoverBg: 'rgb(96 165 250)',
      humidityBg :'#525356',
      windBg: '#424742',
      zincLighter: 'rgb(212 212 216)',
      lightBg: 'rgb(204 200 192)'
    },
    extend: {},
  },
  plugins: [],
}

