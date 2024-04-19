import type { GlobalConfig } from 'payload/types'

const Header: GlobalConfig = {
  slug: 'header',
  fields: [
    {
      name: 'nav',
      type: 'array',
      fields: [
        {
          name: 'page',
          type: 'relationship',
          relationTo: 'pages',
        },
      ],
    },
  ],
}
export default Header
