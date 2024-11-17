import dynamic from "next/dynamic";
import { getPayloadHMR } from "@payloadcms/next/utilities";
import configPromise from "@payload-config";

import SkeletonNews from "../mainPageComponents/SkeletonNews";

const ClientNavLinks = dynamic(() => import("./ClientNavLinks"), {
  ssr: false,
  loading: () => <SkeletonNews repeat={6} className="h-5 w-20" />,
});

const StaticNav = async () => {
  const payload = await getPayloadHMR({ config: configPromise });
  const data: any = await payload.findGlobal({
    slug: "schooljournal",
  });
  const StaticNavT = [
    //Links are not sensetive to Upper case. It will be converted to lower case
    //Links are sensetive to postion you give them
    {
      title: "Strona główna",
      url: "/",
    },
    {
      title: "Aktualności",
      url: "/news",
    },
    {
      title: "Projekty",
      url: "/projects",
    },
    {
      title: "Kontakt",
      url: "/contact",
    },
    { title: "Dziennik", url: data.link },
  ];
  return StaticNavT;
};
export const StaticNavLinksWithoutPrefix = StaticNav();

type Props = {
  className?: string;
  children?: React.ReactNode;
  sheet?: boolean;
};

const StaticNavLinks = async ({ className, children, sheet }: Props) => {
  return (
    <ClientNavLinks
      StaticNav={await StaticNav()}
      className={className}
      sheet={sheet}
    />
  );
};
export default StaticNavLinks;
