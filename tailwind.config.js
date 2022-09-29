/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        BrightRed: "#f25f3a",
        BrightRedLight: "hsl(12, 88%, 69%)",
        BrightRedSuperLight: "hsl(12, 88%, 95%)",
        DarkBlue: "#242d52",
        DarkGrayishBlue: "#9095a7",
        VeryDarkBlue: "#1d1e25",
        VeryPaleRed: "#ffefeb",
        VeryLightGray: "#fafafa",
        overlay: "#1d1e2533",
      },
    },
  },
  plugins: [],
};
