import type { GlobalConfig } from 'payload/types'
import { ImageUrl } from './blocks/ImageUrl'
import { RichTextBlock } from './blocks/RichTextBlock'

export const Offer: GlobalConfig = {
  slug: 'offer',
  label: 'Oferta Szkoły',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'Content', // required
      label: 'Kontent Strony',
      type: 'blocks', // required
      minRows: 1,
      blocks: [ImageUrl, RichTextBlock],
    },
  ],
}
