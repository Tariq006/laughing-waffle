/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'golf-green': {
          DEFAULT: '#06402B',
          light: '#1A5D3B',
          dark: '#042D1E',
        },
        'golf-gold': {
          DEFAULT: '#D4AF37',
          light: '#E5C766',
          dark: '#B8962B',
        },
        'golf-cream': '#FDFBF7',
        'golf-earth': '#704214',
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'serif'],
        sans: ['var(--font-lato)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
