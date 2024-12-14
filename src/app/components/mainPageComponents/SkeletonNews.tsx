import { Skeleton } from '@/components/ui/skeleton'
type Props = {
  repeat?: number
  className?: string
}

const SkeletonNews = ({ repeat, className }: Props) => {
  const skeletons = [...Array(repeat)].map((_, i) => {
    return <Skeleton key={i} className={`rounded-xl ${className}`} />
  })
  return skeletons
}

export default SkeletonNews
