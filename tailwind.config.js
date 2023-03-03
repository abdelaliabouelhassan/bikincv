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
        secondary: '#4A4E69',
        tertiary: '#F28F8F',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        aldrich: ['Aldrich', 'sans-serif'],
      },
      boxShadow: {
        'inset-light': 'inset -4px -4px 0px rgba(255, 255, 255, 0.64), inset 4px 4px 8px rgba(13, 39, 80, 0.2)',
        'inset-light-t': 'inset -4px -4px 0px rgba(255, 255, 255, 0.64), inset 4px 4px 8px rgba(242, 143, 143, 0.25)',
      },
      

    },
  },
  plugins: [],
}
