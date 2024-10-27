import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";
import perfectionist from "eslint-plugin-perfectionist";
import tailwind from "eslint-plugin-tailwindcss";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
	allConfig: js.configs.all,
	baseDirectory: __dirname,
	recommendedConfig: js.configs.recommended,
});
const config = [
	...compat.extends("next/core-web-vitals", "next/typescript"),
	...tailwind.configs["flat/recommended"],
	perfectionist.configs["recommended-natural"],
	{
		rules: {
			"@typescript-eslint/consistent-type-imports": "error",
		},
	},
];

export default config;
