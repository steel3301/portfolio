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
        paper: "#F5F2E9",
        ink: "#111111",
        accent: "#0057FF",
        "ink-muted": "#555555",
        "ink-faint": "#999999",
        "border-heavy": "#111111",
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-ibm-plex-mono)", "monospace"],
      },
      fontSize: {
        "display-xl": ["clamp(3rem, 8vw, 7rem)", { lineHeight: "0.92", letterSpacing: "-0.03em" }],
        "display-lg": ["clamp(2rem, 5vw, 4.5rem)", { lineHeight: "0.94", letterSpacing: "-0.025em" }],
        "display-md": ["clamp(1.5rem, 3vw, 2.5rem)", { lineHeight: "1", letterSpacing: "-0.02em" }],
        "label-sm": ["0.6875rem", { lineHeight: "1.2", letterSpacing: "0.1em" }],
        "label-md": ["0.75rem", { lineHeight: "1.2", letterSpacing: "0.12em" }],
        "label-lg": ["0.875rem", { lineHeight: "1.3", letterSpacing: "0.1em" }],
      },
      spacing: {
        "section": "clamp(4rem, 10vw, 8rem)",
      },
      boxShadow: {
        brutal: "6px 6px 0 #111111",
        "brutal-sm": "3px 3px 0 #111111",
        "brutal-accent": "6px 6px 0 #0057FF",
      },
      borderWidth: {
        DEFAULT: "2px",
        thick: "3px",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease forwards",
        "blink": "blink 1.2s step-end infinite",
        "node-pulse": "nodePulse 2s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        nodePulse: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.9" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
