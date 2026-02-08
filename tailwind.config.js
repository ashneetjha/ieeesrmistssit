/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ieeeBlue: '#00629B',
        ieeeLightBlue: '#00B5E2',
      }
    },
  },
  plugins: [],
}

