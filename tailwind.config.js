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
          // NOTE: brand pass round 2 — secondary accents unified onto purple.
          // Token names 'blue' and 'cyan' are kept for back-compat with the
          // existing className references across components; their values now
          // resolve to the new brand purple (#A855F7). The literal brand-blue
          // gradient endpoint (#3B82F6) lives in .btn-primary's base background
          // and in inline radial gradients in Home.jsx / ComingSoon.jsx.
          blue:    '#A855F7',
          indigo:  '#8B5CF6',
          cyan:    '#A855F7',
          muted:   '#6366F1',
          purple:  '#A855F7',
          pink:    '#EC4899',
        },
        border: {
          subtle: 'rgba(255,255,255,0.06)',
          accent: 'rgba(168,85,247,0.25)',
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
