/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./<custom directory>/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#F2F2F2",
        blue: "#004CFF",
        black: "#202020",
        lightGray: "#DCDCDC",
      },
    },
  },
  plugins: [],
};
