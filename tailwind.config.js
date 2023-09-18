/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: {
          400: "#0E1012",
          300: "#16181D",
          200: "#1A1D23",
          100: "#242731",
        },
        white: {
          300: "#636262",
          200: "#9B9B9B",
          100: "#E8E8EA"
        }
      }
    },
  },
  plugins: [],
}

