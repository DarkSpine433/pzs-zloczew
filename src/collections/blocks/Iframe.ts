// @ts-nocheck

import { Block } from 'payload/types'

export const Iframe: Block = {
  slug: 'iframe', // required
  labels: {
    singular: 'Iframe',
    plural: 'Iframe',
  },
  fields: [
    // required
    {
      name: 'Iframe',
      label: 'Iframe Input',
      type: 'text',
      required: true,
    },
  ],
}
