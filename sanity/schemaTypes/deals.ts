export default {
  name: 'deals',
  type: 'document',
  title: 'Deals',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title of the freebie/deal (item + retailer)',
    },
    {
      name: 'heading',
      type: 'string',
      title: 'Display heading for the freebie/deal',
    },

    {
      name: 'image',
      type: 'image',
      title: 'Image for the freebie/deal',
    },
    {
      name: 'retailer',
      type: 'string',
      title: 'Retailer',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug (unique key)',
      options: {
        source: 'title',
      },
    },
    {
      name: 'tag',
      type: 'string',
      title: 'Tag for the freebie/deal',
      options: {
        list: ['freebie', 'discount', 'no-app', 'limited'],
      },
    },
    {
      name: 'content',
      type: 'array',
      title: 'Content',
      of: [
        {
          type: 'block',
        },
      ],
    },
    {
      name: 'url',
      type: 'url',
      title: 'URL to freebie/deal',
    },
  ],
}
