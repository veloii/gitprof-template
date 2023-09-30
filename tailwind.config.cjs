const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors")

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Manrope", ...defaultTheme.fontFamily.sans],
			},
			colors: {
				primary: colors.purple,
				accent: colors.indigo,
			}
		},
	},
	plugins: [],
}
