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
    </>
  );
};

export default page;
