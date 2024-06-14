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
        brandyRed: "hsla(14, 45%, 36%, 1)",
        darkCharcoal: "hsla(30, 5%, 18%, 1)",
        darkRaspberry: "hsla(332, 51%, 32%, 1)",
        snow: "hsla(331, 100%, 98%, 1)",
        wengeBrown: "hsla(30, 11%, 34%, 1)",
        white: "hsla(0, 0%, 100%, 1)",
        whiteCoffee: "hsla(30, 18%, 87%, 1)",
        eggshell: "hsla(30, 54%, 90%, 1)",
      },
    },
  },
  plugins: [],
};
