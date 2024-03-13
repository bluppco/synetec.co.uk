import { defineConfig } from "astro/config"

import cloudflare from "@astrojs/cloudflare"
import mdx from "@astrojs/mdx"
import react from "@astrojs/react"
import tailwind from "@astrojs/tailwind"

// https://astro.build/config
export default defineConfig({

    integrations: [tailwind({

		applyBaseStyles: false

	}), react(), mdx()],
  	output: "server",
  	adapter: cloudflare({

		routes: {

			exclude: ["/icons/*", "/images/*", "/logo/*"]

		},
		runtime: {

		  	mode: 'local',
		  	type: 'pages'

		}

	}),
	image: {

		service: {
			entrypoint: "astro/assets/services/noop"
		}

	},

})
