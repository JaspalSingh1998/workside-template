module.exports = {
  purge: ["./src/**/*.html", "./src/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      Roboto: ["Roboto", "sans-serif"],
    },
    extend: {
      colors: {
        "dark-bg": "#15192A",
        "card-bg": "#8F9BB3",
        accent: "#005DF9",
        muted: "#8F9BB3",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
