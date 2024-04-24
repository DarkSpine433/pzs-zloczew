import { getPayloadHMR } from '@payloadcms/next/utilities'
import configPromise from '@payload-config'
import BlockParser from '@/app/components/BlockParser'
import { unstable_noStore as noStore } from 'next/cache'

type Props = {}

const RecentNews = async (props: Props) => {
  noStore()
  const payload = await getPayloadHMR({ config: configPromise })
  const data = await payload.find({
    collection: 'pages',
  })

  const dataDisplay = data.docs.map((doc: any) =>
    doc?.Content.map((block: any) => {
      return (
        <>
          <BlockParser block={block} />
        </>
      )
    }),
  )
  return <>{dataDisplay}</>
}

export default RecentNews
