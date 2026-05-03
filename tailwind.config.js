/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: '#06060A',
          secondary: '#0C0C14',
          card: '#0F0F1A',
        },
        accent: {
          blue: '#4F6EF7',
          indigo: '#6366F1',
          cyan: '#22D3EE',
        },
      },
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
