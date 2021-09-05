module.exports = {
  purge: ["./src/**/*.html", "./src/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      Roboto: ["Roboto", "sans-serif"],
    },
    extend: {
      spacing: {
        100: "26rem",
        102: "37.0625rem",
      },
      colors: {
        "dark-bg": "#15192A",
        "card-bg": "#1F273C",
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
