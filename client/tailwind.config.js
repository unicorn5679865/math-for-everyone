/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
      
      },
      colors: {
        'primary-green': '#10B582',
        'primary-green-dark': '#0A6C4E',
        'primary-orange': '#FA9F42'
      },

      translate: {
        '50p': '50%',
        '-50p': '-50%',
      },


    },
  },

  variants: {
    extend: {
      translate: ['hover'],
      top: ['hover'],
    },
  },
  plugins: [],
}
