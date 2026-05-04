import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          base: "#050508",
          surface: "#0d0d1a",
          card: "#111120",
        },
        accent: {
          cyan: "#00d4ff",
          purple: "#8b5cf6",
          blue: "#3b82f6",
          green: "#10b981",
          orange: "#f59e0b",
        },
        text: {
          primary: "#f0f0f8",
          secondary: "#8888a8",
          muted: "#5555770",
        },
      },
      fontFamily: {
        mono: ["var(--font-mono)", "JetBrains Mono", "Fira Code", "monospace"],
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "glow": "glow 2s ease-in-out infinite alternate",
        "flow": "flow 3s linear infinite",
        "scan": "scan 8s linear infinite",
        "float": "float 6s ease-in-out infinite",
      },
      keyframes: {
        glow: {
          "0%": { boxShadow: "0 0 5px #00d4ff33, 0 0 10px #00d4ff22" },
          "100%": { boxShadow: "0 0 15px #00d4ff66, 0 0 30px #00d4ff33" },
        },
        flow: {
          "0%": { strokeDashoffset: "100" },
          "100%": { strokeDashoffset: "0" },
        },
        scan: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100vh)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(rgba(0,212,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.03) 1px, transparent 1px)",
        "radial-glow":
          "radial-gradient(ellipse at center, rgba(0,212,255,0.08) 0%, transparent 70%)",
        "hero-gradient":
          "radial-gradient(ellipse at 50% 0%, rgba(0,212,255,0.12) 0%, rgba(139,92,246,0.06) 40%, transparent 70%)",
      },
      backgroundSize: {
        "grid-sm": "40px 40px",
        "grid-md": "60px 60px",
      },
    },
  },
  plugins: [],
};

export default config;
