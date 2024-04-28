// @ts-nocheck
import type { CollectionConfig } from 'payload/types'

import { ImageUrl } from './blocks/ImageUrl'
import { RichTextBlock } from './blocks/RichTextBlock'
import { Iframe } from './blocks/Iframe'

export const Contact: CollectionConfig = {
  slug: 'contact',
  labels: {
    singular: 'Kontakt',
    plural: 'Kontakt',
  },

  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'Content',
      type: 'blocks',
      blocks: [ImageUrl, RichTextBlock, Iframe],
    },
  ],
}
