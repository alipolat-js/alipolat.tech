const theme = require("tailwindcss/defaultTheme")

module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Open Sans"', ...theme.fontFamily.sans],
        notoSerif: ['"Noto Serif"', ...theme.fontFamily.serif],
      },
      colors: {
        "linkedin-color": "#0e76a8",
        "github-color": "#ffffff",
        "dribbble-color": "#ea4c89",
        "twitter-color": "#00acee",
        "instagram-color": "#ea00d4",
        "primary-light": "#fcfcfc",
        "primary-dark": "#1c1d26",
      },
    },
  },
  plugins: [],
}
