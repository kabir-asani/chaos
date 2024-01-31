/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {},
		screens: {
			// Mobile
			sm: '576px',
			// Tablet
			md: '768px',
			// Laptop
			lg: '1024px',
			// Desktop
			xl: '1280px'
		}
	},
	plugins: []
};
