const defaultTheme = require('tailwindcss/defaultTheme')

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
      colors: {
        'primary': '#FF0000',
        'text': '#000000',
        'grey': '#E5E3DF',
      },
      fontFamily: {
       'sans': ['Poppins', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}

