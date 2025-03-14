// storage-adapter-import-placeholder

import { mongooseAdapter } from '@payloadcms/db-mongodb'

import sharp from 'sharp' // sharp-import
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'

import { Categories } from './collections/Categories'
import { Media } from './collections/Media'
import { Pages } from './collections/Pages'

import { Users } from './collections/Users'

import { Header } from './Header/config'
import { plugins } from './plugins'
import { defaultLexical } from '@/fields/defaultLexical'
import { getServerSideURL } from './utilities/getURL'
import { Offer } from './collections/Offer'
import { Contact } from './collections/Contact'
import { SchoolJournal } from './collections/SchoolJournal'
import { News } from './collections/News'
import { Posts } from './collections/Posts'
import { Projects } from './collections/Projects'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    avatar: 'default',
    suppressHydrationWarning: true,

    meta: {
      icons: [{ url: '/favicon.ico', type: 'image/x-icon', sizes: '16x16', rel: 'icon' }],
      titleSuffix: ' - PZS Złoczew',
      description: 'Admin panel for PZS Złoczew',
      keywords: 'PZS Złoczew, Admin, Panel',
      openGraph: {
        images: [{ url: '/deafult_og.jpeg', width: 1200, height: 630, alt: 'PZS Złoczew' }],
        description: 'Admin panel for PZS Złoczew',
        siteName: 'PZS Złoczew',
        title: 'Admin Panel - PZS Złoczew',
      },
    },

    components: {
      // The `BeforeLogin` component renders a message that you see while logging into your admin panel.
      // Feel free to delete this at any time. Simply remove the line below and the import `BeforeLogin` statement on line 15.
      beforeLogin: ['@/components/BeforeLogin'],
      // The `BeforeDashboard` component renders the 'welcome' block that you see after logging into your admin panel.
      // Feel free to delete this at any time. Simply remove the line below and the import `BeforeDashboard` statement on line 15.
      beforeDashboard: ['@/components/BeforeDashboard'],

      graphics: {
        Logo: '@/app/components/Logo',
        Icon: '@/app/components/Icon',
      },
    },
    importMap: {
      baseDir: path.resolve(dirname),
    },
    user: Users.slug,
    livePreview: {
      breakpoints: [
        {
          label: 'Mobile',
          name: 'mobile',
          width: 375,
          height: 667,
        },
        {
          label: 'Tablet',
          name: 'tablet',
          width: 768,
          height: 1024,
        },
        {
          label: 'Desktop',
          name: 'desktop',
          width: 1440,
          height: 900,
        },
      ],
    },
  },
  // This config helps us configure global or default features that the other editors can inherit
  editor: defaultLexical,
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || '',
  }),
  collections: [Pages, News, Media, Categories, Users, Posts, Projects],
  cors: [getServerSideURL()].filter(Boolean),
  globals: [Header, Offer, Contact, SchoolJournal],
  plugins: [
    ...plugins,
    // storage-adapter-placeholder
  ],

  secret: process.env.PAYLOAD_SECRET,
  sharp,
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
})
