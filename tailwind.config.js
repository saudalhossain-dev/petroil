/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
      },
      colors: {
        'primary': '#F40404',
        'secondary': '#6C6C6C'
      },
      maxWidth: {
        'container': '1144px'
      }
    },
  },
  plugins: [],
}