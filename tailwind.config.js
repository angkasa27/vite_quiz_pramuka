const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        happy: ['"Happy Monkey"', ...defaultTheme.fontFamily.sans],
        lato: ['"Lato"', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        "10xl": "10rem",
      },
    },
  },
  plugins: [],
};
