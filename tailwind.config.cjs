const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors")
const config = require("./config.json")

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	important: true,
	darkMode: "media",
	theme: {
		extend: {
			fontFamily: {
				sans: ["Manrope", ...defaultTheme.fontFamily.sans],
				mono: ["Fira Code", ...defaultTheme.fontFamily.mono],
			},
			colors: {
				primary: colors[config.theme.primary],
				accent: colors[config.theme.accent],
			}
		},
	},
	plugins: [
		require("@tailwindcss/typography")
	],
}
