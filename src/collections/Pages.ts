import type { CollectionConfig } from 'payload/types'

export const Pages: CollectionConfig = {
  slug: 'pages',

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
