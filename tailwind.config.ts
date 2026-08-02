import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand palette derived from the JuaraKu gold-medal logo.
        brand: {
          blue: {
            DEFAULT: "#1E78C8",
            deep: "#0B5FAF",
            royal: "#1E4AA8",
            50: "#EAF3FC",
            100: "#D3E7F8",
          },
          gold: {
            DEFAULT: "#F6B800",
            light: "#FFC83D",
          },
        },
        surface: {
          DEFAULT: "#FFFFFF",
          soft: "#F8FAFC",
          mist: "#EEF4F8",
        },
        ink: {
          DEFAULT: "#374151",
          strong: "#111827",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      borderRadius: {
        xl2: "1.75rem",
        "3xl": "2rem",
        "4xl": "2.5rem",
      },
      boxShadow: {
        soft: "0 8px 30px -8px rgba(11, 95, 175, 0.15)",
        card: "0 20px 45px -15px rgba(30, 74, 168, 0.18)",
        lift: "0 30px 60px -20px rgba(30, 74, 168, 0.28)",
        gold: "0 12px 30px -10px rgba(246, 184, 0, 0.45)",
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(135deg, #0B5FAF 0%, #1E78C8 50%, #1E4AA8 100%)",
        "gold-gradient": "linear-gradient(135deg, #FFC83D 0%, #F6B800 100%)",
        "hero-glow":
          "radial-gradient(60% 60% at 20% 20%, rgba(30,120,200,0.12) 0%, rgba(30,120,200,0) 70%), radial-gradient(50% 50% at 85% 15%, rgba(255,200,61,0.18) 0%, rgba(255,200,61,0) 70%)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-16px) rotate(2deg)" },
        },
        floatSlow: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        blob: {
          "0%, 100%": { borderRadius: "42% 58% 65% 35% / 45% 45% 55% 55%" },
          "50%": { borderRadius: "60% 40% 35% 65% / 55% 60% 40% 45%" },
        },
        spinSlow: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-slow": "floatSlow 8s ease-in-out infinite",
        blob: "blob 12s ease-in-out infinite",
        "spin-slow": "spinSlow 20s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
