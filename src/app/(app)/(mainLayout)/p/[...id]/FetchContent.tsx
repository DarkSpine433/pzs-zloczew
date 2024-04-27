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

  return (
    <>
      <h1 className="text-5xl font-extrabold  py-5 uppercase text-transparent bg-clip-text bg-gradient-to-r from-primary via-foreground to-primary from-40% to-60%  space-y-10 drop-shadow-[0_1.2px_1.2px_hsl(--primary)]">
        {data.title}
      </h1>
      {data?.Content.map((block: any, index: number) => {
        return <BlockParser block={block} key={block.id + index} />
      })}
    </>
  )
}

export default FetchContent
