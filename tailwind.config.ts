import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Base / Backgrounds
        bg: "#0C0C0C",
        footerBg: "#080808",
        surface: "#161616",
        surfaceDark: "#111111",
        surfaceAlt: "#141414",
        "surface-dim": "#131313",
        "surface-bright": "#3a3939",
        "surface-container-lowest": "#0e0e0e",
        "surface-container-low": "#1c1b1b",
        "surface-container": "#201f1f",
        "surface-container-high": "#2a2a2a",
        "surface-container-highest": "#353534",
        "surface-variant": "#353534",

        // Typography / Foreground
        primaryText: "#F0EDE8",
        "on-surface": "#e5e2e1",
        "on-surface-variant": "#c3c9b0",
        "inverse-surface": "#e5e2e1",
        "inverse-on-surface": "#313030",

        // Accents & Signals
        accent: "#C8FF57",
        "surface-tint": "#a3d731",
        "primary-container": "#bef44d",
        "on-primary-container": "#4f6e00",
        "primary-fixed": "#bef44d",
        "primary-fixed-dim": "#a3d731",
        "on-primary-fixed": "#141f00",
        "on-primary-fixed-variant": "#374e00",

        // Neutrals & Secondary
        muted: "#888888",
        secondary: "#c9c6c1",
        subtle: "#666666",
        faint: "#444444",
        outline: "#8d937c",
        "outline-variant": "#434936",
        divider: "#222222",
        dividerSubtle: "#1A1A1A",
      },
      fontFamily: {
        sans: ["Inter", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
        serif: ['"DM Serif Display"', "serif"],
        editorial: ['"EB Garamond"', "serif"],
        mono: ['"JetBrains Mono"', "monospace"],
      },
      borderRadius: {
        DEFAULT: "0px",
        none: "0px",
        sm: "0px",
        md: "0px",
        lg: "0px",
        xl: "0px",
        "2xl": "0px",
        "3xl": "0px",
        full: "0px",
      },
      spacing: {
        "space-xxs": "2px",
        "space-xs": "4px",
        "space-sm": "8px",
        "space-md": "16px",
        "space-lg": "24px",
        "space-xl": "32px",
        "space-2xl": "48px",
        "space-3xl": "64px",
        "space-4xl": "96px",
        "space-5xl": "128px",
        gutter: "1px",
      },
      animation: {
        "lime-blink": "pulse-lime 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        ticker: "ticker 40s linear infinite",
      },
      keyframes: {
        "pulse-lime": {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.2", transform: "scale(0.9)" },
        },
        ticker: {
          "0%": { transform: "translate3d(0, 0, 0)" },
          "100%": { transform: "translate3d(-50%, 0, 0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
