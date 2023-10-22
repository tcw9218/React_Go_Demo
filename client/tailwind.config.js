import colors from "tailwindcss/colors"
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		fontSize: {
			xs: ['12px', '16px'],
			sm: ['14px', '20px'],
			base: ['16px', '19.5px'],
			lg: ['18px', '21.94px'],
			xl: ['20px', '24.38px'],
			'2xl': ['24px', '29.26px'],
			'3xl': ['28px', '50px'],
			'4xl': ['48px', '58px'],
			'8xl': ['80px', '106px']
		},
		extend: {
			fontFamily: {
				palanquin: ['Palanquin', 'sans-serif'],
				montserrat: ['Montserrat', 'sans-serif'],
			},
			colors: {
				'primary': "#ECEEFF",
				"coral-red": "#FF6452",
				"slate-gray": "#6D6D6D",
				"pale-blue": "#F5F6FF",
				"white-400": "rgba(255, 255, 255, 0.80)",
				secondary: {
					back: colors.neutral[100],
					default: colors.neutral[200],
					hover: colors.neutral[300],
					border: colors.neutral[400],
					text: colors.neutral[500],
					dark: colors.neutral[800],
					["dark-hover"]: colors.neutral[900],
				}
			},
			boxShadow: {
				'3xl': '0 10px 40px rgba(0, 0, 0, 0.1)'
			},
			backgroundImage: {
				'hero': "url('assets/images/collection-background.svg')",
				'card': "url('assets/images/thumbnail-background.svg')",
			},
			screens: {
				"wide": "1440px"
			}
		},
	},
	plugins: [
		require('@tailwindcss/forms'),
	],
}
