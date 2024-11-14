import { SheetClose } from "@/components/ui/sheet";

import Link from "next/link";
import React from "react";

type Props = {
  StaticNavLinksCh: Array<any>;
  sheet?: boolean;
  className?: string;
};

const RenderStaticNavLinks = ({
  StaticNavLinksCh,
  sheet,
  className,
}: Props) => {
  return StaticNavLinksCh.map((nav, index) => (
    <>
      {sheet ? (
        <SheetClose asChild>
          <Link
            key={nav.title + nav.url + index}
            href={nav.url.toLowerCase()}
            className={`${className} `}
          >
            {nav.title}
          </Link>
        </SheetClose>
      ) : (
        <Link
          key={nav.title + nav.url + index}
          href={nav.url.toLowerCase()}
          className={`${className} transition-all ${nav.title === `Zapisane` ? `spring-element` : ""} `}
          style={{}}
        >
          {nav.title}
        </Link>
      )}
    </>
  ));
};

export default RenderStaticNavLinks;
