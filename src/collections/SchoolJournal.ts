import type { GlobalConfig } from 'payload'

export const SchoolJournal: GlobalConfig = {
  slug: 'schooljournal',
  label: 'Link Do Dziennika',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'link',
      label: 'Link Do Dziennika',
      type: 'text',
    },
  ],
}
