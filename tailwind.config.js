/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        karla: ["Karla", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        'blueCircle': "url('src/assets/blueCircle.png')",
        'greenCircle': "url('src/assets/greenCircle.png')",
      }
    },
  },
  plugins: [],
}

