import type { GlobalConfig } from 'payload/types'
import payload from 'payload'

import { GlobalBeforeValidateHook } from 'payload/types'
import { title } from 'process'

const BeforeChangeHook: GlobalBeforeValidateHook = async ({
  data, // incoming data to update or create with
}) => {
  return data + 'test'
}

const Nav: GlobalConfig = {
  slug: 'nav',
  label: 'Nawigacja',
  access: {
    read: () => true,
  },
  hooks: {
    afterChange: [BeforeChangeHook],
  },

  fields: [
    {
      name: 'nav',
      label: 'Nawigacja',
      type: 'array',
      fields: [
        {
          name: 'title',
          label: 'Tytuł',
          type: 'text',
        },
      ],
    },
    {
      name: 'page',
      label: 'Strona',
      type: 'relationship',
      relationTo: 'pages',
    },
  ],
}
export default Nav
