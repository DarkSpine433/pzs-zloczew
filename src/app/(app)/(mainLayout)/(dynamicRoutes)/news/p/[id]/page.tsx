import RecentNews from "@/app/components/news/recentNews/RecentNews";
import Section from "@/app/components/mainPageComponents/Section";
import dynamic from "next/dynamic";
const FetchContent = dynamic(() => import("./FetchContent"), {
  loading: () => <SpinerLoader />,
});

import SpinerLoader from "@/app/components/SpinerLoader";

type Props = {
  params: { id: string };
};

const page = ({ params }: Props) => {
  return (
    <>
      <FetchContent id={params.id} />
      <hr className="mb-10 mt-0 block h-[1px] w-full border-0 bg-gray-300 p-0" />

      <Section className="bg-background" maxWidth="max-w-6xl ">
        <h2 className="scroll-m-20 space-y-10 bg-gradient-to-r from-primary from-40% via-foreground to-primary to-60% bg-clip-text pb-10 text-center text-4xl font-extrabold uppercase text-transparent drop-shadow-[0_1.2px_1.2px_hsl(--primary)]">
          Aktualności
        </h2>
        <div className="">
          <RecentNews repetation={10} />
        </div>
      </Section>
    </>
  );
};

export default page;
