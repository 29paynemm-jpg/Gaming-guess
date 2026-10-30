import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      colors: {
        ink: "#0a0b12",
        panel: "#12141f",
        lime: "#c5ff5a",
        violet: "#9b82ff",
      },
      boxShadow: {
        glow: "0 0 42px rgba(197, 255, 90, 0.13)",
      },
    },
  },
  plugins: [],
};

export default config;
