import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({

    integrations: [tailwind({

		applyBaseStyles: false

	}), react()],
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
