import { defineCollection, z } from 'astro:content'

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publicationDate: z.date(),
    image: z.string().url(),
  }),
})

const todayILearnedCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    publicationDate: z.date(),
  }),
})

export const collections = {
  blog: blogCollection,
  todayILearned: todayILearnedCollection,
}
