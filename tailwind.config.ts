import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "#080B11",
        surface: {
          dark: "#080B11",
          navy: "#0D131F",
          card: "#111726",
          cardHover: "#161F33",
          cardLight: "#1A233A",
          solid: "#0E1422",
        },
        brand: {
          purple: {
            DEFAULT: "#8B5CF6",
            hover: "#7C3AED",
            light: "#A78BFA",
            dark: "#6D28D9",
            glow: "rgba(139, 92, 246, 0.25)",
          },
          cyan: {
            DEFAULT: "#00F0FF",
            hover: "#06B6D4",
            light: "#38BDF8",
            dark: "#0891B2",
            glow: "rgba(0, 240, 255, 0.25)",
          },
          emerald: {
            DEFAULT: "#10B981",
            hover: "#059669",
            light: "#34D399",
            glow: "rgba(16, 185, 129, 0.25)",
          },
        },
        border: {
          subtle: "#1E293B",
          accent: "#2E3D5B",
          light: "#334155",
        },
        text: {
          primary: "#FFFFFF",
          secondary: "#94A3B8",
          muted: "#64748B",
          heading: "#F8FAFC",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        heading: ["var(--font-space-grotesk)", "sans-serif"],
      },
      animation: {
        "marquee-left": "marqueeLeft 35s linear infinite",
        "pulse-subtle": "pulseSubtle 4s ease-in-out infinite",
        "float-slow": "floatSlow 6s ease-in-out infinite",
        "float-delayed": "floatDelayed 7s ease-in-out infinite",
        "shimmer": "shimmer 2.5s infinite",
      },
      keyframes: {
        marqueeLeft: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        pulseSubtle: {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.85", transform: "scale(1.02)" },
        },
        floatSlow: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        floatDelayed: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
