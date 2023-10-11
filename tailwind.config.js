/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
         "BrandPrimary":"#4CAF4F",
         "BrandSecondary":"#263238",
         "NeutralBlack":"#263238",
         "NeutralDGrey":"#4D4D4D",
         "NeutralGrey":"#717171",
         "NeutralLGrey":"#89939E",
         "NeutralSilver":"#F5F7FA",
         "ShadeS2":"#388E3B",
         "ShadeS5":"#103E13",
         "Gray900":"#18191F",
         "TintT4":"#C8E6C9",
         "TintT5":"#E8F5E9",
         
      },
    
  }

  },
  plugins: [require('flowbite/plugin')],
}

