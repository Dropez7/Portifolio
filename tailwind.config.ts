import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        mpurple: "#6d63f8",
        mcian: "#5BE9B9",
        mblackgray: "#1E1E2E",
      },
    },
    fontFamily:
      {
        sans: ["Inter", "sans-serif"],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
  },
  plugins: [],
} satisfies Config;
