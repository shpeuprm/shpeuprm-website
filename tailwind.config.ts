import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#003366',
          dark: '#002244',
        },
        secondary: {
          DEFAULT: '#006341',
          light: '#00660e',
          bright: '#11da6c',
        },
        accent: {
          DEFAULT: '#ffc107',
        },
      },
    },
  },
  plugins: [],
};
export default config;
