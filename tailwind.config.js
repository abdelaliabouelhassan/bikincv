/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors:{
        background: '#F8F9FA',
        primary: '#4F4F4F',
        secondary: '#4A4E69'
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
