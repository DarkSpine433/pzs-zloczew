"use client";

import Link from "next/link";
import { useRef } from "react";
import FacebookEmbedProps, {
  FacebookEmbed,
  TikTokEmbed,
  InstagramEmbed,
} from "react-social-media-embed";

type Props = {
  block: any;
};

const BlockParserClientComponents = ({ block }: Props) => {
  const ref = useRef(null);
  console.log(FacebookEmbedProps, "props");

  return (
    <div className="mx-auto flex size-full max-w-xl flex-col items-center justify-center rounded-xl border px-2 py-2 shadow">
      {block.url && (
        <>
          {block.socialMediaName === "tiktok" ? (
            <TikTokEmbed
              url={block.url.toString()}
              ref={ref}
              className="w-full"
            />
          ) : block.socialMediaName === "instagram" ? (
            <InstagramEmbed
              url={block.url.toString()}
              ref={ref}
              className="h-fit w-full max-w-xl"
            />
          ) : block.socialMediaName === "facebook" ? (
            <FacebookEmbed
              url={block.url.toString()}
              ref={ref}
              className="h-fit w-full"
            />
          ) : null}
          <Link
            href={block.url}
            target="_blank"
            className="mt-2 flex w-fit max-w-xl text-center text-foreground hover:text-primary"
          >
            <h2 className="break-all underline">{block.url.toString()}</h2>
          </Link>
        </>
      )}
    </div>
  );
};

export default BlockParserClientComponents;
