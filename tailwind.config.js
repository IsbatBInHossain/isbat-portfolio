/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#0D0208', // Near-black background
        'matrix-green': '#00FF41', // The iconic Matrix green for accents
        'matrix-green-dark': '#008F26', // A dimmer green for less important text/borders
        'text-primary': '#E0E0E0', // A light grey for body text, better readability than pure white
        'text-secondary': '#A0A0A0', // A dimmer grey for secondary text
      },
      fontFamily: {
        mono: ['Fira Code', 'monospace'],
      },
      // Glitch keyframe
      keyframes: {
        glitch: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '25%': { transform: 'translate(-2px, 2px)' },
          '50%': { transform: 'translate(2px, -2px)' },
          '75%': { transform: 'translate(-2px, -2px)' },
        },
      },
      animation: {
        glitch: 'glitch 0.3s linear',
      },
    },
  },
  plugins: [],
}
