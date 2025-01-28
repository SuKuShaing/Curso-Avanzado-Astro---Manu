import { defineCollection, z } from "astro:content";

const blog = defineCollection({
    type: "content",
    schema: z.object({
        heroImage: z.string(),
        title: z.string(),
        pubDate: z.coerce.date(),
        tags: z.array(z.string()),
    })
});

export const collections = { blog };