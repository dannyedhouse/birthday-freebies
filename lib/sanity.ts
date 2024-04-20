import imageUrlBuilder from '@sanity/image-url'
import {SanityImageSource} from '@sanity/image-url/lib/types/types'
import {createClient} from 'next-sanity'

export const client = createClient({
  apiVersion: process.env.NEXT_PUBLIC_SANITY_STUDIO_API_VERSON,
  projectId: process.env.NEXT_PUBLIC_SANITY_STUDIO_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_STUDIO_DATASET,
  useCdn: true,
})

export const writeClient = createClient({
  apiVersion: process.env.NEXT_PUBLIC_SANITY_STUDIO_API_VERSON,
  projectId: process.env.NEXT_PUBLIC_SANITY_STUDIO_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_STUDIO_DATASET,
  token: process.env.SANITY_STUDIO_TOKEN,
  useCdn: false,
})

const builder = imageUrlBuilder(client)

export function urlFor(source: SanityImageSource) {
  return builder.image(source)
}
