import dynamic from "next/dynamic";
import Image from "next/image";
import {
  PayloadLexicalReactRenderer,
  defaultElementRenderers,
} from "@atelier-disko/payload-lexical-react-renderer";
import "@/app/(app)/globals.css";
import { Skeleton } from "@/components/ui/skeleton";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const CustomCode = dynamic(() => import("./CustomCode"), {
  ssr: false,
  loading: () => <Skeleton className="h-94 w-64" />,
});
const BlockParserClientComponents = dynamic(
  () => import("./BlockParserClientComponents"),
  { ssr: false, loading: () => <Skeleton className="h-[600px] w-64" /> },
);
type Props = {};

const BlockParser = ({ block }: { block: any }) => {
  if (block.blockType === "iframe") {
    return (
      <iframe
        src={block.Iframe}
        allowFullScreen={true}
        key={block.id}
        width="900"
        height="620"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share;  picture-in--medipicture;"
        className="flex aspect-square h-full max-h-[700px] w-full items-center justify-center overflow-hidden border-none [&>html]:h-fit"
      />
    );
  }
  if (block.blockType === "socialmediaposts") {
    return <BlockParserClientComponents block={block} />;
  }

  if (block.blockType === "customcode") {
    if (block.code) {
      return <CustomCode block={block} />;
    }
  }

  if (
    block.blockType === "text" &&
    block.nameOfYourRichTextField_html !== "undefined"
  ) {
    return (
      <div
        key={block.id}
        className="blockParserClass text-left text-xl [&>ul>ul>li]:list-none"
      >
        <PayloadLexicalReactRenderer
          content={block.nameOfYourRichTextField}
          elementRenderers={{
            ...defaultElementRenderers,
            heading: (props) => {
              const Component: any = props.tag === "h1" ? "h2" : props.tag;

              return <Component>{props.children}</Component>;
            },
            paragraph(props) {
              return (
                <p
                  style={{
                    //@ts-ignore
                    textAlign:
                      props.format === "justify"
                        ? "left"
                        : props.format === undefined
                          ? "left"
                          : props.format.toString(),
                  }}
                >
                  {props.children}
                </p>
              );
            },
          }}
        />
      </div>
    );
  }
  if (block.blockType === "imageurl") {
    return (
      <Dialog>
        <DialogTrigger className="h-full max-h-[700px] w-full self-center rounded-lg border border-primary bg-primary object-contain shadow-md shadow-primary sm:w-fit">
          <Image
            src={block.ImageUrl}
            alt={block.alt}
            height={600}
            width={1000}
            quality={100}
            loading="lazy"
            className="h-full max-h-[700px] w-full self-center rounded-lg bg-primary object-contain shadow-md shadow-primary"
          />
        </DialogTrigger>
        <DialogContent className="flex h-fit min-h-dvh w-fit items-center justify-center overflow-y-hidden p-0 sm:items-start">
          <Image
            src={block.ImageUrl}
            alt="offer"
            width={1000}
            height={1000}
            quality={100}
            className="h-dvh max-h-dvh w-dvw max-w-screen-xl self-center object-contain"
          />
        </DialogContent>
      </Dialog>
    );
  }
};

export default BlockParser;
