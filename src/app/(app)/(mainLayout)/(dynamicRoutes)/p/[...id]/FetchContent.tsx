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
      <div
        className=" bg-[url('/img/pagesImg/h1.jpg')]
            relative
            overflow-hidden
            block
            z-10
         
            bg-cover
            bg-no-repeat
            bg-center

            after:content-['']
            after:absolute
            after:inset-0
            after:block
            after:bg-gradient-to-br
            after:from-black/70
            after:to-gray-black/30
          
            after:z-[-5]
            
            border-b-8 shadow-lg  border-gray-500 py-20 mb-20 after:top-0 after:left-0 after:w-full after:h-full after:bg-black/50 "
      >
        <h1 className="text-center font-extrabold text-[3rem] sm:text-7xl  bg-clip-text text-background/40   tracking-widest bg-[url('/img/news/grain.jpg')] ">
          {data.title}
        </h1>
      </div>

      <div className="mt-10 px-3   py-10 flex gap-4 flex-col items-center max-w-6xl mx-auto  rounded-xl">
        {data?.Content.map((block: any, index: number) => {
          return <BlockParser block={block} key={block.id + index + 'key'} />
        })}
      </div>
    </>
  )
}

export default FetchContent
