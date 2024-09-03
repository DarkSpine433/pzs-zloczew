//@ts-nocheck
import { unstable_noStore as noStore } from "next/cache";

import configPromise from "@payload-config";
import { getPayloadHMR } from "@payloadcms/next/utilities";
import Image from "next/image";
import PayLoadErrorHandling from "@/app/components/PayLoadErrorHandling";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

type Props = {};

const GetOffer = async (props: Props) => {
  const payload = await getPayloadHMR({ config: configPromise });
  const getOffer = await payload.findGlobal({
    slug: "offer",
  });

  return (
    <PayLoadErrorHandling data={getOffer.Content} showText={true}>
      <div className="flex flex-wrap items-center justify-center gap-10 px-3">
        {getOffer.Content.map((offer) => {
          return (
            <Dialog>
              <DialogTrigger className="max-w-[450px] overflow-hidden rounded-xl shadow-md shadow-primary/70 transition-all hover:-translate-y-0.5 hover:shadow-md hover:shadow-primary md:w-[45%] lg:w-[40%] xl:w-full">
                {" "}
                <Image
                  key={offer.id}
                  src={offer.ImageUrl}
                  alt="offer"
                  width={450}
                  height={450}
                  key={offer.id}
                  quality={100}
                  className=""
                />
              </DialogTrigger>
              <DialogContent className="flex h-full min-h-dvh max-w-[800px] items-center justify-center overflow-y-auto p-0 sm:items-start">
                <Image
                  key={offer.id}
                  src={offer.ImageUrl}
                  alt="offer"
                  width={800}
                  height={800}
                  key={offer.id}
                  quality={100}
                  className="h-fit w-full object-contain"
                />
              </DialogContent>
            </Dialog>
          );
        })}
      </div>
    </PayLoadErrorHandling>
  );
};
export default GetOffer;
