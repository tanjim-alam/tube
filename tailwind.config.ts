import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: '#d33',      // Example custom color
        secondary: '#058e3d',    // Example custom color
        accent: '#673ab7',       // Example custom color
        'light-gray': '#f1f1f1', // Example custom color with hyphen
        'dark-gray': '#333333',  // Example custom color with hyphen
      },
    },
  },
  plugins: [],
};
export default config;
