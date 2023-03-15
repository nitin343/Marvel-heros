/** @type {import('tailwindcss').Config} */
const {fontFamily} = require("tailwindcss/defaultTheme")
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      roboto: ["var(--font-roboto), ...fontfamily.sans-serif"],
      roboto_Condensed: ["var(--font-roboto_Condensed), ...fontfamily.sans-serif"],
    },
    screens: {
      'md':  {'min': '280px', 'max': '1024px'},
      'laptop': '1024px',  
      'desktop': '1280px',
    },
    backgroundSize: {
      'auto': 'auto',
      'cover': 'cover',
      'contain': 'contain',
      '50%': '50%',
      '100': '100% 200%',
      '200': '200%',
      '16': '4rem',
    }
  },
  plugins: [],
}
