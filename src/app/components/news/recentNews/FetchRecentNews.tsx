import { unstable_noStore as noStore } from "next/cache";
import { getPayloadHMR } from "@payloadcms/next/utilities";
import configPromise from "@payload-config";

import TemplateNews from "../TemplateNews";

type Props = {
  repetition: number;
};
const FetchRecentNews = async ({ repetition }: Props) => {
  const payload = await getPayloadHMR({ config: configPromise });
  const data: any = await payload.find({
    collection: "news",
    limit: repetition,
    sort: "-createdAt",
  });
  return (
    <>
      <TemplateNews data={data.docs} />
    </>
  );
};

export default FetchRecentNews;
