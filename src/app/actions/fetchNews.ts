"use server";
import { getPayloadHMR } from "@payloadcms/next/utilities";
import configPromise from "../../payload.config";
import { redirect } from "next/navigation";

type Props = {
  limit: number;
  page: number;
};

export const fetchNews = async ({ limit, page }: Props) => {
  const payload = await getPayloadHMR({ config: configPromise });
  return await payload.find({
    collection: "news",
    limit: limit,
    page: page,
    pagination: true,

    sort: "-createdAt",
    where: {},
  });
};
