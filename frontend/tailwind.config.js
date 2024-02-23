/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ['Poppins'],
      },
      colors: {
        primary: '#1F0B0B',
        secondary: '#FFBE42',
        whity: '#F4E5D7',
        warmy: '#F2B678',
        browny: '#2D3021',
        darky: '#262626',
        gray: '#818380',
      },
    },
  },
  plugins: [require("daisyui")],
}

