/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        burtons: "burtons",
      },
      backgroundImage: {
        "dark-bg":
          "linear-gradient(to right, rgba(4, 0, 17, 1), rgba(0, 0, 17, 1), rgba(4, 0, 17, 1))",
        "custom-bg":
          "linear-gradient(to right, rgba(35, 37, 38, 1), rgba(65, 67, 69, 1), rgba(35, 37, 38, 1))",
      },
    },
  },
  plugins: [],
};
