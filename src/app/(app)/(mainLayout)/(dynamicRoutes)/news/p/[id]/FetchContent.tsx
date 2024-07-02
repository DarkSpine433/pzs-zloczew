import BlockParser from "@/app/components/BlockParser";
import { getPayloadHMR } from "@payloadcms/next/utilities";
import configPromise from "@payload-config";

import { format, parseISO } from "date-fns";
import FavouriteButtonClient from "@/app/components/news/FavouriteButtonClient";
import { Separator } from "@/components/ui/separator";
import ShareButton from "@/app/components/ShareButton";
const FetchContent = async ({ id }: { id: string }) => {
  const payload = await getPayloadHMR({ config: configPromise });
  const data: any = await payload.findByID({
    id: id,
    collection: "news",
  });

  return (
    <>
      <div
        id="test"
        style={{
          backgroundImage: `url(${data.thumbnail})`,
        }}
        className={`after:to-gray-black/50 relative z-10 block overflow-hidden border-b-8 border-gray-500 bg-cover bg-center bg-no-repeat py-12 shadow-lg after:absolute after:inset-0 after:left-0 after:top-0 after:z-[-5] after:block after:h-full after:w-full after:bg-foreground/70 after:bg-gradient-to-b after:from-foreground after:content-['']`}
      >
        <h1
          className={`relative mx-auto max-w-5xl bg-[url('/img/news/grain.jpg')] bg-clip-text px-3 text-center text-[2rem] font-extrabold text-background/40 sm:text-[3rem]`}
        >
          {data.title}
        </h1>
        <h3 className="mx-auto mt-16 flex max-w-4xl flex-wrap items-center gap-4 bg-clip-text px-5 text-left text-sm text-gray-400 first-letter:text-primary md:text-base">
          <div>
            {" "}
            Data Utworzenia:&nbsp;
            <time dateTime={data.createdAt} className="text-blue-400">
              {format(parseISO(data.createdAt), "dd.MM.yyyy")}
            </time>
          </div>
          <Separator
            orientation="vertical"
            className="h-10 w-[1px] bg-gray-500"
          />
          <div className="relative flex h-fit w-fit gap-3">
            <ShareButton className="px-3 py-4" />
            <FavouriteButtonClient id={data.id} isBlock className="px-3 py-1" />
          </div>
        </h3>
      </div>

      <div className="mx-auto flex max-w-5xl flex-col gap-10 border-x px-3 pb-10 pt-10 sm:px-10">
        {data?.Content.map((block: any, index: number) => {
          return <BlockParser block={block} key={block.id + index + "key"} />;
        })}
      </div>
    </>
  );
};

export default FetchContent;
