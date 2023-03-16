/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{html,js}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        primaryClr: "#cffafe",
        secondaryClr: "#22d3ee",
        primaryClrDark: "#334155",
        secondaryClrDark: "#262626",
        btnClr: "#4ade80",
        btnClrDark: "#0891b2",
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin.js")],
};
