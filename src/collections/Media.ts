import type { CollectionConfig } from 'payload/types'

import { ImageUrl } from './blocks/ImageUrl'
import { RichTextBlock } from './blocks/RichTextBlock'
import { Iframe } from './blocks/Iframe'
import { UploadFile } from '../components/collection/UploadFile'

export const Media: CollectionConfig = {
  slug: 'uploadfile', // required
  labels: {
    singular: 'Wrzuć plik lub zdjęcie nie większe niż 4MB',
    plural: 'Wrzuć plik lub zdjęcie nie większe niż 4MB',
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
  ],
}
