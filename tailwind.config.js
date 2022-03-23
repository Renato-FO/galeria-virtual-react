module.exports = {
 content: [
  './src/pages/**/*.{js,ts,jsx,tsx}',
  './src/components/**/*.{js,ts,jsx,tsx}',
 ],
 theme: {
  extend: {},
  colors: {
   ...require('tailwindcss/colors'),
   primary: '#0855b1',
   'secondary-blue': '#4fa5d8',
   'terciary-blue': '#010e54',
  },
 },
 plugins: [],
}
