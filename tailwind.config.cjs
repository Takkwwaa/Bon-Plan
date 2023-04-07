/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#FF4747",
        secondary: "#E2E3E0",
        line: "#817A5D",
      },
      fontFamily: {
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
