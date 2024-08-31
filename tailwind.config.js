/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        top: "0 10px 70px 90px rgba(23, 23, 23, 1)",
      },
    },
  },
  plugins: [],
};
