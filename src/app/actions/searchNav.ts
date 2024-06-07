"use server";
import { getPayloadHMR } from "@payloadcms/next/utilities";
import configPromise from "../../payload.config";
type Props = {
  title: string;
};

export const searchNav = async ({ title }: Props) => {
  const SearchEngineArray: { pages: any[]; projects: any[]; news: any[] } = {
    pages: [],
    projects: [],
    news: [],
  };

  const payload = await getPayloadHMR({ config: configPromise });
  var { docs }: { docs: any[] } = await payload.find({
    collection: "pages",
    sort: "-createdAt",
    limit: 10,
    where: {
      title: {
        like: title,
      },
    },
  });
  docs.map((doc) => SearchEngineArray.pages.push(doc));

  var { docs }: { docs: any[] } = await payload.find({
    collection: "news",
    sort: "-createdAt",
    limit: 10,
    where: {
      title: {
        like: title,
      },
    },
  });
  docs.map((doc) => SearchEngineArray.news.push(doc));

  return SearchEngineArray;
};
