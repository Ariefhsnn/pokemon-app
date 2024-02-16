/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#ffb8b8",
          200: "#ff7a7a",
          300: "#ed5e5e",
          400: "#d03e3e",
          500: "#b12020",
        },
        secondary: {
          100: "#e1dcbc",
          200: "#d9d3b4",
          300: "#c8bf92",
          400: "#b0a778",
        },
      },
    },
  },
  plugins: [],
};
