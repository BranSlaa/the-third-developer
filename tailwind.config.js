/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {},
		fontFamily: {
			header: ['Comfortaa', 'sans-serif'],
			cursive: ['Licorice', 'cursive']
		},
		dropShadow: {
			yeller: '0px 2px 1px rgb(0 0 0 / 0.3)'
		}
	},
	plugins: []
};
