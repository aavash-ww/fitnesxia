/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "6rem",
      },
      fontFamily: {
        poppins: ["Poppins", "ui-sans-serif", "system-ui"],
        times: ["Times New Roman", "ui-sans-serif", "system-ui"],
        arquette: ['"ATC Arquette"', "sans-serif"],
      },
      colors: {
        primary: "rgba(253,35,49,255)",
        orange: "#ff662d",
        bgDark: "rgba(55,56,60,255)",
        bgLight: "rgba(58,59,63,255)",
      },
    },
  },
  plugins: [],
};
