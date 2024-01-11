/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens:{
      'phone' :{'max': '600px'},
      'desktop' : '600px',
    },
    extend: {},
  },
  plugins: [],
}

