import type { CollectionConfig } from 'payload/types'
import { ImageUrl } from './blocks/ImageUrl'
import { RichTextBlock } from './blocks/RichTextBlock'

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
      name: 'Content', // required
      label: 'Kontent Strony',
      type: 'blocks', // required
      minRows: 1,
      blocks: [ImageUrl, RichTextBlock],
    },
  ],
}
