import TemplateNews from "@/app/components/news/TemplateNews";
import { fetchNews } from "@/app/actions/fetchNews";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

import PayLoadErrorHandling from "@/app/components/PayLoadErrorHandling";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const FetchNews = async ({ page }: { page: number }) => {
  var page = !page ? 1 : page;
  const data = await fetchNews({
    limit: 6,
    page: page ? page : 1,
  });

  const numberOfPages = [...Array(data.totalPages > 3 ? 3 : data.totalPages)]
    .map((_, i) => i + 1)
    .filter((x) => x < data.totalPages);

  return (
    <>
      <PayLoadErrorHandling
        data={data.docs}
        showText
        CustomText=" "
        stopAnimation
        customComponents={
          <div className="flex w-full flex-col items-center justify-center gap-5 text-center">
            <div className="text-3xl">Nie Ma Strony Nr:{page}</div>
            <Button>
              <Link href="/news?page=1">Wróć na stronę pierwszą</Link>
            </Button>
          </div>
        }
      >
        <div className="flex flex-col gap-10">
          <div className="mx-auto grid h-fit w-fit max-w-7xl grid-cols-1 justify-center gap-5 sm:grid-cols-2 xl:grid-cols-3">
            <TemplateNews data={data.docs} />
          </div>
          <Pagination className="">
            <PaginationContent>
              {page != 1 && (
                <PaginationItem>
                  <PaginationPrevious
                    href={`?${new URLSearchParams({ page: (data.page! - 1 >= 1 ? data.page! - 1 : 1).toString() })}`}
                  />
                </PaginationItem>
              )}

              {numberOfPages.map((page, i) => {
                return (
                  <PaginationItem
                    key={i}
                    className={
                      page != data.page ? "" : "pointer-events-none opacity-30"
                    }
                  >
                    <PaginationLink
                      href={`?${new URLSearchParams({ page: page.toString() })}#NewsTop`}
                    >
                      {page}
                    </PaginationLink>
                  </PaginationItem>
                );
              })}

              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink
                  href={`?${new URLSearchParams({ page: data.totalPages.toString() })}#NewsTop`}
                >
                  {data.totalPages}
                </PaginationLink>
              </PaginationItem>
              {page != data.totalPages && (
                <PaginationItem>
                  <PaginationNext
                    href={`?${new URLSearchParams({ page: (data.page! + 1 <= data.totalPages ? data.page! + 1 : data.totalPages).toString() })}#NewsTop`}
                  />
                </PaginationItem>
              )}
            </PaginationContent>
          </Pagination>
        </div>
      </PayLoadErrorHandling>
    </>
  );
};

export default FetchNews;
