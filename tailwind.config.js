/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      mont: ["var(--font-mont)"],
      // montserrat: ["Montserrat", "Helvetica Neue", "Helvetica", "sans-serif"],
    },
    extend: {
      fontSize: {
        "10xl": "10rem",
      },
      colors: {
        primary: "#4F46E5",
        secondary: "#ecc94b",
        purple: "#4F46E5",
        black: "#343434",
        grey: {
          100: "#F0F0F0",
          200: "#f9f9f9",
        },
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};
