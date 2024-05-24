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
      <div
        className=" bg-[url('/img/news/thumbnail.jpg')]
            relative
            overflow-hidden
            block
            z-10
         
            bg-cover
            bg-no-repeat
            bg-center

            after:content-['']
            after:absolute
            after:inset-0
            after:block
            after:bg-gradient-to-br
            after:from-black/70
            after:to-gray-black/30
          
            after:z-[-5]
            
            border-b-8 shadow-lg  border-gray-500 py-20 mb-20 after:top-0 after:left-0 after:w-full after:h-full after:bg-black/50 "
      >
        <h1 className="text-center font-extrabold text-[3rem] sm:text-7xl md:text-8xl lg:text-9xl bg-clip-text text-background/40   tracking-widest bg-[url('/img/news/grain.jpg')] ">
          Aktualności
        </h1>
        <h3 className="bg-clip-text text-left text-sm md:text-base text-gray-500/20 tracking-widest bg-[url('/img/news/grain.jpg')] mt-10  max-w-4xl mx-auto  px-6">
          <ol className=" [&>li]:first-letter:uppercase [&>li]:first-letter:text-primary flex flex-col gap-2">
            <li>
              Najnowsze informacje i wydarzenia życia szkoły Regularnie publikujemy wiadomości o
              osiągnięciach uczniów, relacje z wydarzeń szkolnych, informacje o nadchodzących
              konkursach oraz ogłoszenia dla rodziców i uczniów.
            </li>
            <li>
              Nasza strona jest najlepszym źródłem, aby być na bieżąco z tym, co dzieje się w naszej
              szkole.
            </li>
            <li>Zapraszamy do regularnego odwiedzania i śledzenia naszych aktualności!</li>
          </ol>
        </h3>
      </div>
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
