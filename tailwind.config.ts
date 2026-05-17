import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        navy: "#093C5D",
        cyan: "#0E7490",
        teal: "#14B8A6",
        ink: "#102131",
        gold: "#F6C65B",
        skysoft: "#EAF4FA",
        mist: "#F8FAFC",
        line: "#DDE7EE"
      },
      fontFamily: {
        poppins: ["var(--font-poppins)", "Poppins", "Montserrat", "Arial", "sans-serif"]
      },
      boxShadow: {
        soft: "0 18px 45px rgba(9, 60, 93, 0.12)",
        lift: "0 22px 55px rgba(9, 60, 93, 0.18)",
        premium: "0 30px 80px rgba(9, 60, 93, 0.20)"
      }
    }
  },
  plugins: []
};

export default config;
