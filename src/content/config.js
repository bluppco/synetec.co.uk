import { z, defineCollection } from "astro:content"

const footerColumnOneCollection = defineCollection({

	schema: z.object({

		image_alternative_text: z.string().optional(),
		image_source: z.string().optional(),
		live: z.boolean(),
		order: z.number(),
		title: z.string().optional(),
        link: z.string().optional()

	})

})
const footerColumnTwoCollection = defineCollection({

	schema: z.object({

		image_alternative_text: z.string().optional(),
		image_source: z.string().optional(),
		live: z.boolean(),
		order: z.number(),
		title: z.string().optional(),
        link: z.string().optional()

	})

})

export const collections = {

	"footer-column-one": footerColumnOneCollection,
	"footer-column-two": footerColumnTwoCollection

}
