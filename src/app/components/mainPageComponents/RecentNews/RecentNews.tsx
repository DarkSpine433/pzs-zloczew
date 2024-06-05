import dynamic from "next/dynamic";
import SkeletonNews from "../SkeletonNews";
import { unstable_noStore as noStore } from "next/cache";
import { getPayloadHMR } from "@payloadcms/next/utilities";
import configPromise from "@payload-config";

const NumberOfNewsToFetch = 10;

const FetchRecentNews = dynamic(() => import("./FetchRecentNews"), {
  ssr: false,
  loading: () => (
    <SkeletonNews repeat={NumberOfNewsToFetch} width="w-full" height="h-30" />
  ),
});
type Props = {
  className?: string;
  repetation: number;
};

const RecentNews = async ({ className }: Props) => {
  noStore();
  const payload = await getPayloadHMR({ config: configPromise });
  const data = await payload.find({
    collection: "news",
    limit: NumberOfNewsToFetch,
    sort: "-createdAt",
  });
  return (
    <>
      <div className="flex flex-col justify-center px-2">
        <div
          className={`mx-auto grid w-fit grid-cols-1 gap-10 pb-2 sm:grid-cols-2 md:grid-cols-3 [&>h2]:text-sm ${className}`}
        >
          <FetchRecentNews data={data} />
        </div>
      </div>
    </>
  );
};

export default RecentNews;
