/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: 15,
        screens: {
          xl: "1440px",
        },
      },
      colors: {
        "pale-green": "#607262",
        "dark-green": "#445045",
        white: "#F1F3F1",
      },
      fontSize: {
        base: "24px",
        lg: "clamp(18px,5cqw,32px)",
        xl: "clamp(40px,6cqw,56px)",
        "2xl": "clamp(70px,10cqw,168px)"
      },
      screens: {
        tablet: "820px",
      },
    },
  },
  plugins: [],
};
