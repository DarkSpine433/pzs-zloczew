// @ts-nocheck
import type { CollectionConfig } from 'payload/types'

import { HTMLConverterFeature, lexicalEditor, lexicalHTML } from '@payloadcms/richtext-lexical'

import { Block } from 'payload/types'

export const ImageUrl: Block = {
  slug: 'imageurl', // required
  labels: {
    singular: 'Zdjęcie Przez Link',
    plural: 'Zdjęcie Przez Link',
  },
  fields: [
    // required
    { name: 'alt', type: 'text', required: true },
    {
      name: 'ImageUrl',
      label: 'Link do Zdjęcia',
      type: 'text',
      required: true,
    },
  ],
}
