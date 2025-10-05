import {z} from 'zod'

export const suggestionFormSchema = z.object({
  retailer: z.string().min(1).max(25),
  description: z.string().min(1).max(250),
  url: z.url(),
})
