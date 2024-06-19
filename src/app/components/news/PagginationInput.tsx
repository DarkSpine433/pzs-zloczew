import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import PagginationInputClient from "./PagginationInputClient";

type Props = {
  data: any;
  page: number;
  numberOfPages: number[];
  whereToGOId: string;
};

const PagginationInput = ({
  data,
  page,
  numberOfPages,
  whereToGOId,
}: Props) => {
  return (
    <div className="flex flex-col gap-3">
      <div className="mx-auto w-max">
        Jesteś na stronie nr:&nbsp;
        <b className="text-lg text-primary">{page}</b>
      </div>
      {data.totalPages > numberOfPages.length && (
        <PagginationInputClient data={data} whereToGOId={whereToGOId} />
      )}
      <Pagination>
        <PaginationContent>
          {page != 1 && (
            <TooltipProvider>
              <Tooltip delayDuration={300}>
                <TooltipTrigger>
                  <PaginationItem>
                    <PaginationPrevious
                      aria-label="Poprzednia strona"
                      href={`?${new URLSearchParams({ page: (data.page! - 1 >= 1 ? data.page! - 1 : 1).toString() })}${whereToGOId}`}
                    />
                  </PaginationItem>
                </TooltipTrigger>
                <TooltipContent>Poprzednia strona</TooltipContent>
              </Tooltip>
            </TooltipProvider>
          )}

          {numberOfPages.map((page, i) => {
            const PagesNum =
              data.page - Math.floor(numberOfPages.length / 2) + i;
            return i + 1 > Math.floor(numberOfPages.length / 2) ? null : (
              <>
                {PagesNum >= 1 && (
                  <PaginationItem key={i}>
                    <PaginationLink
                      title={`Strona ${PagesNum}`}
                      href={`?${new URLSearchParams({ page: PagesNum.toString() })}${whereToGOId}`}
                    >
                      {PagesNum}
                    </PaginationLink>
                  </PaginationItem>
                )}
              </>
            );
          })}

          <PaginationItem
            className={
              page != data.page ? "" : "pointer-events-none opacity-30"
            }
          >
            <PaginationLink
              title={`Strona ${data.page}`}
              href={`?${new URLSearchParams({ page: data.page.toString() })}${whereToGOId}`}
            >
              {data.page}
            </PaginationLink>
          </PaginationItem>

          {numberOfPages.map((page, i) => {
            const PagesNum = data.page + i + 1;
            return i + 1 > Math.floor(numberOfPages.length / 2) ? null : (
              <>
                {PagesNum > data.totalPages || (
                  <PaginationItem key={i}>
                    <PaginationLink
                      title={`Strona ${PagesNum}`}
                      href={`?${new URLSearchParams({ page: PagesNum.toString() })}${whereToGOId}`}
                    >
                      {PagesNum}
                    </PaginationLink>
                  </PaginationItem>
                )}
              </>
            );
          })}

          {page != data.totalPages && (
            <TooltipProvider>
              <Tooltip delayDuration={200}>
                <TooltipTrigger>
                  <PaginationItem>
                    <PaginationNext
                      aria-label="Następna strona"
                      href={`?${new URLSearchParams({ page: (data.page! + 1 <= data.totalPages ? data.page! + 1 : data.totalPages).toString() })}${whereToGOId}`}
                    />
                  </PaginationItem>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Następna strona</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          )}
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default PagginationInput;
