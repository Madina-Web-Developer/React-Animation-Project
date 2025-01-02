/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    fontFamily: {
      'Abeezz':["ABeeZee", 'serif'],
      'Bricolage':["Bricolage Grotesque", 'serif']

    },


    container: {

      center: true,

      padding: {
        DEFAULT: '18px',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },

    },


    extend: {},
  },
  plugins: [],
}