/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "main-bg": "#161727",
        "item-bg": "#c8cbf2",
        "complete-btn": "#adff2f",
        "delete-btn": "#d72c4a",
      },
    },
  },
  plugins: [],
};
