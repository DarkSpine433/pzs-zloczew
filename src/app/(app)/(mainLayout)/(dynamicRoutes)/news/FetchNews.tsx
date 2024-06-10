"use client";
import TemplateNews from "@/app/components/news/TemplateNews";
import { fetchNews } from "@/app/actions/fetchNews";
import { useState } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useSearchParams } from "next/navigation";
import PayLoadErrorHandling from "@/app/components/PayLoadErrorHandling";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const FetchNews = async () => {
  const searchParams = useSearchParams();
  const data = await fetchNews({
    limit: 2,
    page: Number(searchParams.get("page")) || 1,
  });
  const numberOfPages = [
    ...Array(data.totalPages > 3 ? 3 : data.totalPages),
  ].map((_, i) => i + 1);

  return (
    <>
      <PayLoadErrorHandling
        data={data.docs}
        showText
        CustomText=" "
        stopAnimation
        customComponents={
          <div className="flex w-full flex-col items-center justify-center gap-5 text-center">
            <div className="text-3xl">
              Nie Ma Strony Nr:{searchParams.get("page")}
            </div>
            <Button>
              <Link href="/news">Wróć na stronę pierwszą</Link>
            </Button>
          </div>
        }
      >
        <TemplateNews data={data.docs} />
        <Pagination className="">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                href={`?${new URLSearchParams({ page: (data.page! - 1 >= 1 ? data.page! - 1 : 1).toString() })}`}
              />
            </PaginationItem>
            {numberOfPages.map((page, i) => {
              return (
                <PaginationItem key={i}>
                  <PaginationLink
                    href={`?${new URLSearchParams({ page: page.toString() })}`}
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
                href={`?${new URLSearchParams({ page: data.totalPages.toString() })}`}
              >
                {data.totalPages}
              </PaginationLink>
            </PaginationItem>
            {}
            <PaginationItem>
              <PaginationNext
                href={`?${new URLSearchParams({ page: (data.page! + 1 <= data.totalPages ? data.page! + 1 : data.totalPages).toString() })}`}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </PayLoadErrorHandling>
    </>
  );
};

export default FetchNews;
