import { Skeleton } from '@/components/ui/skeleton'
type Props = {
  repeat?: number
  className?: string
  width?: string
  height?: string
}

const SkeletonNews = ({ repeat, className, width, height }: Props) => {
  const skeletons = [...Array(repeat)].map(() => {
    return <Skeleton className={`${width} ${height} rounded-xl`} />
  })
  return skeletons
}

export default SkeletonNews
