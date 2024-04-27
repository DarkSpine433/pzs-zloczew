import { getPayloadHMR } from '@payloadcms/next/utilities'
import configPromise from '@payload-config'
import BlockParser from '@/app/components/BlockParser'
import { unstable_noStore as noStore } from 'next/cache'
import { Suspense } from 'react'

type Props = {}

const FetchRecentNews = async (props: Props) => {
  noStore()
  const payload = await getPayloadHMR({ config: configPromise })
  const data = await payload.find({
    collection: 'pages',
    limit: 10,
  })

  return (
    <>
      {data.docs.map((doc: any, index) => (
        <div
          key={index}
          className="w-full h-96 overflow-y-hidden relative after:absolute after:inset-0 after:bg-gradient-to-b after:from-primary/50 after:to-transparent"
        >
          <h2 className="text-4xl font-extrabold pb-5 text-center ">{doc.title}</h2>
          <hr className=" w-full h-[0.1rem] bg-gradient-to-r from-transparent via-primary/50 to-transparent border-none p-0 " />
          <div className="h-fit md:px-5 pt-5 space-y-10">
            {doc?.Content.map((block: any) => {
              return <BlockParser block={block} key={block.id} />
            })}
            <hr className=" w-full h-[0.1rem] bg-gradient-to-r from-transparent via-primary/50 to-transparent border-none p-0 " />
          </div>
        </div>
      ))}
    </>
  )
}

export default FetchRecentNews
