/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: "Poppins, sans-serif",
      },
      gridTemplateColumns: {
        '16': 'repeat(2, 1fr)'
      },
      screens: {
        'mobile': '320px'
      }
    },
  },
  plugins: [],
}
