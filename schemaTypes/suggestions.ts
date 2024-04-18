// eslint-disable-next-line import/no-anonymous-default-export
export default {
  name: 'suggestions',
  type: 'document',
  title: 'Suggestions',
  fields: [
    {
      name: 'retailer',
      type: 'string',
      title: 'Retailer of the suggested new freebie/deal',
    },
    {
      name: 'description',
      type: 'string',
      title: 'Description for the suggested new freebie/deal',
    },
    {
      name: 'url',
      type: 'url',
      title: 'URL for the new freebie/deal',
    },
  ],
}
