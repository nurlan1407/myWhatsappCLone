/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: [
    './dist/*.html',
    './src/**/*.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend:{
      colors:{
        "primary":"var(--primary-color)",
        "background":"var(--background-color)",
        "inputColor":"var(--input-color)",
        "inputActiveColor":"var(--input-active-color)",
        "secondary":"var(--secondary-color)",
        "label":"var(--label-color)",
        "secondaryText":"var(--secondary-text-color)",
        "buttonColor":"var(--button-color)",
        "buttonActiveColor":"var(--button-active-color)",
        "dropdownBackground":"var(--dropdown-background)",
        "borderColor":"var(--border-color)",
        "headerColor":"var(--header-color)",
        "boundaryColor":"var(--boundary-color)"
      },
      spacing:{
        '50px':'50px'
      }
      
    }
  },
  variants: {},
  plugins: [],
}