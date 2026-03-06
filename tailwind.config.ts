import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f9f5ff",
          100: "#f3ebff",
          200: "#e8d5ff",
          300: "#d8b4ff",
          400: "#c689ff",
          500: "#b85cff",
          600: "#a635ff",
          700: "#8b1cff",
          800: "#6C3BFF",
          900: "#5a2fa6",
        },
        secondary: {
          50: "#fff5f7",
          100: "#ffeaef",
          200: "#ffd4e0",
          300: "#ffb3c6",
          400: "#ff8fa3",
          500: "#ff6b85",
          600: "#FF4D6D",
          700: "#e63d5e",
          800: "#bf3250",
          900: "#9a2844",
        },
        dark: {
          50: "#f5f5f7",
          100: "#e5e5eb",
          900: "#0F172A",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-poppins)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gradient-primary":
          "linear-gradient(135deg, #6C3BFF 0%, #FF4D6D 100%)",
        "gradient-dark": "linear-gradient(135deg, #0F172A 0%, #1a1f3a 100%)",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.6s ease-out",
        "scale-in": "scaleIn 0.5s ease-out",
      },
      keyframes: {
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        slideUp: {
          from: { transform: "translateY(20px)", opacity: "0" },
          to: { transform: "translateY(0)", opacity: "1" },
        },
        scaleIn: {
          from: { transform: "scale(0.95)", opacity: "0" },
          to: { transform: "scale(1)", opacity: "1" },
        },
      },
      boxShadow: {
        glow: "0 0 20px rgba(108, 59, 255, 0.3)",
        "glow-secondary": "0 0 20px rgba(255, 77, 109, 0.3)",
      },
    },
  },
  plugins: [],
};

export default config;
