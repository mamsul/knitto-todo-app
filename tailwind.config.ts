import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'prim-white': '#EEEEEE',
        'prim-dark': '#222831',
        'seco-dark': '#31363F',
        'prim-teal': '#76ABAE',
      },
    },
  },
  plugins: [],
};
export default config;
