import { getPayloadHMR } from '@payloadcms/next/utilities'
import configPromise from '@payload-config'
import { parseISO, format } from 'date-fns'

import { unstable_noStore as noStore } from 'next/cache'
import Image from 'next/image'
import BlockParser from '../../BlockParser'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'

type Props = {}

const FetchRecentNews = async (props: Props) => {
  noStore()
  const payload = await getPayloadHMR({ config: configPromise })
  const data = await payload.find({
    collection: 'news',
    limit: 5,
  })

  return (
    <>
      {data.docs.map((doc: any, index) => (
        <Dialog key={index}>
          <DialogTrigger>
            <div className=" w-fit max-w-md h-fit grid grid-cols-1  relative bg-secondary p-2 rounded-lg shadow-md shadow-blue-300 hover:-translate-y-1 hover:shadow-md hover:shadow-primary transition-all gap-2 ">
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
            <div className="w-full text-pretty text-left  px-2 sm:px-0">
              <h2 className="text-[1.08rem] font-bold pb-5">{doc.title}</h2>

              <h3 className="text-sm text-gray-900 ">
                Data:&nbsp;
                <time dateTime={doc.createdAt}>
                  {format(parseISO(doc.createdAt), 'dd.MM.yyyy')}
                </time>
              </h3>
            </div>
            <hr className=" w-full h-[0.1rem] bg-gradient-to-r from-transparent via-primary/50 to-transparent border-none p-0 " />
            <div className="   pt-5 space-y-10 flex justify-center items-center flex-col">
              {doc?.Content.map((block: any) => {
                return <BlockParser block={block} key={block.id} />
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
