import { parseISO, format } from 'date-fns'

import { unstable_noStore as noStore } from 'next/cache'
import Image from 'next/image'

import Link from 'next/link'
import { Card, CardContent, CardDescription, CardTitle } from '@/components/ui/card'

type Props = {
  data: any
}

const FetchRecentNews = async ({ data }: Props) => {
  noStore()

  return (
    <>
      {data.docs.map((doc: any, index: number) => (
        <Link key={index} href={`/news/p/${doc.id}`} className="h-96 max-w-96 ">
          <Card>
            <div className="w-full h-full  ">
              <Image
                src={doc.thumbnail}
                alt="miniatura"
                width={300}
                height={300}
                className="rounded-lg w-96 h-64 object-cover overflow-hidden aspect-square "
              />
            </div>

            <CardContent className="mt-5">
              <CardTitle>
                <h2 className="text-[1.08rem] font-bold pb-5 ">{doc.title}</h2>
              </CardTitle>
              <CardDescription>
                <h3 className="text-sm text-gray-900 ">
                  Data:&nbsp;
                  <time dateTime={doc.createdAt}>
                    {format(parseISO(doc.createdAt), 'dd.MM.yyyy')}
                  </time>
                </h3>
              </CardDescription>
            </CardContent>
          </Card>
        </Link>
      ))}
    </>
  )
}

export default FetchRecentNews
