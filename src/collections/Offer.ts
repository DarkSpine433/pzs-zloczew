import type { CollectionConfig } from 'payload/types'

export const Offer: CollectionConfig = {
  slug: 'offer',
  labels: {
    singular: 'Oferta Szkoły',
    plural: 'Oferta Szkoły',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'asd',
      type: 'richText',
    },
  ],
}
