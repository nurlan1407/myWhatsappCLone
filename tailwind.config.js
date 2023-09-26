/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: [
    './dist/*.html',
    './src/**/*.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
      colors:{
        "background":"var(--background-color)",
        "inputColor":"var(--input-color)"
      }
  },
  variants: {},
  plugins: [],
}