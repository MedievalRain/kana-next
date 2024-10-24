import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/components/**/*.{ts,tsx,mdx}",
    "./src/app/**/*.{ts,tsx,mdx}",
  ],
  plugins: [],
  theme: {
    extend: {
      colors: {
        background: { 100: "#111317", 200: "#1a1d23", 300: "#363d49" },
      },
    },
  },
};
export default config;
