// tailwind.config.js
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: (theme) => ({
      primary: "#22263C",
      secondary: "#293053",
    }),
    fontSize: {
      primSize: "2rem",
      xxl: "2.5rem",
      xxxl: "3rem",
      xxxxl: "3.5rem"
    },
    borderColor: theme => ({
      DEFAULT: theme('colors.gray.300', 'currentColor'),
      'lightblue': '#00B2FF'
    }),
    extend: {
      backgroundColor: ["active"],
      colors: {
        orange: '#FF5C00',
        lightblue: '#00B2FF'
      },
      fontFamily: {
        body: ['Risque']
      }
    }
  },
  variants: {
    extend: {
      borderColor: ['active']
    },
  },
  plugins: [],
};
