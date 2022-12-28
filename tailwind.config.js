/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "375px",
        "2xl": "1537px",
        "3xl": "2290px",
        "4xl": "2560px",
      },
    },
  },
  plugins: [],
};
