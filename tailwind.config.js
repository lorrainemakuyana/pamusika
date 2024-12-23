/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        white: "#F2F2F2",
        blue: "#004CFF",
        black: "#100D28",
        lightGray: "#DCDCDC",
        green: "#008000",
        orange: "#FC6A03",
        violet: "#67032F",
      },
      fontFamily: {
        ralewaybold: "RalewayBold",
        raleway: "Raleway",
      },
    },
  },
  plugins: [],
};
