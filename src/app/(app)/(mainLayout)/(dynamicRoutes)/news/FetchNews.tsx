import { getPayloadHMR } from '@payloadcms/next/utilities'
import configPromise from '@payload-config'
import { parseISO, format } from 'date-fns'

import { unstable_noStore as noStore } from 'next/cache'
import Image from 'next/image'
import BlockParser from '@/app/components/BlockParser'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import FetchRecentNews from '@/app/components/mainPageComponents/RecentNews/FetchRecentNews'

type Props = {
  NumberOfNewsToFetch: number
  searchParams: any
}

const FetchNews = async ({ NumberOfNewsToFetch, searchParams }: Props) => {
  noStore()
  const payload = await getPayloadHMR({ config: configPromise })
  const data = await payload.find({
    collection: 'news',
    limit: NumberOfNewsToFetch,
    sort: '-createdAt',
    where: {},
  })

  return (
    <>
      <FetchRecentNews data={data} />
    </>
  )
}

export default FetchNews
