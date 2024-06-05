import { unstable_noStore as noStore } from "next/cache";
import { getPayloadHMR } from "@payloadcms/next/utilities";
import configPromise from "@payload-config";
import BlockParser from "../BlockParser";
import PayLoadErrorHandling from "../PayLoadErrorHandling";

type Props = {};

const ContactButtonContent = async (props: Props) => {
  noStore();
  const payload = await getPayloadHMR({ config: configPromise });
  const data: any = await payload.findGlobal({
    slug: "contact",
  });

  return (
    <>
      <PayLoadErrorHandling data={data.Content}>
        {data.Content.map((block: any, index: number) => (
          <BlockParser block={block} key={block + index} />
        ))}
      </PayLoadErrorHandling>
    </>
  );
};

export default ContactButtonContent;
