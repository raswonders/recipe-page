/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
        youngSerif: ["Young Serif", "serif"],
      },
      colors: {
        darkRaspberry: "hsla(332, 51%, 32%, 1)",
        snow: "hsla(331, 100%, 98%, 1)",
        wengeBrown: "hsla(30, 11%, 34%, 1)",
      },
    },
  },
  plugins: [],
};
