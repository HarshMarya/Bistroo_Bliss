/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        "bodyImg": "url('src/assets/Images/body.svg')",
        "centerBG": "url('src/assets/Images/BG.svg')"
      },
      listStyleType:{
        "number":'number'
      }
    },
  },
  plugins: [],
}