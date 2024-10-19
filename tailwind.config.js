/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        button: "#ffad00",
        secondary: "#00b0b9",
      },
      fontFamily: {
        serif: ["var(--font-neo-sans-pro"],
      },
      fontSize: {
        vsm: "10px",
      },
      transitionTimingFunction: {
        "in-expo": "cubic-bezier(0.95, 0.05, 0.795, 0.035)",
        "out-expo": "cubic-bezier(0.645, 0.045, 0.355, 1)",
      },
      boxShadow: {
        "3xl": "0px 4px 4px 0px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [],
};
