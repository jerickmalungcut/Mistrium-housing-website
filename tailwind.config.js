/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      display: ["Roboto", "sans-serif"],
    },
    extend: {
      //Colors
      colors: {
        primary: "#C4A586",
        secondary: "#FAE2C8",
        tertiary: "#FCEFE9",
        background: "#FBFBFB",
        textPrimary: "#292019",
        textSecondary: "#72696A",
        textTertiary: "#A9A7A6",
      },
    },
  },
  plugins: [],
};
