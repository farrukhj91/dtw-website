/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: {
          primary:   '#07070D',
          secondary: '#0D0D18',
          card:      '#111120',
          elevated:  '#15152A',
        },
        accent: {
          blue:    '#4B6BFB',
          indigo:  '#5B5BD6',
          cyan:    '#06B6D4',
          muted:   '#3D5AF1',
        },
        border: {
          subtle: 'rgba(255,255,255,0.06)',
          accent: 'rgba(75,107,251,0.2)',
        },
      },
      fontFamily: {
        display: ['Satoshi', 'sans-serif'],
        body:    ['Inter', 'sans-serif'],
      },
      fontSize: {
        '2xs': '0.65rem',
      },
    },
  },
  plugins: [],
}
