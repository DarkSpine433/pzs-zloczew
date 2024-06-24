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
import { FetchUrlObject } from "@/lib/FetchUrlObject";

type Props = {
  data: any;
  page: number;
  numberOfPages: number[];
  searchParams: { [key: string]: string | string[] | undefined };
};

const PagginationInput = ({
  data,
  page,
  numberOfPages,
  searchParams,
}: Props) => {
  const isNumberOfPagesIsMoreThanNumberOfPagesToShow =
    data.totalPages > numberOfPages.length;
  return (
    <div className="flex flex-col gap-3">
      <div className="mx-auto w-max">
        Jesteś na stronie nr:&nbsp;
        <b className="text-lg text-primary">{page}</b>
      </div>
      {isNumberOfPagesIsMoreThanNumberOfPagesToShow && (
        <>
          <div className="w-full space-y-2">
            <div className="mx-auto flex w-fit gap-2 text-sm">
              <Link
                href={FetchUrlObject({
                  keyData: ["page"],
                  valueData: ["1"],
                  searchParamsObject: searchParams,
                })}
              >
                <Button className="rounded-t-lg bg-primary px-4 text-background">
                  min: 1
                </Button>
              </Link>
              <Link
                href={FetchUrlObject({
                  keyData: ["page"],
                  valueData: [data.totalPages.toString()],
                  searchParamsObject: searchParams,
                })}
              >
                <Button
                  variant={"outline"}
                  className="text-backgroun rounded-t-lg px-4 text-foreground"
                >
                  max: {data.totalPages}
                </Button>
              </Link>
            </div>

            <PagginationInputClient data={data} searchParams={searchParams} />
          </div>
        </>
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
                      href={FetchUrlObject({
                        keyData: ["page"],
                        valueData: [
                          (data.page! - 1 >= 1 ? data.page! - 1 : 1).toString(),
                        ],
                        searchParamsObject: searchParams,
                      })}
                    />
                  </PaginationItem>
                </TooltipTrigger>
                <TooltipContent>Poprzednia strona</TooltipContent>
              </Tooltip>
            </TooltipProvider>
          )}
          {isNumberOfPagesIsMoreThanNumberOfPagesToShow ? (
            <>
              {numberOfPages.map((_, i) => {
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
                          href={FetchUrlObject({
                            keyData: ["page"],
                            valueData: [ShowPagesNum.toString().toString()],
                            searchParamsObject: searchParams,
                          })}
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
                  href={FetchUrlObject({
                    keyData: ["page"],
                    valueData: [data.page.toString()],
                    searchParamsObject: searchParams,
                  })}
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
                          href={FetchUrlObject({
                            keyData: ["page"],
                            valueData: [PagesNum.toString()],
                            searchParamsObject: searchParams,
                          })}
                        >
                          {PagesNum}
                        </PaginationLink>
                      </PaginationItem>
                    )}
                  </>
                );
              })}
            </>
          ) : (
            numberOfPages.map((page, i) => {
              return (
                page <= data.totalPages && (
                  <PaginationItem
                    key={i}
                    className={
                      page != data.page ? "" : "pointer-events-none opacity-30"
                    }
                  >
                    <PaginationLink
                      title={`Strona ${page}`}
                      href={FetchUrlObject({
                        keyData: ["page"],
                        valueData: [page.toString()],
                        searchParamsObject: searchParams,
                      })}
                    >
                      {page}
                    </PaginationLink>
                  </PaginationItem>
                )
              );
            })
          )}
          {page != data.totalPages && (
            <TooltipProvider>
              <Tooltip delayDuration={200}>
                <TooltipTrigger>
                  <PaginationItem>
                    <PaginationNext
                      aria-label="Następna strona"
                      href={FetchUrlObject({
                        keyData: ["page"],
                        valueData: [
                          (data.page! + 1 <= data.totalPages
                            ? data.page! + 1
                            : data.totalPages
                          ).toString(),
                        ],
                        searchParamsObject: searchParams,
                      })}
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
