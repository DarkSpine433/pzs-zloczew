import { getPayloadHMR } from "@payloadcms/next/utilities";
import configPromise from "@payload-config";
type Props = {};

const SchoolJournal = async (props: Props) => {
  const payload = await getPayloadHMR({ config: configPromise });
  const data: any = await payload.findGlobal({
    slug: "schooljournal",
  });
  return data.link;
};

export default SchoolJournal;
