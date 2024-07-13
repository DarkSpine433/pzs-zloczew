import { getPayloadHMR } from "@payloadcms/next/utilities";
import configPromise from "@payload-config";
import BlockParser from "../blockParser/BlockParser";
import PayLoadErrorHandling from "../PayLoadErrorHandling";

export const revalidate = 43200;
type Props = {};

const ContactButtonContent = async (props: Props) => {
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
