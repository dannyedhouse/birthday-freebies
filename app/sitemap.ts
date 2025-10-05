import {MetadataRoute} from 'next'
import {client} from '@/lib/sanity'

export const revalidate = 86400

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const lastDealUpdate = await client.fetch<string>(
    `*[_type == "deals"] | order(_updatedAt desc)[0]._updatedAt`
  )

  return [
    {
      url: 'https://birthdayfreebie.co.uk',
      lastModified: lastDealUpdate ? new Date(lastDealUpdate) : new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: 'https://birthdayfreebie.co.uk/privacy-policy',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
  ]
}
