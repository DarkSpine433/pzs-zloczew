import BlockParser from "@/app/components/BlockParser";
import { getPayloadHMR } from "@payloadcms/next/utilities";
import configPromise from "@payload-config";

type Props = {};

const FetchContent = async ({ id }: { id: string }) => {
  const payload = await getPayloadHMR({ config: configPromise });
  const data: any = await payload.findByID({
    collection: "pages",
    id: id,
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
          className={`mx-auto max-w-5xl bg-[url('/img/news/grain.jpg')] bg-clip-text px-3 py-3 text-center text-4xl font-extrabold uppercase tracking-wide text-background/40 sm:text-6xl`}
        >
          {data.title}
        </h1>
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
