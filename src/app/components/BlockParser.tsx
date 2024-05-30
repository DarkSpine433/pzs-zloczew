import parse from 'html-react-parser'
import Image from 'next/image'
type Props = {}

const BlockParser = ({ block }: { block: any }) => {
  if (block.blockType === 'iframe') {
    return (
      <iframe
        src={block.Iframe}
        frameBorder="0"
        key={block.id}
        className="w-full min-h-[600px] rounded-xl border-0 shadow-md"
      />
    )
  }
  if (block.blockType === 'text') {
    return (
      <div
        key={block.id}
        className="
        text-left w-full text-lg font-semibold
        [&>h2]:text-5xl [&>h2]:pb-1 [&>h2]:pt-10 [&>h2]:font-extrabold
        [&>p]:text-2xl  [&>p]:py-2
        [&>hr]:w-full [&>hr]:h-[0.05rem] [&>hr]:bg-foreground [&>hr]:border-none [&>hr]:p-0
        "
      >
        {parse(block.nameOfYourRichTextField_html)}
      </div>
    )
  }
  if (block.blockType === 'imageurl') {
    return (
      <Image
        src={block.ImageUrl}
        alt={block.alt}
        height={900}
        width={900}
        key={block.id}
        quality={100}
        loading="lazy"
        className="object-cover w-fit border-primary  rounded-lg shadow-sm shadow-primary"
      />
    )
  }
}

export default BlockParser
