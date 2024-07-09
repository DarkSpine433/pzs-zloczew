import parse from "html-react-parser";
import Image from "next/image";
import {
  PayloadLexicalReactRenderer,
  defaultElementRenderers,
} from "@atelier-disko/payload-lexical-react-renderer";
import "@/app/(app)/globals.css";
type Props = {};

const BlockParser = ({ block }: { block: any }) => {
  if (block.blockType === "iframe") {
    return (
      <iframe
        src={block.Iframe}
        allowFullScreen={true}
        key={block.id}
        className="h-[600px] w-full rounded-xl border-0 object-fill shadow-md"
      />
    );
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
          }}
        />
      </div>
    );
  }
  if (block.blockType === "imageurl") {
    return (
      <Image
        src={block.ImageUrl}
        alt={block.alt}
        height={600}
        width={1000}
        key={block.id}
        quality={100}
        loading="lazy"
        className="max-h-[600px] self-center rounded-lg border-primary bg-primary object-contain shadow-sm shadow-primary"
      />
    );
  }
};

export default BlockParser;
