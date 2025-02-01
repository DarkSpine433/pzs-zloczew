//@ts-nocheck

type Props = {
  className?: string
  content?: Record<string, any>
  Heading?: string
}

export const TopicHeading: React.FC<Props> = ({ className, content, Heading = 'h2' }) => {
  return <Heading className>{content}</Heading>
}
