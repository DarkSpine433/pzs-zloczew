import dynamic from 'next/dynamic'
import SkeletonNews from '../SkeletonNews'

const FetchRecentNews = dynamic(() => import('./FetchRecentNews'), {
  ssr: false,
  loading: () => <SkeletonNews repeat={10} width="w-full" height="h-30" />,
})
type Props = {
  className?: string
}

const RecentNews = async ({ className }: Props) => {
  return (
    <>
      <div className="px-2">
        <div
          className={`grid md:grid-cols-2 gap-10 justify-center pb-2 [&>h2]:text-sm ${className}`}
        >
          <FetchRecentNews />
        </div>
      </div>
    </>
  )
}

export default RecentNews
