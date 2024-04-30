/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    // "./node_modules/flowbite/**/*.jsx",
  ],
  theme: {
    extend: {
      colors: {
        secondary: "#00674B",
        primary: "#F49200",
        light: "#FFFFFF",
        dark: "#211715",
        pink: "#B60340",
        lightPink: "#FE3478",
        gray: "#393939",
        lightGray: "#424443",
        subscribeBackground: "#D5F6E6",
      },
      fontFamily: {
        youngSerif: ["Young Serif", 'serif'],
        arOneSans: ['AR One Sans', "sans-serif"]
      }
    },
    clipPath: {
      polygon: 'polygon(100% 0, 100% 65%, 0 100%, 0 0)',
    }
  },
  plugins: [
    // require('flowbite/plugin')
  ],

}