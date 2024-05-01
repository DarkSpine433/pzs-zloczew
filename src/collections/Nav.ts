import { GlobalConfig } from 'payload/types'

const Nav: GlobalConfig = {
  slug: 'nav',
  label: 'Nawigacja',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'nav',
      type: 'array',

      fields: [
        {
          name: 'page',
          type: 'relationship',
          relationTo: 'pages', // "pages" is the slug of an existing collection
          required: true,
        },
      ],
    },
  ],
}

export default Nav
