import BlockParser from "@/app/components/BlockParser";
import { getPayloadHMR } from "@payloadcms/next/utilities";
import configPromise from "@payload-config";

import { format, parseISO } from "date-fns";

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
        className={`after:to-gray-black/50 relative z-10 block overflow-hidden border-b-8 border-gray-500 bg-cover bg-center bg-no-repeat py-12 shadow-lg after:absolute after:inset-0 after:left-0 after:top-0 after:z-[-5] after:block after:h-full after:w-full after:bg-black/70 after:bg-gradient-to-br after:from-black/80 after:content-['']`}
      >
        <h1
          className={`mx-auto max-w-5xl bg-[url('/img/news/grain.jpg')] bg-clip-text px-3 text-center text-[2rem] font-extrabold text-background/40 sm:text-[3rem]`}
        >
          {data.title}
        </h1>
        <h3 className="mx-auto mt-16 max-w-3xl bg-clip-text px-5 text-left text-sm text-gray-500 first-letter:text-primary md:text-base">
          Data Utworzenia:&nbsp;
          <time dateTime={data.createdAt}>
            {format(parseISO(data.createdAt), "dd.MM.yyyy")}
          </time>
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
