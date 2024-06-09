import { getPayloadHMR } from "@payloadcms/next/utilities";
import configPromise from "@payload-config";

import TemplateNews from "@/app/components/news/TemplateNews";

type Props = {
  NumberOfNewsToFetch: number;
};

const FetchNews = async ({ NumberOfNewsToFetch }: Props) => {
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
