import { fetchNews } from '@/app/actions/fetchNews'
import PayLoadErrorHandling from '@/app/components/PayLoadErrorHandling'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import dynamic from 'next/dynamic'
import { FetchUrlObject } from '@/lib/FetchUrlObject'
import { Skeleton } from '@/components/ui/skeleton'
import PagginationInputClient from '@/app/components/news/PagginationInputClient'
import { Separator } from '@/components/ui/separator'
const NewsFilter = dynamic(() => import('./NewsFilter'), {
  loading: () => <Skeleton className="mx-auto h-14 w-72" />,
})
const TemplateNews = dynamic(() => import('@/app/components/news/TemplateNews'), {
  loading: () => <Skeleton className="h-72 w-full" />,
})

const PagginationInput = dynamic(() => import('@/app/components/news/PagginationInput'), {
  loading: () => <Skeleton className="mx-auto h-10 w-72" />,
})

const FetchNews = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) => {
  const { page = '1', year } = searchParams
  const yearFilter = Array.isArray(year) ? year[0] : year || ''
  const numberOfPages = Array.from({ length: 5 }, (_, i) => i + 1)
  const data = await fetchNews({
    limit: 21,
    page: Number(page),
    filter: { year: yearFilter },
  })

  if (!data.docs.length) {
    return (
      <PayLoadErrorHandling
        data={[]}
        showText
        CustomText=" "
        stopAnimation
        customComponents={
          <div className="flex w-full flex-col items-center justify-center gap-5 text-center">
            <div className="text-3xl">Brak Wyników </div>
            <Button>
              <Link
                href={`/news${await FetchUrlObject({ keyData: ['page'], valueData: ['1'], searchParamsObject: [] })}`}
              >
                Wróć na stronę pierwszą
              </Link>
            </Button>
          </div>
        }
      />
    )
  }

  return (
    <PayLoadErrorHandling data={data.docs} showText CustomText=" " stopAnimation>
      <div>
        <div className="mx-auto flex w-full max-w-7xl items-center gap-5">
          <div className="hidden flex-1 items-start justify-start sm:flex"></div>
          <div className="mx-auto flex w-full max-w-96 items-center justify-center gap-5 font-semibold transition-all">
            <NewsFilter searchParams={searchParams} />
          </div>
          <div className="flex flex-1 items-center justify-end gap-3">
            {data.totalPages > 1 && (
              <PagginationInputClient data={data} searchParams={searchParams} />
            )}
          </div>
        </div>
        <Separator className="mx-auto mt-4 max-w-7xl" />
      </div>
      <div className="flex flex-col gap-10 pb-20">
        <div className="mx-auto grid h-fit w-full max-w-7xl grid-cols-1 justify-center gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {data.docs.map(
            (doc, index) =>
              doc._status === 'published' && (
                <TemplateNews
                  key={doc.id + index}
                  doc={doc}
                  index={index}
                  reference={{ relationTo: 'news', value: doc }}
                />
              ),
          )}
        </div>
        {data.totalPages > 1 && (
          <PagginationInput
            data={data}
            page={Number(page)}
            numberOfPages={numberOfPages}
            searchParams={searchParams}
          />
        )}
      </div>
    </PayLoadErrorHandling>
  )
}

export default FetchNews
