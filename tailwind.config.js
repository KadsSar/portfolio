/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        netflix: {
          red: '#E50914',
          black: '#141414',
          dark: '#0B0B0B',
          gray: '#808080',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Professional font
      },
      backgroundImage: {
        'gradient-to-b': 'linear-gradient(to bottom, rgba(20,20,20,0) 0%, rgba(20,20,20,1) 100%)',
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide') // We might need to install this or use custom utility
  ],
}
