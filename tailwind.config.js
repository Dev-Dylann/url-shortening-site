/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        cyan: "hsl(180, 66%, 49%)",
        brightCyan: "hsl(180, 66%, 69%)",
        violet: {
          dark: "hsl(257, 27%, 26%)",
          gray: "hsl(257, 7%, 63%)",
          extraDark: "hsl(260, 8%, 14%)",
        },
        blue: {
          dark: "hsl(255, 11%, 22%)",
        },
        gray: {
          gray: "hsl(0, 0%, 75%)",
        },
      },
      fontFamily: {
        poppins: ["Poppins", "sans"],
      },
    },
  },
  plugins: [],
};
