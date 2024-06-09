import dynamic from "next/dynamic";
import Section from "@/app/components/mainPageComponents/Section";
import { getPayloadHMR } from "@payloadcms/next/utilities";
import configPromise from "@payload-config";
import RecentNews from "@/app/components/news/recentNews/RecentNews";
import SpinerLoader from "@/app/components/SpinerLoader";
const FetchContent = dynamic(() => import("./FetchContent"), {
  loading: () => <SpinerLoader />,
});
type Props = {
  params: { id: string };
};
export async function generateStaticParams() {
  const payload = await getPayloadHMR({ config: configPromise });
  const { docs } = await payload.find({
    collection: "pages",
  });
  return docs.map((data: any) => {
    return {
      id: data.id,
    };
  });
}

const page = ({ params }: Props) => {
  return (
    <>
      <FetchContent id={params.id} />

      <hr className="mb-20 block h-[3px] w-full border-0 bg-gray-300 p-0" />
      <Section className="bg-background" maxWidth="max-w-6xl ">
        <h2 className="mx-auto max-w-6xl bg-[url('/img/news/grain.jpg')] bg-clip-text py-5 text-center text-5xl font-extrabold uppercase text-primary/90 sm:text-6xl">
          Aktualności
        </h2>
        <div className="rounded-xl border-t border-primary pt-6">
          <RecentNews repetation={10} />
        </div>
      </Section>
    </>
  );
};

export default page;
