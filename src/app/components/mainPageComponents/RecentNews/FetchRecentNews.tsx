import { getPayloadHMR } from '@payloadcms/next/utilities'
import configPromise from '@payload-config'
import { parseISO, format } from 'date-fns'

import { unstable_noStore as noStore } from 'next/cache'
import Image from 'next/image'
import BlockParser from '../../BlockParser'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

type Props = {}

const FetchRecentNews = async (props: Props) => {
  noStore()
  const payload = await getPayloadHMR({ config: configPromise })
  const data = await payload.find({
    collection: 'news',
    limit: 10,
  })

  return (
    <>
      {data.docs.map((doc: any, index) => (
        <Dialog key={index}>
          <DialogTrigger>
            <div className="w-full h-fit grid grid-cols-2  relative bg-secondary p-1 rounded-lg shadow-md shadow-blue-300 hover:-translate-y-1 hover:shadow-md hover:shadow-primary transition-all gap-2">
              <div className="w-full h-full  ">
                <Image
                  src={doc.thumbnail}
                  alt="miniatura"
                  width={500}
                  height={500}
                  className="rounded-lg h-full object-cover overflow-hidden "
                />
              </div>
              <div className="w-full text-pretty">
                <h2 className="text-[1.08rem] font-bold pb-5 text-left ">{doc.title}</h2>

                <h4 className="text-sm text-gray-500 text-ellipsis overflow-x-hidden whitespace-pre">
                  Data:&nbsp;
                  <time dateTime={doc.createdAt}>
                    {format(parseISO(doc.createdAt), 'dd.MM.yyyy')}
                  </time>
                </h4>
              </div>
            </div>
          </DialogTrigger>
          <DialogContent>
            <hr className=" w-full h-[0.1rem] bg-gradient-to-r from-transparent via-primary/50 to-transparent border-none p-0 " />
            <div className="h-fit md:px-5 pt-5 space-y-10">
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
