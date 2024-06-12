import SkeletonNews from "../../mainPageComponents/SkeletonNews";
import dynamic from "next/dynamic";
import { Button } from "@/components/ui/button";
import Link from "next/link";
type Props = {
  className?: string;
  repetation?: number;
};

const RecentNews = ({ className, repetation }: Props) => {
  const FetchRecentNews = dynamic(() => import("./FetchRecentNews"), {
    ssr: false,
    loading: () => <SkeletonNews repeat={6} className="size-72" />,
  });

  return (
    <>
      <div className="flex flex-col justify-center px-2 pb-10">
        <div
          className={`mx-auto grid w-fit grid-cols-1 gap-5 pb-2 sm:grid-cols-2 md:grid-cols-3 [&>h2]:text-sm ${className}`}
        >
          <FetchRecentNews repetition={repetation ? 6 : 6} />
        </div>
        <Button className="mx-auto mt-10 flex items-center justify-center text-center">
          <Link href="/news">Zobacz Więcej</Link>
        </Button>
      </div>
    </>
  );
};

export default RecentNews;
