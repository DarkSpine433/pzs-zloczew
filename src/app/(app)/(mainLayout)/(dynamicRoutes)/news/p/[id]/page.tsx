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
      <hr className="m-0 block h-[5px] w-full border-0 bg-gray-300 p-0" />
      <Section className="" maxWidth="max-w-6xl ">
        <RecentNews />
      </Section>
    </>
  );
};

export default page;
