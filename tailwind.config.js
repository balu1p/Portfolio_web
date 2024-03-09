/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}","./index.css",
  ],
  theme: {
    extend: {
      fontFamily: {
        Italic: 'Dancing Script'
      }
    },
  },
  plugins: [],
}