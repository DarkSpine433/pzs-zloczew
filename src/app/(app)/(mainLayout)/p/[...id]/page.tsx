//@ts-nocheck
import dynamic from 'next/dynamic'
import FetchContent from './FetchContent'
const RecentNews = dynamic(
  () => import('@/app/components/mainPageComponents/RecentNews/RecentNews'),
  { ssr: false },
)

type Props = {
  params: { id: string }
}

const page = ({ params }: Props) => {
  return (
    <>
      <div className=" overflow-x-hidden max-w-screen-2xl mx-auto flex flex-col lg:flex-row justify-center items-center lg:items-start gap-5 px-3">
        <div className="max-w-7xl w-fit h-fit rounded-xl flex flex-col gap-2">
          <FetchContent id={params.id} />
        </div>
        <div className=" h-fit bg-primary/5 pb-20 rounded-xl max-w-7xl w-fit px-1 lg:w-72  border-y border-primary/10  ">
          <div className="relative pt-10 py-10">
            <h2 className=" scroll-m-20 text-center  font-extrabold text-3xl uppercase text-transparent bg-clip-text bg-gradient-to-r from-primary via-foreground to-primary from-40% to-60%  space-y-10 drop-shadow-[0_1.2px_1.2px_hsl(--primary)]">
              Aktualności
            </h2>
          </div>
          <RecentNews className=" md:flex md:flex-col" />
        </div>
      </div>
    </>
  )
}

export default page
