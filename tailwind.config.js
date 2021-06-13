// tailwind.config.js
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: (theme) => ({
      primary: "#22263C",
      secondary: "#293053",
      lightblue: "#00B2FF",
    }),
    fontSize: {
      animeTitle: "0.75rem",
      animeTitleS: "0.85rem",
      animeTitleM: "0.95rem",
      animeTitleL: "1.05rem",
      titleSize: "0.55rem",
      titleSizeS: "0.6rem",
      titleSizeM: "0.7rem",
      titleSizeL: "0.8rem",
      primSize: "1.5rem",
      primSizeS: "1.7rem",
      primSizeM: "1.9rem",
      primSizeL: "2.1rem",
      xxl: "2.5rem",
      xxxl: "3rem",
      xxxxl: "3.5rem",
    },
    borderColor: (theme) => ({
      DEFAULT: theme("colors.gray.300", "currentColor"),
      lightblue: "#00B2FF",
    }),
    extend: {
      gridTemplateColumns: {
        rates: "0.4fr auto",
      },
      backgroundColor: ["active"],
      colors: {
        orange: "#FF5C00",
        lightblue: "#00B2FF",
      },
      fontFamily: {
        body: ["Risque"],
      },
    },
    maxWidth: {
      xsm: "6.5rem",
      sm: "7rem",
      md: "8.5rem",
      lg: "10rem",
    },
  },
  variants: {
    extend: {
      borderColor: ["active"],
    },
  },
  style: {
    postcss: {
      plugins: [require("tailwindcss"), require("autoprefixer")],
    },
  },
  plugins: [],
};
