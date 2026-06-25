import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-space-grotesk)", "system-ui", "sans-serif"],
      },
      colors: {
        brand: {
          teal: "#2dd4bf",
          violet: "#7c3aed",
        },
      },
      backgroundImage: {
        "gradient-brand": "linear-gradient(135deg, #7c3aed 0%, #2dd4bf 100%)",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out forwards",
        "pulse-slow": "pulse 4s cubic-bezier(0.4,0,0.6,1) infinite",
      },
      keyframes: {
        fadeUp: {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: "none",
            color: "#334155",
            a: { color: "#7c3aed", textDecoration: "none", fontWeight: "500" },
            "h1,h2,h3,h4": { color: "#0f172a", fontFamily: "var(--font-space-grotesk)" },
            code: { color: "#7c3aed", backgroundColor: "#f1f5f9", padding: "0.125rem 0.375rem", borderRadius: "0.25rem", fontWeight: "400" },
            "code::before": { content: '""' },
            "code::after": { content: '""' },
            table: { width: "100%", borderCollapse: "collapse" },
            "thead th": { backgroundColor: "#f1f5f9", padding: "0.6rem 1rem", textAlign: "left", fontWeight: "600", color: "#0f172a", borderBottom: "2px solid #e2e8f0" },
            "tbody td": { padding: "0.6rem 1rem", borderBottom: "1px solid #e2e8f0", color: "#334155" },
            "tbody tr:last-child td": { borderBottom: "none" },
            "tbody tr:hover": { backgroundColor: "#f8fafc" },
          },
        },
      },
    },
  },
  plugins: [typography],
};

export default config;
