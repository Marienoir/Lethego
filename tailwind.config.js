/** @type {import('tailwindcss').Config} */
module.exports = {
  // purge: [
  //   './src/*.html',
  //   './src/**/*.js',
  // ],
  content: [],
  theme: {
    fontSize: {
      title: `2.6rem;`,
      paragraph: `1.2rem;`,
    },

    extend: {
      // backgroundColor: {
      //   black: "#00ADEF",
      //   // blue: "#00ADEF",
      // },
      colors: {
        white: "#ffffff",
        secondary: "#8D8BA1",
        "custom-dark": "#101010",
        "custom-blue": "#00adef",
      },
    },
    fontFamily: {
      satoshi: ["Satoshi"],
    },
  },
  plugins: [],
};
