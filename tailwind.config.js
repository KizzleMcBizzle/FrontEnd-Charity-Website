/** @type {(tailwindConfig: object) => object} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html', './App.js', './SignIn.js', './Navbar.js', './Home.js'],
  theme: {
    extend: {
      colors: {
        'custom-green': '#3b753b',
        'custom-green-light': '#005A52',
        'custom-green-dark': '#007D76',
        'custom-blue': '#007D76',
        'custom-blue-light': '#00D4BD',
        'custom-blue-dark': '#005A52',
        'custom-yellow': '#FFD700',
        'custom-red': '#FF0000',
        'custom-grey': '#808080',
        'custom-white': '#FFFFFF',
        'custom-black': '#000000',
        'custom-orange': '#FFA500',
        'custom-purple': '#800080',
        'custom-purple-light': '#ca72f8',
        'custom-pink': '#FFC0CB',
        'custom-brown': '#A52A2A',
        'custom-cyan': '#00FFFF',
        'custom-lime': '#00FF00',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
});

