/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    extend: {
      colors:{
        'customblue1': 'rgba(75, 99, 221, 1)',
        'customblue2':'rgba(5, 36, 191, 0.99)',
        'customblack1':'rgba(17, 18, 20, 1)',
        'customblack2':'rgba(18, 18, 18, 1)'
      }
    },
  },
  plugins: [],
}

