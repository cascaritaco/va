/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryB: "#170CB4",
        primaryP: "#830AAF",
        secondary: "#4238D5",
        black: "#1E1E1E",
        white: "#F1F1F1",
      },
      fontSize: {
        h1: "56px",
        h2: "36px",
        h3: "24px",
        h4: "22px",
        h5: "18px",
        h6: "16px",
        p1: "22px",
        p2: "18px",
        p3: "16px",
        p4: "12px",
      },
      lineHeight: {
        h1: "65px",
        h2: "46px",
        h3: "34px",
        h4: "28px",
        h5: "24px",
        h6: "22px",
        p1: "36px",
        p2: "30px",
        p3: "28px",
        p4: "24px",
      }
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui")],
}

