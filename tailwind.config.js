const theme = require("tailwindcss/defaultTheme")

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['"Montserrat"', ...theme.fontFamily.sans],
        sans: ['"Open Sans"', ...theme.fontFamily.sans],
      },
      colors: {
        "theme-dark": "#162229",
        "theme-dark-box": "#111b20",
        "theme-text": "#0ea5e9",
        "theme-pale-gray-on-dark": "#ebebeb",
        "theme-extra-pale-gray-on-dark": "#b6b6b6",
        "theme-pale-gray-on-white": "#1d2124",
        "theme-extra-pale-gray-on-white": "#353d42",
      },
    },
  },
  plugins: [],
}