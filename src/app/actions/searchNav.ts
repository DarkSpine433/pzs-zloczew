'use server'
import { getPayload } from 'payload'
import configPromise from '../../payload.config'
type Props = {
  title: string
}

export const searchNav = async ({ title }: Props) => {
  const SearchEngineArray: { pages: any[]; projects: any[]; news: any[] } = {
    pages: [],
    projects: [],
    news: [],
  }
  const limitOfSearches = 10

  const payload = await getPayload({ config: configPromise })
  var docx = await payload.find({
    collection: 'pages',
    sort: '-createdAt',
    limit: limitOfSearches,
    where: {
      title: {
        like: title,
      },
    },
  })
  docx.docs.map((doc) => SearchEngineArray.pages.push(doc))

  var { docs } = await payload.find({
    collection: 'news',
    sort: '-createdAt',
    limit: limitOfSearches,
    where: {
      or: [
        {
          title: {
            like: title,
          },
        },
        {
          description: {
            like: title,
          },
        },
        {
          keywords: {
            like: title,
          },
        },
      ],
    },
  })
  docs.map((doc) => SearchEngineArray.news.push(doc))

  return SearchEngineArray
}
