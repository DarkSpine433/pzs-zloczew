//@ts-nocheck
import dynamic from "next/dynamic";
import FetchContent from "./FetchContent";
import Section from "@/app/components/mainPageComponents/Section";
const RecentNews = dynamic(
  () => import("@/app/components/mainPageComponents/RecentNews/RecentNews"),
  { ssr: false },
);

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
