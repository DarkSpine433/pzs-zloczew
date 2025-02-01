// @ts-nocheck
import type { CollectionConfig } from 'payload/types'

import type { Block } from 'payload'

export const TopicHeading: Block = {
  slug: 'topic', // required
  labels: {
    singular: 'Temat',
    plural: 'Temat',
  },
  fields: [
    // required
    {
      name: 'content',
      label: 'Wpisz temat (max 40 znaków | Temat jest generowany jako h2)',
      type: 'text',
      required: true,
      maxLength: 40,
    },
  ],
}
