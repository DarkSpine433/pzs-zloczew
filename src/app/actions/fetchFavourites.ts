"use server";
import { getPayloadHMR } from "@payloadcms/next/utilities";
import configPromise from "../../payload.config";

type Props = {
  ids: string;
};

export const fetchFavourites = async ({ ids }: Props) => {
  const payload = await getPayloadHMR({ config: configPromise });
  var { docs } = await payload.find({
    collection: "news",
    where: {
      id: {
        in: ids.split(","),
      },
    },
  });
  return docs;
};
