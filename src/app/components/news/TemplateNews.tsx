import { parseISO, format } from 'date-fns'
import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardTitle } from '@/components/ui/card'

import FavouriteButtonClient from './FavouriteButtonClient'

type Props = {
  doc: any
  index?: number
}

const TemplateNews = ({ doc, index }: Props) => {
  return (
    <div
      key={index + doc.id}
      className="group relative h-fit w-full overflow-hidden rounded-xl transition-all hover:shadow-md"
    >
      <Link href={`/news/${doc.id}`}>
        <Card className="overflow-hidden shadow-none transition-all">
          <div className="flex h-full w-full items-center justify-center overflow-hidden">
            {doc.thumbnail != undefined &&
            doc.thumbnail != '' &&
            doc.thumbnail.match(/\.(jpg|jpeg|png|gif|bmp|tiff|webp|svg)$/i) ? (
              <Image
                src={doc.thumbnail}
                alt="miniatura"
                width={300}
                height={300}
                quality={100}
                className="aspect-square h-64 w-full overflow-hidden rounded-lg object-cover transition-all duration-500 group-hover:scale-105"
              />
            ) : null}
          </div>

          <CardContent className="mt-5 space-y-3">
            <CardTitle className="text-lg font-bold leading-6 text-primary/80 transition-all group-hover:text-primary">
              <div className="pr-2">{doc.title}</div>
            </CardTitle>
            <CardDescription className="space-y-1 text-sm">
              {doc.populatedAuthors != undefined &&
              typeof doc.populatedAuthors != undefined &&
              doc.populatedAuthors.length > 0 ? (
                <div className="text-gray-600">
                  Autor:&nbsp;
                  <span className="font-semibold">
                    {doc.populatedAuthors.map((author, index) => (
                      <span key={author.id + index}>{author.name}</span>
                    ))}
                  </span>
                </div>
              ) : null}
              <div className="text-gray-600">
                Data:&nbsp;
                <time dateTime={doc.createdAt} className="font-semibold">
                  {format(parseISO(doc.createdAt), 'dd.MM.yyyy')}
                </time>
              </div>
            </CardDescription>
          </CardContent>
        </Card>
      </Link>
      <FavouriteButtonClient id={doc.id} />
    </div>
  )
}

export default TemplateNews
