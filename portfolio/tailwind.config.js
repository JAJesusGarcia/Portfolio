/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#F3C304',
        secondary: '#242A31',
        tertiary: '#8C9293',
        quaternary: '#3d3c3c',
        quinary: '#eaebeb',
      },
    },
  },
  plugins: [],
};

module.exports = config;
