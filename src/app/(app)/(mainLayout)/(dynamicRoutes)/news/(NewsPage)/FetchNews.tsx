import { fetchNews } from "@/app/actions/fetchNews";
import PayLoadErrorHandling from "@/app/components/PayLoadErrorHandling";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import dynamic from "next/dynamic";
import { FetchUrlObject } from "@/lib/FetchUrlObject";
import { Skeleton } from "@/components/ui/skeleton";

const TemplateNews = dynamic(
  () => import("@/app/components/news/TemplateNews"),
  {
    loading: () => <Skeleton className="size-72" />,
    ssr: false,
  },
);

const PagginationInput = dynamic(
  () => import("@/app/components/news/PagginationInput"),
  {
    ssr: false,
    loading: () => <Skeleton className="mx-auto h-10 w-72" />,
  },
);

const FetchNews = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  1;
  const { page = "1", year } = searchParams;

  const yearFilter = Array.isArray(year) ? year[0] : year || "";

  const data = await fetchNews({
    limit: 2,
    page: Number(page),
    filter: { year: yearFilter },
  });

  const numberOfPages = Array.from({ length: 5 }, (_, i) => i + 1);

  if (!data.docs.length) {
    return (
      <PayLoadErrorHandling
        data={[]}
        showText
        CustomText=" "
        stopAnimation
        customComponents={
          <div className="flex w-full flex-col items-center justify-center gap-5 text-center">
            <div className="text-3xl">Nie Ma Strony Nr:{page}</div>
            <Button>
              <Link
                href={`/news${FetchUrlObject({ keyData: ["page"], valueData: ["1"], searchParamsObject: searchParams })}`}
              >
                Wróć na stronę pierwszą
              </Link>
            </Button>
          </div>
        }
      />
    );
  }

  return (
    <PayLoadErrorHandling
      data={data.docs}
      showText
      CustomText=" "
      stopAnimation
    >
      <div className="flex flex-col gap-10 pb-20">
        <div className="mx-auto grid h-fit w-full max-w-7xl grid-cols-1 justify-center gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {data.docs.map((doc: any, index: number) => (
            <TemplateNews key={doc.id} doc={doc} index={index} />
          ))}
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
  );
};

export default FetchNews;
