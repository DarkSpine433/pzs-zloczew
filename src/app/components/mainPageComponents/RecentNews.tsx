import { getPayloadHMR } from '@payloadcms/next/utilities'
import configPromise from '@payload-config'
import BlockParser from '@/app/components/BlockParser'
import { unstable_noStore as noStore } from 'next/cache'
import CheckHight from './CheckHight'

type Props = {}

const RecentNews = async (props: Props) => {
  noStore()
  const payload = await getPayloadHMR({ config: configPromise })
  const data = await payload.find({
    collection: 'pages',
    limit: 10,
  })

  const dataDisplay = data.docs.map((doc: any, index) => (
    <CheckHight key={doc.id + index}>
      <h2 className="text-4xl font-extrabold pb-5 text-center ">{doc.title}</h2>
      <hr className=" w-full h-[0.1rem] bg-gradient-to-r from-transparent via-primary/50 to-transparent border-none p-0 " />
      <div className="h-fit md:px-5 pt-5 space-y-10">
        {doc?.Content.map((block: any) => {
          return <BlockParser block={block} key={block.id} />
        })}
        <hr className=" w-full h-[0.1rem] bg-gradient-to-r from-transparent via-primary/50 to-transparent border-none p-0 " />
      </div>
    </CheckHight>
  ))

  return <div className="grid md:grid-cols-2 gap-10 justify-center ">{dataDisplay}</div>
}

export default RecentNews
