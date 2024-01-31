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
	plugins: [require('daisyui')],
	daisyui: {
		themes: [
			{
				chaos: {
					primary: '#2797FE',
					'primary-content': '#fff',
					secondary: '#A971FF',
					'secondary-content': '#fff',
					accent: '#43B9B9',
					'accent-content': '#fff',
					neutral: '#9C9C9C',
					'base-100': '#02040A',
					'base-200': '#0E1117',
					'base-300': '#161B22',
					'base-content': '#fff'
				}
			},
			{
				light: {
					...require('daisyui/src/theming/themes')['light'],
					primary: '#2797FE',
					'primary-content': '#fff',
					secondary: '#A971FF',
					'secondary-content': '#fff',
					accent: '#43B9B9',
					'accent-content': '#fff'
				}
			}
		]
	}
};
