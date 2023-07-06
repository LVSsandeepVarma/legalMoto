/** @type {import('tailwindcss').Config} */
module.exports = {
  variants: {
    extend: {
      backgroundColor: ['active'],
      display: ['group-hover'],
    },
  },
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}