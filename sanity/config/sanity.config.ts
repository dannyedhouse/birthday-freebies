import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {schemaTypes} from '../schemaTypes'

export default defineConfig({
  name: 'birthday-freebies-cms',
  title: 'Birthday Freebies | Studio',
  basePath: '/studio',

  projectId: process.env.NEXT_PUBLIC_SANITY_STUDIO_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_STUDIO_DATASET!,

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
