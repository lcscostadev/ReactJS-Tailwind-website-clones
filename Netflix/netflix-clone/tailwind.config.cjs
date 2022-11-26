/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    screens: {
      '2xs': '320px',
      'xs': '375px',
      'md': '640px',
      'lg': '1024px',
    },
    extend: {
      boxShadow: {

      }
    },
  },
  plugins: [],
}