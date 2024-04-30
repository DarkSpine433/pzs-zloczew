import SkeletonNews from '@/app/components/mainPageComponents/SkeletonNews'

import dynamic from 'next/dynamic'
import NewsFilter from './NewsFilter'

const NumberOfNewsToFetch = 30

const FetchNews = dynamic(() => import('./FetchNews'), {
  ssr: false,
  loading: () => <SkeletonNews repeat={NumberOfNewsToFetch} width="w-80" height="h-96" />,
})
type Props = {}

const page = (props: Props) => {
  return (
    <>
      <h1 className="text-center font-extrabold text-4xl sm:text-7xl pt-12 py-20 uppercase text-transparent bg-clip-text bg-gradient-to-r from-primary via-foreground to-primary from-40% to-60%   drop-shadow-[0_1.2px_1.2px_hsl(--primary)] ">
        Aktualności
      </h1>
      <div className="max-w-screen-2xl w-full mx-auto flex lg:gap-10 px-5  justify-center ">
        <NewsFilter />

        <div className="flex flex-wrap gap-10  mx-auto w-full h-fit justify-center ">
          <FetchNews NumberOfNewsToFetch={NumberOfNewsToFetch} />
        </div>
      </div>
    </>
  )
}

export default page
