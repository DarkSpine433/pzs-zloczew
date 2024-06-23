import RecentNews from "@/app/components/news/recentNews/RecentNews";
import Section from "@/app/components/mainPageComponents/Section";
import FetchContent from "./FetchContent";

type Props = {
  params: { id: string };
};

const page = ({ params }: Props) => {
  return (
    <>
      {" "}
      <div className="flex flex-col">
        <FetchContent id={params.id} />
      </div>
      <hr className="m-0 block h-[5px] w-full border-0 bg-gray-300 p-0" />
      <Section className="" maxWidth="max-w-6xl ">
        <RecentNews />
      </Section>
    </>
  );
};

export default page;
