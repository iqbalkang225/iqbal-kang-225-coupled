/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        primary: "#CD1566",
        bluish: "#6AA7F9",
        pinkish: "#eaa5bf",
        body: "#1B013B",
        "body-light": "#300751",
      },
      screens: {},
    },
    fontFamily: {
      montserrat: ["Montserrat Alternates", "sans-serif"],
    },
  },
  plugins: [],
};
