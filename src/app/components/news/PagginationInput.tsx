import { Input } from "@/components/ui/input";
import { redirect } from "next/navigation";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
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
  const handleNavigation = async (formData: FormData) => {
    "use server";
    redirect(`/news?page=${formData.get("page")}`);
  };
  console.log(data.page, page);
  return (
    <div className="flex flex-col gap-3">
      <div className="mx-auto w-max">
        Jesteś na stronie nr:&nbsp;
        <b className="text-lg text-primary">{page}</b>
      </div>

      <Pagination>
        <PaginationContent>
          {page != 1 && (
            <PaginationItem>
              <PaginationPrevious
                href={`?${new URLSearchParams({ page: (data.page! - 1 >= 1 ? data.page! - 1 : 1).toString() })}${whereToGOId}`}
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
                  href={`?${new URLSearchParams({ page: page.toString() })}${whereToGOId}`}
                >
                  {page}
                </PaginationLink>
              </PaginationItem>
            );
          })}
          {data.totalPages > 4 && (
            <form action={handleNavigation}>
              <Input
                className={`border-foreground/30 focus-within:border-foreground/50 ${data.page != page ? "" : "invalid:border-red-500"}`}
                pattern="4"
                name="page"
                type="number"
                min={1}
                max={data.totalPages}
                placeholder="Wpisz"
              />
            </form>
          )}

          <PaginationItem>
            <PaginationLink
              className={
                data.totalPages != data.page
                  ? ""
                  : "pointer-events-none opacity-30"
              }
              href={`?${new URLSearchParams({ page: data.totalPages.toString() })}${whereToGOId}`}
            >
              {data.totalPages}
            </PaginationLink>
          </PaginationItem>
          {page != data.totalPages && (
            <PaginationItem>
              <PaginationNext
                href={`?${new URLSearchParams({ page: (data.page! + 1 <= data.totalPages ? data.page! + 1 : data.totalPages).toString() })}${whereToGOId}`}
              />
            </PaginationItem>
          )}
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default PagginationInput;
