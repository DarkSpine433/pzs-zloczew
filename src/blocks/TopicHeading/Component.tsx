//@ts-nocheck

type Props = {
  className?: string
  content?: Record<string, any>
  Heading?: Node.tag
}

export const TopicHeading: React.FC<Props> = ({ className, content, Heading = 'h2' }) => {
  return <Heading className={className}>{content}</Heading>
}
