// @ts-nocheck
import type { GlobalConfig } from 'payload/types'

import { ImageUrl } from './blocks/ImageUrl'
import { RichTextBlock } from './blocks/RichTextBlock'
import { Iframe } from './blocks/Iframe'

export const Contact: GlobalConfig = {
  slug: 'contact',
  label: 'Kontakt',

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
