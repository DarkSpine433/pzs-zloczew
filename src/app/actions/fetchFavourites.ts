'use server'
import { getPayload } from 'payload'
import configPromise from '../../payload.config'

type Props = {
  idsNews: string
}

export const fetchFavourites = async ({ idsNews }: Props) => {
  var favourites: { news: any[] } = {
    news: [],
  }
  const payload = await getPayload({ config: configPromise })
  var { docs } = await payload.find({
    collection: 'news',
    where: {
      id: {
        in: idsNews.split(','),
      },
    },
    limit: 50,
  })
  favourites.news = docs

  return favourites
}
