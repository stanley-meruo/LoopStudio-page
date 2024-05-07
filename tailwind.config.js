/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      "alata": ["Alata", "sans"],
      "josefin-sans": ["Josefin Sans", "sans"],
    },
    extend: {
      backgroundImage: {
        "hero-m-bg": "url('./images/mobile/image-hero.jpg')",
        "hero-d-bg": "url('./images/desktop/image-hero.jpg')",
      },
    },
  },
  plugins: [],
};

