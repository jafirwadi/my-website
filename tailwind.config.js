/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        forest: {
          DEFAULT: '#1B3A2D', // primary background
          deep: '#122A20',    // recessed surfaces / cards
          light: '#264B3A',   // borders, raised surfaces on dark
        },
        cream: {
          DEFAULT: '#F5EDD8', // primary text / outlines on dark
          dim: '#B7AD90',     // secondary / muted text on dark
          paper: '#F7F1DE',   // inverted-section background
        },
        gold: {
          DEFAULT: '#D4A853', // accent / CTAs / highlights
          deep: '#9C7A34',    // hover state, small text on cream
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
        signature: ['"Dancing Script"', 'cursive'],
      },
      maxWidth: {
        content: '1280px',
      },
      letterSpacing: {
        wide2: '0.08em',
      },
      transitionTimingFunction: {
        editorial: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
}
