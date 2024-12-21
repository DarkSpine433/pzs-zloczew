'use server'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import configPromise from '../../payload.config'

type Props = {
  limit: number
  page: number
  filter: {
    year: string
  }
}

export const fetchNews = async ({ limit, page, filter }: Props) => {
  const payload = await getPayloadHMR({ config: configPromise })
  const query = {
    and: [
      filter.year && {
        createdYear: {
          in: filter.year,
        },
      },
    ],
  }

  return await payload.find({
    collection: 'news',
    limit: limit,
    page: page,
    pagination: true,

    sort: '-createdAt',
    // @ts-ignore
    where: query,
  })
}
