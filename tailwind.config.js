/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: { 
    extend: {},
    screens: {
      'sm': '576px',
      'md': '992px',
      'lg': '1200px',
    }
  },
  plugins: [],
}
