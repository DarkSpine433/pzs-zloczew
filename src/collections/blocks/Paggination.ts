// @ts-nocheck
import type { CollectionConfig } from 'payload/types'
import { Block } from 'payload/types'
import { RichTextBlock } from './RichTextBlock'
import { ImageUrl } from './ImageUrl'
import { Iframe } from './Iframe'
import { GenerateWithOpenAiText } from '../../components/collection/GenerateWithOpenAiText'
import { SocialMediaPosts } from './SocialMediaPosts'
import { CustomCode } from './CustomCode'
export const Paggination: Block = {
  slug: 'paggination', // required
  labels: { singular: 'paggination', plural: 'paggination' },

  fields: [
    // required
    {
      name: 'maxItemsPerPage',
      label: 'Ilosc elementów na strone',
      type: 'number',
      max: 25,
      min: 6,
      defaultValue: 6,
      required: true,
    },
    {
      name: 'page',
      label: 'Strona',
      type: 'array',

      fields: [
        {
          label: 'Meta Dane',
          type: 'collapsible',

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
              type: 'textarea',
              required: true,
              maxLength: 160,
            },
            {
              name: 'keywords',
              label: 'Key Words',
              type: 'text',
              required: true,
              maxLength: 160,
            },
          ],
        },
        {
          label: 'Dodaj Konent Strony',
          type: 'collapsible',
          fields: [
            {
              name: 'Content',
              label: 'kontent',
              type: 'blocks',
              minRows: 1,
              blocks: [ImageUrl, RichTextBlock, Iframe],
            },
          ],
        },
      ],
    },
  ],
}
