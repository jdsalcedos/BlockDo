/** @type {import('tailwindcss').Config} */
import {customColors} from "./src/app/utils/style/theme"

module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      ...customColors
    },
  },
  plugins: [],
};
