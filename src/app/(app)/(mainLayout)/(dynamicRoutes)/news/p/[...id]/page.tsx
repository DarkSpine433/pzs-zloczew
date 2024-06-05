//@ts-nocheck
import dynamic from "next/dynamic";
import RecentNews from "@/app/components/news/recentNews/RecentNews";
import Section from "@/app/components/mainPageComponents/Section";
const FetchContent = dynamic(() => import("./FetchContent"), {
  ssr: false,
  loading: () => (
    <div className="relative h-dvh">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1"
          stroke="currentColor"
          className="size-24 animate-spin"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
          />
        </svg>
      </div>
    </div>
  ),
});

type Props = {
  params: { id: string };
};

const page = ({ params }: Props) => {
  return (
    <>
      <FetchContent id={params.id} />
      <hr className="mb-20 block h-[3px] w-full border-0 bg-gray-300 p-0" />
      <Section className="bg-background" maxWidth="max-w-6xl ">
        <h2 className="mx-auto max-w-6xl bg-[url('/img/news/grain.jpg')] bg-clip-text py-5 text-center text-5xl font-extrabold uppercase text-primary/90 sm:text-6xl">
          Aktualności
        </h2>
        <div className="rounded-xl border-t border-primary pt-6">
          <RecentNews repetation={10} />
        </div>
      </Section>
    </>
  );
};

export default page;
