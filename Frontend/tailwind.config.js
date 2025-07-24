/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        fredoka: ['fredoka', 'sans-serif'],
        SpecialSan:['Special Sans', 'sans-serif'],
        DMSans:['DMSans'],
      },
      colors: {
        brand: "#FF5722", // define your custom color with a name like 'brand'
        darkblue: '#332D56',
        lightblue: '#4E6688',
        ocean:'#71C0BB',
        wyellow:'#E3EEB2'
      },
    },
  },
  plugins: [],
}

