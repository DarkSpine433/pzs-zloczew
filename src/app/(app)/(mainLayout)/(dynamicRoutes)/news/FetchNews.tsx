import { getPayloadHMR } from "@payloadcms/next/utilities";
import configPromise from "@payload-config";

import { unstable_noStore as noStore } from "next/cache";

import TemplateNews from "@/app/components/news/TemplateNews";

type Props = {
  NumberOfNewsToFetch: number;
  searchParams: any;
};

const FetchNews = async ({ NumberOfNewsToFetch, searchParams }: Props) => {
  noStore();
  const payload = await getPayloadHMR({ config: configPromise });
  const data: any = await payload.find({
    collection: "news",
    limit: NumberOfNewsToFetch,
    sort: "-createdAt",
    where: {},
  });

  return (
    <>
      <TemplateNews data={data.docs} />
    </>
  );
};

export default FetchNews;
