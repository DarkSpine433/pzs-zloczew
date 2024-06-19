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
import Link from "next/link";
import { Button } from "@/components/ui/button";

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
      <div className="w-full space-y-2">
        <div className="mx-auto flex w-fit gap-2 text-sm">
          <Link href={`?${new URLSearchParams({ page: "1" })}${whereToGOId}`}>
            <Button className="rounded-t-lg bg-primary px-4 text-background">
              min: 1
            </Button>
          </Link>
          <Link
            href={`?${new URLSearchParams({ page: data.totalPages.toString() })}${whereToGOId}`}
          >
            <Button
              variant={"outline"}
              className="text-backgroun rounded-t-lg px-4 text-foreground"
            >
              max: {data.totalPages}
            </Button>
          </Link>
        </div>
        {data.totalPages > numberOfPages.length && (
          <PagginationInputClient data={data} whereToGOId={whereToGOId} />
        )}
      </div>
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
            const isMaxReachToShowMoreNewerPages =
              data.totalPages - data.page <
              Math.floor(numberOfPages.length / 2);

            const calc = isMaxReachToShowMoreNewerPages
              ? Math.floor(numberOfPages.length / 2) -
                (data.totalPages - data.page)
              : 0;
            const ShowPagesNum = isMaxReachToShowMoreNewerPages
              ? PagesNum - calc
              : PagesNum;
            return i + 1 > Math.floor(numberOfPages.length / 2) + calc ? (
              <></>
            ) : (
              <>
                {PagesNum >= 1 && (
                  <PaginationItem key={i}>
                    <PaginationLink
                      title={`Strona ${ShowPagesNum}`}
                      href={`?${new URLSearchParams({ page: ShowPagesNum.toString() })}${whereToGOId}`}
                    >
                      {ShowPagesNum}
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
            const isMinReachToShowMoreOlderPages =
              data.page - Math.floor(numberOfPages.length / 2) < 1;

            return i + 1 >
              Math.floor(numberOfPages.length / 2) +
                (isMinReachToShowMoreOlderPages
                  ? Math.floor(numberOfPages.length / 2) - data.page + 1
                  : 0) ? null : (
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
