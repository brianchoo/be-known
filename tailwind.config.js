/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      montserrat: ["Montserrat", "Helvetica Neue", "Helvetica", "sans-serif"],
    },
    extend: {
      fontSize: {
        "10xl": "10rem",
      },
      colors: {
        purple: "#4F46E5",
        grey: {
          light: "#f9f9f9",
        },
      },
    },
  },
  plugins: [],
};
