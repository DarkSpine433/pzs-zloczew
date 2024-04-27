import dynamic from 'next/dynamic'
import SkeletonNews from '../SkeletonNews'

const FetchRecentNews = dynamic(() => import('./FetchRecentNews'), {
  ssr: false,
  loading: () => <SkeletonNews repeat={10} width="w-full" height="h-96" />,
})
type Props = {}

const RecentNews = async (props: Props) => {
  return (
    <div className="grid md:grid-cols-2 gap-10 justify-center pb-2">
      <FetchRecentNews />
    </div>
  )
}

export default RecentNews
