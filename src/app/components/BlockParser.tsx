import parse from 'html-react-parser'
import Image from 'next/image'
type Props = {}

const BlockParser = ({ block }: { block: any }) => {
  if (block.blockType === 'iframe') {
    return (
      <iframe src={block.Iframe} frameBorder="0" key={block.id} className="w-full min-h-[600px]" />
    )
  }
  if (block.blockType === 'text') {
    return (
      <div
        key={block.id}
        className="
        [&>h2]:text-9xl
      [&>hr]:w-full [&>hr]:h-[0.05rem] [&>hr]:bg-foreground [&>hr]:border-none [&>hr]:p-0  "
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
        height={400}
        width={400}
        key={block.id}
        quality={100}
        loading="lazy"
        className="object-cover w-fit "
      />
    )
  }
}

export default BlockParser
