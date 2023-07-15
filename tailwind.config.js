/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        black: '#393646',
        first: '#8D7B68',
        second: '#A4907C',
        third: '#C8B6A6',
        fourth: '#F1DEC9'
      }
    }
  },
  plugins: []
};
