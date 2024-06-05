import SkeletonNews from "@/app/components/mainPageComponents/SkeletonNews";

import dynamic from "next/dynamic";
import NewsFilter from "./NewsFilter";

const NumberOfNewsToFetch = 30;

const FetchNews = dynamic(() => import("./FetchNews"), {
  ssr: false,
  loading: () => (
    <SkeletonNews repeat={NumberOfNewsToFetch} width="w-80" height="h-96" />
  ),
});
type Props = {
  searchParams: { [key: string]: string | string[] | undefined };
};

const page = ({ searchParams }: Props) => {
  return (
    <>
      <div className="after:to-gray-black/30 relative z-10 mb-20 block overflow-hidden border-b-8 border-gray-500 bg-[url('/img/news/thumbnail.jpg')] bg-cover bg-center bg-no-repeat py-20 shadow-lg after:absolute after:inset-0 after:left-0 after:top-0 after:z-[-5] after:block after:h-full after:w-full after:bg-black/50 after:bg-gradient-to-br after:from-black/70 after:content-['']">
        <h1 className="bg-[url('/img/news/grain.jpg')] bg-clip-text text-center text-[3rem] font-extrabold tracking-widest text-background/40 sm:text-7xl md:text-8xl lg:text-9xl">
          Aktualności
        </h1>
        <h3 className="mx-auto mt-10 max-w-4xl bg-[url('/img/news/grain.jpg')] bg-clip-text px-6 text-left text-sm tracking-widest text-gray-500/20 md:text-base">
          <ol className="flex flex-col gap-2 [&>li]:first-letter:uppercase [&>li]:first-letter:text-primary">
            <li>Najnowsze informacje i wydarzenia życia szkoły.</li>
            <li>
              Regularnie publikujemy wiadomości o osiągnięciach uczniów, relacje
              z wydarzeń szkolnych, informacje o nadchodzących konkursach oraz
              ogłoszenia dla rodziców i uczniów.
            </li>
            <li>
              Nasza strona jest najlepszym źródłem, aby być na bieżąco z tym, co
              dzieje się w naszej szkole.
            </li>
            <li>
              Zapraszamy do regularnego odwiedzania i śledzenia naszych
              aktualności!
            </li>
          </ol>
        </h3>
      </div>
      <div className="mx-auto flex w-full max-w-screen-2xl justify-center px-5 lg:gap-10">
        <NewsFilter />
        {searchParams.test}
        <div className="mx-auto grid h-fit w-fit max-w-7xl grid-cols-1 items-center justify-center gap-10 sm:grid-cols-2 xl:grid-cols-3">
          <FetchNews
            NumberOfNewsToFetch={NumberOfNewsToFetch}
            searchParams={searchParams}
          />
        </div>
      </div>
    </>
  );
};

export default page;
