import { unstable_noStore as noStore } from 'next/cache'
import BlockParser from '@/app/components/BlockParser'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import configPromise from '@payload-config'

type Props = {}

const FetchContent = async ({ id }: { id: string }) => {
  noStore()
  const payload = await getPayloadHMR({ config: configPromise })
  const data: any = await payload.findByID({
    collection: 'pages',
    id: id,
  })
  console.log(typeof data)
  return (
    <>
      {data ? (
        data?.Content.map((block: any, index: number) => {
          return <BlockParser block={block} key={block.id + index} />
        })
      ) : (
        <div>404</div>
      )}
    </>
  )
}

export default FetchContent
