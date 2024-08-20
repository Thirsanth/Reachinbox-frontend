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
        'customblack2':'rgba(18, 18, 18, 1)',
        'customheader':'rgba(52, 58, 64, 1)',
        'customverticalnav':'rgba(16, 17, 19, 1)',
        'allinboxcolor':'rgba(66, 133, 244, 1)'
      }
    },
  },
  plugins: [],
}

