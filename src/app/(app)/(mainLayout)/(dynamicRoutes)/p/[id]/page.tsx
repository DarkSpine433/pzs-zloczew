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

      <hr className="m-0 block h-[2px] w-full border-0 bg-gray-300 p-0" />
      <Section className="bg-background" maxWidth="max-w-6xl ">
        <RecentNews />
      </Section>
    </>
  );
};

export default page;
