/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      fontFamily:{
        "Poppins": ["Poppins", "Sans-serif"]
      },
      colors: {
        'primary': '#EEBE21',
        'darkprimary': ' #d5a710',
        'lightprimary': '#f4d671',
        'second' : '#2C2B3A',
        'base': '#0f0e17',
      },
    },
  },
  plugins: [],
}
