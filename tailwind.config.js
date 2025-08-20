/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        mainBlue: "#304ffe",
        mainWhite: "#fff",
        gray: "#808080",
      },
      boxShadow: {
        custom: "0px 4px 15px #304ffe4a",
      },
    },
  },
  plugins: [],
};
