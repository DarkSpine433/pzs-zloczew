// @ts-nocheck
import type { CollectionConfig } from 'payload/types'

import { ImageUrl } from './blocks/ImageUrl'
import { RichTextBlock } from './blocks/RichTextBlock'
import { Iframe } from './blocks/Iframe'
import { GenerateWithOpenAiText } from '../components/collection/GenerateWithOpenAiText'
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
      required: true,
      maxLength: 90,
    },
    {
      name: 'description',
      label: 'Opis',
      type: 'text',
      maxLength: 600,
    },
    {
      name: 'test',
      type: 'ui',
      admin: {
        components: {
          Field: GenerateWithOpenAiText,
        },
      },
    },
    {
      name: 'thumbnail',
      label: 'Miniaturka Link',
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
