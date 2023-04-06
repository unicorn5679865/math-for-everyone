/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      screens: {
      
      },
      colors: {
        'primary-green': '#10B582',
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
