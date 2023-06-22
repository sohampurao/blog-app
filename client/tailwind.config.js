/** @type {import('tailwindcss').Config} */
import plugin from 'flowbite/plugin';

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        '3xl': '1600px',
      },
    },
  },
  plugins: [plugin],
};
