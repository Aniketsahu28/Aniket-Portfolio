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
        'blueCircle': "url('Components/blueCircle.png')",
        'greenCircle': "url('Components/greenCircle.png')",
      }
    },
    screens: {
      'lap': '850px',
    }
  },
  plugins: [],
}

