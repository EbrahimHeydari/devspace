/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    'bg-orange-400',
    'bg-blue-400',
    'bg-yellow-400',
    'bg-violet-400',
    'bg-red-400',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}