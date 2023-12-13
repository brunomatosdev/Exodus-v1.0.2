module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        black: { 900: "#080b1d", "900_01": "#000000" },
        gray: { 500: "#929292" },
        blue_gray: { 100: "#d9d9d9" },
        light_blue: { 500: "#0099fa", A200: "#30d1ff", A200_01: "#2ed2ff" },
        white: { A700: "#ffffff" },
      },
      fontFamily: { saira: "Saira" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
