import type { Config } from "tailwindcss";

export default {
	content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
	theme: {
		extend: {
			colors: {
				background: { 100: "#111317", 200: "#1a1d23", 300: "#363d49" },
			},
		},
	},
} satisfies Config;
