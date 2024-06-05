//@ts-nocheck
import { unstable_noStore as noStore } from "next/cache";

import configPromise from "@payload-config";
import { getPayloadHMR } from "@payloadcms/next/utilities";
import Image from "next/image";
import GlobalNotFounded from "@/app/components/GlobalNotFounded";
type Props = {};

const GetOffer = async (props: Props) => {
  noStore();
  const payload = await getPayloadHMR({ config: configPromise });
  const getOffer = await payload.findGlobal({
    slug: "offer",
  });
  if (!getOffer.Content || getOffer.Content.length === 0) {
    return <GlobalNotFounded />;
  }
  return (
    <div className="flex flex-wrap items-center justify-center gap-10 px-3">
      {getOffer.Content.map((offer) => {
        return (
          <Image
            key={offer.id}
            src={offer.ImageUrl}
            alt="offer"
            width={450}
            height={450}
            key={offer.id}
            quality={100}
            className="rounded-xl shadow-md shadow-primary transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-primary"
          />
        );
      })}
    </div>
  );
};
export default GetOffer;
