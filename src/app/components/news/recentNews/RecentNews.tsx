import SkeletonNews from "../../mainPageComponents/SkeletonNews";
import dynamic from "next/dynamic";

type Props = {
  className?: string;
  repetation?: number;
};

const RecentNews = ({ className, repetation }: Props) => {
  const FetchRecentNews = dynamic(() => import("./FetchRecentNews"), {
    loading: () => <SkeletonNews repeat={repetation} className="size-60" />,
  });

  return (
    <>
      <div className="flex flex-col justify-center px-2 pb-10">
        <div
          className={`mx-auto grid w-fit grid-cols-1 gap-5 pb-2 sm:grid-cols-2 md:grid-cols-3 [&>h2]:text-sm ${className}`}
        >
          <FetchRecentNews repetition={repetation ? repetation : 10} />
        </div>
      </div>
    </>
  );
};

export default RecentNews;
