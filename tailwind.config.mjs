/** @type {import('tailwindcss').Config} */
module.exports = {

	darkMode: ["class"],
  	content: [

    	"./pages/**/*.{js,jsx}",
    	"./components/**/*.{js,jsx}",
    	"./app/**/*.{js,jsx}",
    	"./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",

  	],
  	prefix: "",
  	theme: {

		container: {

			center: true,
      		padding: "2rem",
      		screens: {
        		"2xl": "1400px",
      		},

		},
    	extend: {

			keyframes: {

				"accordion-down": {

					from: { height: "0" },
          			to: { height: "var(--radix-accordion-content-height)" },

				},
        		"accordion-up": {

					from: { height: "var(--radix-accordion-content-height)" },
          			to: { height: "0" },

				},
      		},
      		animation: {

				"accordion-down": "accordion-down 0.2s ease-out",
        		"accordion-up": "accordion-up 0.2s ease-out",

			},
			colors: {

				"synetec_black": "#101828",
				"synetec_dark_orange": "#c33f08",
				"synetec_gray": "#f5f5f5",
				"synetec_grayish_blue": "#667085",
				"synetec_light_gray": "#d2d6de",
				"synetec_orange": "#e74e0f",
				"synetec_white": "#fdfdff",
				"synetec_dark_blue": "#0d1326",
				"synetec_zinc": "#707070",
				"synetec_blue": "#19295c",
				"synetec_off_white": "#f7f8f6",
				"synetec_slate": "#ced4e0",
				"synetec_dark_gray": "#8c8c8c"

			},
			fontFamily: {

				"poppins": [ "Poppins", "sans-serif" ]

			}

		}

	},
  	plugins: [require("tailwindcss-animate")],

}
