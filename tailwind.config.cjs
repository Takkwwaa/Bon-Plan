/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      keyframes: {
        showNav: {
          "0%": { translate: "-100% 0" },
          "100%": { translate: "0 0" },
        },
        hideNav: {
          "0%": { translate: "0 0" },
          "100%": { translate: "-100% 0" },
        },
      },
      animation: {
        showNav: "showNav 1s ease-in-out forwards",
        hideNav: "hideNav 1s ease-in-out forwards",
      },
      colors: {
        primary: "#FF4747",
        secondary: "#101010",
        line: "#817A5D",
      },
      fontFamily: {
        dance: ["Dancing Script", "cursive"],
        poppins: ["Poppins", "sans-serif"],
        mont: ["Montserrat", "sans-serif"],
        arimo: ["Arimo", "sans-serif"],
      },
      backgroundImage: {
        wall: "url('./src/assets/design.svg')",
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      smm: "920px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
