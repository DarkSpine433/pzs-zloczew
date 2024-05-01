import SkeletonNews from '@/app/components/mainPageComponents/SkeletonNews'

import dynamic from 'next/dynamic'
import NewsFilter from './NewsFilter'

const NumberOfNewsToFetch = 30

const FetchNews = dynamic(() => import('./FetchNews'), {
  ssr: false,
  loading: () => <SkeletonNews repeat={NumberOfNewsToFetch} width="w-80" height="h-96" />,
})
type Props = {
  searchParams: { [key: string]: string | string[] | undefined }
}

const page = ({ searchParams }: Props) => {
  return (
    <>
      <h1 className="text-center font-extrabold text-[2.5rem] sm:text-7xl pt-10 py-20 uppercase text-transparent bg-clip-text bg-gradient-to-r from-primary via-foreground to-primary from-40% to-60%   drop-shadow-[0_1.2px_1.2px_hsl(--primary)] ">
        Aktualności
      </h1>
      <div className="max-w-screen-2xl w-full mx-auto flex lg:gap-10 px-5  justify-center ">
        <NewsFilter />
        {searchParams.test}
        <div className="grid grid-cols-1  sm:grid-cols-2 xl:grid-cols-3   gap-10  mx-auto w-full h-fit justify-center items-center ">
          <FetchNews NumberOfNewsToFetch={NumberOfNewsToFetch} searchParams={searchParams} />
        </div>
      </div>
    </>
  )
}

export default page
