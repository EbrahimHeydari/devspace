/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    'bg-orange-500',
    'bg-blue-500',
    'bg-green-500',
    'bg-violet-500',
    'bg-red-500',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}