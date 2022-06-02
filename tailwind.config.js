const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        nunito: ['"Nunito"', ...defaultTheme.fontFamily.sans],
        quicksand: ['"Quicksand"', ...defaultTheme.fontFamily.sans],
        lato: ['"Lato"', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        "10xl": "10rem",
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin")],
};
