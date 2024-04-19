import type { CollectionConfig } from 'payload/types'

export const Posts: CollectionConfig = {
  slug: 'posts',
  fields: [
    {
      name: 'title',
      type: 'text',
    },
    {
      name: 'author',
      label: 'Post Author',
      type: 'relationship',
      relationTo: 'users',
    },
  ],
}
