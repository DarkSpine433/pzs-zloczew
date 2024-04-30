import { getPayloadHMR } from '@payloadcms/next/utilities'
import configPromise from '@payload-config'
import { parseISO, format } from 'date-fns'

import { unstable_noStore as noStore } from 'next/cache'
import Image from 'next/image'
import BlockParser from '@/app/components/BlockParser'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'

type Props = {
  NumberOfNewsToFetch: number
}

const FetchRecentNews = async ({ NumberOfNewsToFetch }: Props) => {
  noStore()
  const payload = await getPayloadHMR({ config: configPromise })
  const data = await payload.find({
    collection: 'news',
    limit: NumberOfNewsToFetch,
    sort: '-createdAt',
  })

  return (
    <>
      {data.docs.map((doc: any, index) => (
        <Dialog key={index}>
          <DialogTrigger>
            <div className=" w-full md:w-80 max-w-96   h-fit min-h-96  relative bg-secondary p-2 rounded-lg shadow-md shadow-blue-300 hover:-translate-y-1 hover:shadow-md hover:shadow-primary transition-all gap-2 ">
              <div className="w-full h-full  ">
                <Image
                  src={doc.thumbnail}
                  alt="miniatura"
                  width={300}
                  height={300}
                  className="rounded-lg w-96 h-64 object-cover overflow-hidden aspect-square "
                />
              </div>
              <div className="w-full text-pretty text-left px-3">
                <h2 className="text-[1.08rem] font-bold pb-5 ">{doc.title}</h2>

                <h3 className="text-sm text-gray-900 ">
                  Data:&nbsp;
                  <time dateTime={doc.createdAt}>
                    {format(parseISO(doc.createdAt), 'dd.MM.yyyy')}
                  </time>
                </h3>
              </div>
            </div>
          </DialogTrigger>
          <DialogContent className=" px-6 sm:px-10  h-[90%] max-h-[900px] max-w-3xl w-[98%] sm:w-11/12 overflow-y-scroll shadow-md shadow-primary/70 rounded-lg">
            <div
              className={`w-full text-pretty text-left  sm:px-0 h-max relative  flex flex-col justify-center items-center overflow-hidden rounded-xl `}
            >
              <Image
                src={doc.thumbnail}
                alt="miniatura"
                width={300}
                height={300}
                className="rounded-lg w-full h-full object-cover overflow-hidden aspect-video absolute top-0 left-0 -z-10 pointer-events-none blur-sm"
              />
              <div className="bg-foreground/70 w-full h-full p-5 text-background ">
                <h2 className="text-4xl font-bold pb-5">{doc.title}</h2>

                <h3 className="text-sm text-gray-400 ">
                  Data:&nbsp;
                  <time dateTime={doc.createdAt}>
                    {format(parseISO(doc.createdAt), 'dd.MM.yyyy')}
                  </time>
                </h3>
              </div>
            </div>
            <hr className=" w-full h-[0.1rem] bg-gradient-to-r from-transparent via-primary/50 to-transparent border-none p-0 " />
            <div className="   pt-5 space-y-10 flex justify-center items-center flex-col">
              {doc?.Content.map((block: any) => {
                return <BlockParser block={block} key={block.id + 'key' + index} />
              })}
              <hr className=" w-full h-[0.1rem] bg-gradient-to-r from-transparent via-primary/50 to-transparent border-none p-0 " />
            </div>
          </DialogContent>
        </Dialog>
      ))}
    </>
  )
}

export default FetchRecentNews
