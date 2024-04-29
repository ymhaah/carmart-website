/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'purple-500': '#4400FF',
        'purple-400': '#6933FF',
        'purple-200': '#A98AFF',
        'purple-50': '#ECE6FF',

        'violet-800': '#8A898A',
        'violet-700': '#B2B1B2',
        'violet-600': '#E4E3E4',
        'violet-500': '#FAF9FB',
        'violet-400': '#FBFAFC',
        'violet-300': '#FCFBFC',
        'violet-200': '#FDFCFD',
        'violet-100': '#FDFDFE',
        'violet-50': '#FFFEFF',

        'red-500': '#B00020',
        'red-400': '#C0334D',
      },
    },
  },
  plugins: [],
};
