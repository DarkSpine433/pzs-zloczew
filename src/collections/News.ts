// @ts-nocheck
import type { CollectionConfig } from 'payload/types'

import { ImageUrl } from './blocks/ImageUrl'
import { RichTextBlock } from './blocks/RichTextBlock'
import { Iframe } from './blocks/Iframe'
import { Test } from '../components/collection/Test'
export const News: CollectionConfig = {
  slug: 'news',
  labels: {
    singular: 'Aktualności',
    plural: 'Aktualności',
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
      name: 'description',
      label: 'Opis',
      type: 'text',
    },
    {
      name: 'test',
      type: 'ui',
      admin: {
        components: {
          Field: Test,
        },
      },
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
