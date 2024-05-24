import { unstable_noStore as noStore } from 'next/cache'
import BlockParser from '@/app/components/BlockParser'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { format, parseISO } from 'date-fns'

type Props = {}

const FetchContent = async ({ id }: { id: string }) => {
  noStore()
  const payload = await getPayloadHMR({ config: configPromise })
  const data: any = await payload.findByID({
    id: id,
    collection: 'news',
  })

  return (
    <div className="flex flex-col">
      <div
        id="test"
        style={{
          backgroundImage: `url(${data.thumbnail})`,
        }}
        className={` 
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
            after:from-black/80
            after:to-gray-black/50
          
            after:z-[-5]
           
            border-b-8 shadow-lg  border-gray-500 py-12 mb-20 after:top-0 after:left-0 after:w-full after:h-full after:bg-black/70 `}
      >
        <h1
          className={`text-center font-extrabold text-[2rem] sm:text-[3rem]  bg-clip-text text-background/40 bg-[url('/img/news/grain.jpg')]   max-w-5xl px-3 mx-auto`}
        >
          {data.title}
        </h1>
        <h3 className="bg-clip-text text-left text-sm md:text-base text-gray-500/20  bg-[url('/img/news/grain.jpg')] mt-16  first-letter:text-primary  max-w-3xl px-5 mx-auto">
          Data Utworzenia:&nbsp;
          <time dateTime={data.createdAt}>{format(parseISO(data.createdAt), 'dd.MM.yyyy')}</time>
        </h3>
      </div>

      <div className=" px-4 pb-24 flex gap-10 flex-col items-center max-w-5xl mx-auto   rounded-xl">
        {data?.Content.map((block: any, index: number) => {
          return <BlockParser block={block} key={block.id + index + 'key'} />
        })}
      </div>
    </div>
  )
}

export default FetchContent
