/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#000000',    // Pure Black
          light: '#0a0a0a',   // Darker Grey (cards/sections)
          accent: '#1a1a1a',  // Muted Grey (borders/secondary)
          highlight: '#ffffff' // Pure White (high contrast highlights)
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      }
    },
  },
  plugins: [],
}

