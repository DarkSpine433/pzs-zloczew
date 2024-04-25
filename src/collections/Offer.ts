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

      blocks: [ImageUrl, RichTextBlock],
    },
  ],
}
