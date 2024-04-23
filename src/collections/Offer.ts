import type { CollectionConfig } from 'payload/types'

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
      name: 'color', // required
      type: 'radio', // required
      options: [
        // required
        {
          label: 'Mint',
          value: 'mint',
        },
        {
          label: 'Dark Gray',
          value: 'dark_gray',
        },
      ],
      defaultValue: 'mint', // The first value in options.
      admin: {
        layout: 'horizontal',
      },
    },
    {
      type: 'text',
      name: 'title',

      admin: {
        condition: (data, siblingData, { user }) => {
          if (data.color == 'Mint') {
            return true
          } else {
            return false
          }
        },
      },
    },
  ],
}
