/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/index.html"],
  theme: {
    extend: {
      fontFamily:{
        sans: ['Fraunces','sans-serif'],
        serrat: ['Montserrat','sans-serif']
      },
      colors:{
        DarkCyan: 'hsl(158, 36%, 37%)',
        HoverDarkCyan: 'hsl(158, 36%, 19%)',
        Cream: 'hsl(30, 38%, 92%)',
        VeryDarkBlue: 'hsl(212, 21%, 14%)',
        DarkGrayishBlue: 'hsl(228, 12%, 48%)',
        White: 'hsl(0, 0%, 100%)'
      }
    },
  },
  plugins: [],
}
