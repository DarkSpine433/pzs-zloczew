import { unstable_noStore as noStore } from "next/cache";
import BlockParser from "@/app/components/BlockParser";
import { getPayloadHMR } from "@payloadcms/next/utilities";
import configPromise from "@payload-config";

type Props = {};

const FetchContent = async ({ id }: { id: string }) => {
  noStore();
  const payload = await getPayloadHMR({ config: configPromise });
  const data: any = await payload.findByID({
    collection: "pages",
    id: id,
  });

  return (
    <>
      <div className="after:to-gray-black/30 relative z-10 mb-20 block overflow-hidden border-b-8 border-gray-500 bg-[url('/img/pagesImg/h1.jpg')] bg-cover bg-center bg-no-repeat py-20 shadow-lg after:absolute after:inset-0 after:left-0 after:top-0 after:z-[-5] after:block after:h-full after:w-full after:bg-black/50 after:bg-gradient-to-br after:from-black/70 after:content-['']">
        <h1 className="bg-[url('/img/news/grain.jpg')] bg-clip-text text-center text-[3rem] font-extrabold tracking-widest text-background/40 sm:text-7xl">
          {data.title}
        </h1>
      </div>

      <div className="mx-auto mt-10 flex w-full max-w-6xl flex-col items-center gap-4 rounded-xl px-3 py-10">
        {data?.Content.map((block: any, index: number) => {
          return <BlockParser block={block} key={block.id + index + "key"} />;
        })}
      </div>
    </>
  );
};

export default FetchContent;
