/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'blue-light': 'rgb(var(--blue-light))',
				'blue-dark': 'rgb(var(--blue-dark))',
				'blue-gradient': 'var(--blue-gradient)',
			},
			backgroundImage: {
				'blue-gradient': 'var(--blue-gradient)',
			},
		},
	},
	plugins: [],
}
