import { getPayloadHMR } from "@payloadcms/next/utilities";
import configPromise from "@payload-config";
import { unstable_noStore } from "next/cache";
import dynamic from "next/dynamic";
import SkeletonNews from "../../mainPageComponents/SkeletonNews";

type Props = {
  repetition: number;
};
const TemplateNews = dynamic(() => import("../TemplateNews"), {
  ssr: false,
  loading: () => <SkeletonNews className="size-72 md:size-60 lg:size-80" />,
});
const FetchRecentNews = async ({ repetition }: Props) => {
  const payload = await getPayloadHMR({ config: configPromise });
  const data = await payload.find({
    collection: "news",
    limit: repetition,
    pagination: true,
    sort: "-createdAt",
  });
  return (
    <>
      {data.docs.map((doc: any, index: number) => {
        return <TemplateNews doc={doc} index={index} />;
      })}
    </>
  );
};

export default FetchRecentNews;
