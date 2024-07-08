"use server";
import { getPayloadHMR } from "@payloadcms/next/utilities";
import configPromise from "../../payload.config";

type Props = {
  idsNews: string;
};

export const fetchFavourites = async ({ idsNews }: Props) => {
  var favourites: { news: any[] } = {
    news: [],
  };
  const payload = await getPayloadHMR({ config: configPromise });
  var { docs } = await payload.find({
    collection: "news",
    where: {
      id: {
        in: idsNews.split(","),
      },
    },
  });
  favourites.news = docs;

  return favourites;
};
