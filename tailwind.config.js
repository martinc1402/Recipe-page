/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        youngserif: ['Young Serif', ...defaultTheme.fontFamily.sans],
        outfit: ['Outfit', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
