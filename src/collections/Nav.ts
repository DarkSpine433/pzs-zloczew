import type { CollectionConfig } from 'payload/types'

import { GlobalBeforeValidateHook } from 'payload/types'

const Nav: CollectionConfig = {
  slug: 'nav',
  labels: {
    singular: 'Nawigacja',
    plural: 'Nawigacja',
  },
  access: {
    read: () => true,
  },

  fields: [
    {
      name: 'nav',
      label: 'Nawigacja',
      type: 'array',
      fields: [
        {
          name: 'page',
          type: 'relationship',
          relationTo: 'pages',
          required: true,
        },
      ],
    },
  ],
}
export default Nav
