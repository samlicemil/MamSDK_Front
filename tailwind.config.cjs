const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Urbanist', ...defaultTheme.fontFamily.sans],
			},
			colors: {
				primary: {
					50: '#F5FFF4',
					100: '#E6FFEC',
					200: '#CCFFD8',
					300: '#99FFAD',
					400: '#80FF94',
					500: '#66FF4C',
					600: '#59E644',
					700: '#4CC63B',
					800: '#3E9E32',
					900: '#307729',
					950: '#1C4E1F',
				},
				secondary: {
					50: '#FFF4EF',
					100: '#FFE4DA',
					200: '#FFC6B0',
					300: '#FFA388',
					400: '#FF8C66',
					500: '#FF7A47',
					600: '#E66E40',
					700: '#CC6138',
					800: '#B35430',
					900: '#8A3F24',
					950: '#4A2113',
				},
			},
		},
	},
	plugins: [require('@tailwindcss/forms')],
	darkMode: 'class',
};
