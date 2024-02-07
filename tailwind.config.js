/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        '2md':'900px',
      },
      colors: {
        light: "#f39c12",
        success: "#27ae60",
        danger: "#d63031",
      },
    },
  },
  daisyui: {
    themes: ["light"],
},
  plugins: [require("daisyui")],
};
