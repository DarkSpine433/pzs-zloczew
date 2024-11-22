// @ts-nocheck
import type { Block } from 'payload/types'

import {
  FixedToolbarFeature,
  HeadingFeature,
  HTMLConverterFeature,
  InlineToolbarFeature,
  lexicalEditor,
  lexicalHTML,
} from '@payloadcms/richtext-lexical'

export const RichTextBlock: Block = {
  slug: 'text',
  labels: {
    singular: 'tekst',
    plural: 'tekst',
  },

  fields: [
    {
      name: 'RichText',
      label: 'Tekst Input || Użyj "/" aby użyć więcej opcji lub zaznacz tekst zeby go edytować',
      type: 'richText',

      editor: lexicalEditor({
        features: ({ defaultFeatures, rootFeatures }) => {
          return [
            ...defaultFeatures,
            ...defaultFeatures,

            HeadingFeature({ enabledHeadingSizes: ['h2', 'h3', 'h4'] }),
            FixedToolbarFeature(),
            InlineToolbarFeature(),
          ]
        },
      }),
    },
  ],
}
