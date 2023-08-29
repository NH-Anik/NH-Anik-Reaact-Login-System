/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      fontFamily: {
        'one': ['Poppins',"sans-serif"],
      },
      colors: {
        'one': '#F86F03',
        'two': '#FFA41B',
        'three': '#525FE1',
        'four': '#FFF6F4',
        'five': '#ffffff',
      },
    },
  },
  plugins: [],
}