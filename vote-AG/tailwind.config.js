/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts}"],
  theme: {
    screens: {
      xs: "350px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        "brand-blue-1": "#1e5ca7",
        "brand-blue-2": "#009fe3",
        "brand-green-1": "#7cb510",
        "brand-yellow-1": "#ffd400",
      },
    },
  },
  plugins: [],
};
