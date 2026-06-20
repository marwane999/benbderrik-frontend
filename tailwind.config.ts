import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1B3A4B",
          light: "#2C5F7A",
          dark: "#0F2430",
        },
        secondary: {
          DEFAULT: "#C8A96E",
          light: "#DCC28A",
          dark: "#A8894A",
        },
        accent: {
          DEFAULT: "#A63232",
          light: "#C94848",
        },
        neutral: {
          50: "#F8F9FA",
          100: "#F0F1F3",
          200: "#E2E4E8",
          300: "#C4C8CF",
          400: "#9CA0A9",
          500: "#6B7080",
          600: "#4A4F5E",
          700: "#2D3140",
        },
      },
      fontFamily: {
        heading: ["Playfair Display", "Georgia", "serif"],
        body: ["Inter", "system-ui", "sans-serif"],
        accent: ["Cormorant Garamond", "Georgia", "serif"],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1.5rem",
          lg: "3rem",
        },
      },
      maxWidth: {
        container: "1280px",
      },
      boxShadow: {
        sm: "0 1px 2px rgba(27,58,75,0.06)",
        md: "0 4px 12px rgba(27,58,75,0.08)",
        lg: "0 8px 25px rgba(27,58,75,0.12)",
        xl: "0 12px 40px rgba(27,58,75,0.15)",
      },
      backgroundImage: {
        "gradient-primary": "linear-gradient(135deg, #1B3A4B 0%, #2C5F7A 100%)",
        "gradient-primary-dark": "linear-gradient(135deg, #1B3A4B 0%, #0F2430 100%)",
        "gradient-secondary": "linear-gradient(135deg, #C8A96E 0%, #DCC28A 50%, #C8A96E 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
