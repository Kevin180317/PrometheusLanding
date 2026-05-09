/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				cyan: {
					DEFAULT: '#39BAC8',
					light: '#68C6E1',
				},
				dark: {
					DEFAULT: '#0D1117',
					2: '#111820',
					3: '#161E27',
				},
				gray: {
					custom: '#AFAFAF',
					custom2: '#666',
				},
			},
			fontFamily: {
				bebas: ['"Bebas Neue"', 'sans-serif'],
				barlow: ['Barlow', 'sans-serif'],
			},
			animation: {
				'fade-in': 'fadeIn 0.6s ease forwards',
			},
			keyframes: {
				fadeIn: {
					'0%': { opacity: '0', transform: 'translateY(24px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' },
				},
			},
		},
	},
	plugins: [],
}
