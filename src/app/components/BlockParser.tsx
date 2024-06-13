import parse from "html-react-parser";
import Image from "next/image";
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
  if (block.blockType === "text") {
    return (
      <div
        key={block.id}
        className="w-full text-left text-lg font-semibold [&>h2]:pb-1 [&>h2]:pt-10 [&>h2]:text-5xl [&>h2]:font-extrabold [&>hr]:h-[0.05rem] [&>hr]:w-full [&>hr]:border-none [&>hr]:bg-foreground [&>hr]:p-0 [&>p>a]:break-all [&>p>a]:text-primary [&>p>a]:hover:text-primary/70 [&>p]:py-2 [&>p]:text-2xl"
      >
        {parse(block.nameOfYourRichTextField_html)}
      </div>
    );
  }
  if (block.blockType === "imageurl") {
    return (
      <Image
        src={block.ImageUrl}
        alt={block.alt}
        height={700}
        width={700}
        key={block.id}
        quality={100}
        loading="lazy"
        className="rounded-lg border-primary object-cover shadow-sm shadow-primary"
      />
    );
  }
};

export default BlockParser;
