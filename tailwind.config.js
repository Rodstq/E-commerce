/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    screens:{
      'phone' :{'max': '600px'},
      'desktop' : '600px',
    },
    extend: {},
  },
  plugins: [],
}

