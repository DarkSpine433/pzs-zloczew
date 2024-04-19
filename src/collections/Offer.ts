import type { CollectionConfig } from 'payload/types'

export const Offer: CollectionConfig = {
  slug: 'posts',
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },

    {
      name: 'content',
      type: 'richText',
    },
  ],
}
