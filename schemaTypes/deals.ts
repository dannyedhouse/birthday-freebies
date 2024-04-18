// eslint-disable-next-line import/no-anonymous-default-export
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
      title: 'Stock Image for the freebie/deal',
    },
    {
      name: 'retailer',
      type: 'string',
      title: 'Retailer',
    },
    {
      name: 'logo',
      type: 'image',
      title: 'Logo for the retailer',
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
      name: 'dealSummary',
      type: 'string',
      title: 'Summary of the deal',
    },
    {
      name: 'dealTerms',
      type: 'string',
      title: 'T&Cs for the deal',
    },
    {
      name: 'category',
      type: 'string',
      title: 'Category of the deal',
      options: {
        list: ['food', 'drinks', 'clothing', 'beauty', 'other'],
      },
    },
    {
      name: 'url',
      type: 'url',
      title: 'URL to freebie/deal',
    },
    {
      name: 'popularity',
      type: 'number',
      title: 'Popularity/scale of the retailer (1-10)',
      initialValue: 0,
      options: {
        list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      },
    },
  ],
}
