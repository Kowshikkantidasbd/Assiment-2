/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#15141a',
        'ink-soft': '#2a2830',
        parchment: '#f6f1e7',
        'parchment-dim': '#eae3d4',
        crimson: '#b3312c',
        'crimson-dark': '#8f2723',
        gold: '#d9a441',
        muted: '#8a8694',
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
