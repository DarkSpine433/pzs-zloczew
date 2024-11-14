//disable cache
import { unstable_noStore as noStore } from "next/cache";

//Other Ui Components Import
import Link from "next/link";

//Payload imports
import { getPayloadHMR } from "@payloadcms/next/utilities";
import configPromise from "@payload-config";
import { SheetClose } from "@/components/ui/sheet";
import Socials from "./Socials";

const StaticNavLinks = dynamic(() => import("./StaticNavLinks"), {
  ssr: false,
});

import PayLoadErrorHandling from "../PayLoadErrorHandling";
import dynamic from "next/dynamic";

const FetchNavContent = async () => {
  const payload = await getPayloadHMR({ config: configPromise });
  const data: any = await payload.findGlobal({
    slug: "nav",
  });

  return (
    <div className="py-5">
      <menu className="flex flex-col gap-3">
        <StaticNavLinks
          className="w-full rounded-lg border-b-4 border-primary bg-secondary/60 px-3 py-3 text-left font-semibold uppercase shadow-sm shadow-primary transition-all hover:border-primary hover:bg-secondary hover:px-3.5"
          sheet={true}
        />

        <li className="flex justify-center gap-3 md:hidden">
          <Socials />
        </li>
        <hr className="m-0 mb-5 h-[1px] w-full max-w-screen-2xl border-none bg-gradient-to-r from-transparent via-primary/50 to-transparent p-0" />

        <PayLoadErrorHandling data={data.nav}>
          {data.nav.map((item: any) => (
            <Link key={item.page.id} href={"/p/" + item.page.id} className="">
              <SheetClose className="w-full rounded-lg border-b-2 border-primary bg-secondary/60 px-3 py-3 text-left font-semibold lowercase shadow-sm shadow-primary/50 transition-all first-letter:uppercase hover:border-primary/50 hover:bg-secondary hover:px-3.5">
                <li>{item.page.title}</li>
              </SheetClose>
            </Link>
          ))}
        </PayLoadErrorHandling>
      </menu>
    </div>
  );
};

export default FetchNavContent;
