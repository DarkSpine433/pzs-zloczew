import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import PagginationInputClient from './PagginationInputClient'

import { FetchUrlObject } from '@/lib/FetchUrlObject'

type Props = {
  data: any
  page: number
  numberOfPages: number[]
  searchParams: { [key: string]: string | string[] | undefined }
}

const PagginationInput = async ({ data, page, numberOfPages, searchParams }: Props) => {
  const isMorePagesThanVisible = data.totalPages > numberOfPages.length

  const createPageLink = async (pageNumber: number) =>
    await FetchUrlObject({
      keyData: ['page'],
      valueData: [pageNumber.toString()],
      searchParamsObject: searchParams,
    })

  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-3">
      {isMorePagesThanVisible && (
        <div className="mx-auto flex w-full max-w-7xl justify-center space-y-2">
          <PagginationInputClient data={data} searchParams={searchParams} />
        </div>
      )}
      <Pagination>
        <PaginationContent>
          {page !== 1 && (
            <TooltipProvider>
              <Tooltip delayDuration={50}>
                <TooltipTrigger>
                  <PaginationPrevious
                    aria-label="Previous page"
                    href={await createPageLink(Math.max(data.page - 1, 1))}
                  />
                </TooltipTrigger>
                <TooltipContent>Previous page</TooltipContent>
              </Tooltip>
            </TooltipProvider>
          )}
          {isMorePagesThanVisible ? (
            <>
              {numberOfPages.map(async (_, index) => {
                const calculatedPageNum = data.page - Math.floor(numberOfPages.length / 2) + index
                const isMaxReached =
                  data.totalPages - data.page < Math.floor(numberOfPages.length / 2)
                const adjustment = isMaxReached
                  ? Math.floor(numberOfPages.length / 2) - (data.totalPages - data.page)
                  : 0
                const displayPageNum = isMaxReached
                  ? calculatedPageNum - adjustment
                  : calculatedPageNum

                return (
                  index + 1 <= Math.floor(numberOfPages.length / 2) + adjustment &&
                  calculatedPageNum >= 1 && (
                    <PaginationItem key={index}>
                      <PaginationLink
                        title={`Page ${displayPageNum}`}
                        href={await createPageLink(displayPageNum)}
                      >
                        {displayPageNum}
                      </PaginationLink>
                    </PaginationItem>
                  )
                )
              })}
              <PaginationItem
                className={page !== data.page ? '' : 'pointer-events-none opacity-30'}
              >
                <PaginationLink title={`Page ${data.page}`} href={await createPageLink(data.page)}>
                  {data.page}
                </PaginationLink>
              </PaginationItem>
              {numberOfPages.map(async (_, index) => {
                const calculatedPageNum = data.page + index + 1
                const isMinReached = data.page - Math.floor(numberOfPages.length / 2) < 1
                const adjustment = isMinReached
                  ? Math.floor(numberOfPages.length / 2) - data.page + 1
                  : 0

                return (
                  index + 1 <= Math.floor(numberOfPages.length / 2) + adjustment &&
                  calculatedPageNum <= data.totalPages && (
                    <PaginationItem key={index}>
                      <PaginationLink
                        title={`Page ${calculatedPageNum}`}
                        href={await createPageLink(calculatedPageNum)}
                      >
                        {calculatedPageNum}
                      </PaginationLink>
                    </PaginationItem>
                  )
                )
              })}
            </>
          ) : (
            numberOfPages.map(
              async (pageNum, index) =>
                pageNum <= data.totalPages && (
                  <PaginationItem
                    key={index}
                    className={pageNum !== data.page ? '' : 'pointer-events-none opacity-30'}
                  >
                    <PaginationLink title={`Page ${pageNum}`} href={await createPageLink(pageNum)}>
                      {pageNum}
                    </PaginationLink>
                  </PaginationItem>
                ),
            )
          )}
          {page !== data.totalPages && (
            <TooltipProvider>
              <Tooltip delayDuration={50}>
                <TooltipTrigger>
                  <PaginationNext
                    aria-label="Next page"
                    href={await createPageLink(Math.min(data.page + 1, data.totalPages))}
                  />
                </TooltipTrigger>
                <TooltipContent>Next page</TooltipContent>
              </Tooltip>
            </TooltipProvider>
          )}
        </PaginationContent>
      </Pagination>
    </div>
  )
}

export default PagginationInput
