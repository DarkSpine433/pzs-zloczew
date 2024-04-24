// @ts-nocheck
import type { CollectionConfig } from 'payload/types'

import { ImageUrl } from './blocks/ImageUrl'
import { RichTextBlock } from './blocks/RichTextBlock'
import { Iframe } from './blocks/Iframe'

export const Pages: CollectionConfig = {
  slug: 'pages',
  labels: {
    singular: 'Podstrony',
    plural: 'Podstrony',
  },

  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      label: 'Tytuł',
      type: 'text',
    },
    {
      name: 'Content', // required
      label: 'Kontent Strony',
      type: 'blocks', // required
      minRows: 1,
      maxRows: 20,

      blocks: [ImageUrl, RichTextBlock, Iframe],
    },
  ],
}
