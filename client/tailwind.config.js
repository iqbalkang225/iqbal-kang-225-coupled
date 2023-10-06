/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        primary: "#CD1566",
        bluish: "#6AA7F9",
        pinkish: "#ee719e",
        "pinkish-light": "#eaa5bf",
        body: "#1B013B",
        "body-light": "#300751",
        purple: "#7f31de",
      },
      screens: {},
    },
    fontFamily: {
      montserrat: ["Montserrat Alternates", "sans-serif"],
    },
  },
  plugins: [],
};
