import TemplateNews from "@/app/components/news/TemplateNews";
import { fetchNews } from "@/app/actions/fetchNews";

import PayLoadErrorHandling from "@/app/components/PayLoadErrorHandling";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import PagginationInput from "@/app/components/news/PagginationInput";

const FetchNews = async ({ page }: { page: number }) => {
  var page = !page ? 1 : page;
  const whereToGOId = "#NewsTop";
  const data = await fetchNews({
    limit: 20,
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
              <Link href={`/news?page=1${whereToGOId}`}>
                Wróć na stronę pierwszą
              </Link>
            </Button>
          </div>
        }
      >
        <div className="flex flex-col gap-10">
          <div className="mx-auto grid h-fit w-fit max-w-7xl grid-cols-1 justify-center gap-5 sm:grid-cols-2 xl:grid-cols-3">
            <TemplateNews data={data.docs} />
          </div>
          {data.totalPages > 1 && (
            <PagginationInput
              data={data}
              page={page}
              numberOfPages={numberOfPages}
              whereToGOId={whereToGOId}
            />
          )}
        </div>
      </PayLoadErrorHandling>
    </>
  );
};

export default FetchNews;
