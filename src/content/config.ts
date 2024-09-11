// 1. Import utilities from `astro:content`
import { defineCollection, z } from 'astro:content'

// 2. Define a `type` and `schema` for each collection
const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publicationDate: z.date(),
    image: z.string().url(),
  }),
})

// 3. Export a single `collections` object to register your collection(s)
export const collections = {
  blog: blogCollection,
}
