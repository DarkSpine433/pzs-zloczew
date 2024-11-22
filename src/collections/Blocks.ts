import { Block, CollectionConfig } from 'payload'

const QuoteBlock: Block = {
  slug: 'Quote', // required
  imageURL: 'https://google.com/path/to/image.jpg',
  imageAltText: 'A nice thumbnail image to show what this block looks like',
  interfaceName: 'QuoteBlock', // optional

  fields: [
    // required
    {
      name: 'quoteHeader',
      type: 'text',
      required: true,
    },
    {
      name: 'quoteText',
      type: 'text',
    },
  ],
}

export const Blocks: CollectionConfig = {
  slug: 'blocks',
  access: {
    read: () => false,
  },
  fields: [
    {
      name: 'layout', // required
      type: 'blocks', // required

      blocks: [
        // required
        QuoteBlock,
      ],
    },
  ],
}
