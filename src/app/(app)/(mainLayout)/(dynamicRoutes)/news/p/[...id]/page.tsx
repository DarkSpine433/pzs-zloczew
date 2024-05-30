//@ts-nocheck
import dynamic from 'next/dynamic'
import RecentNews from '@/app/components/mainPageComponents/RecentNews/RecentNews'
import Section from '@/app/components/mainPageComponents/Section'
const FetchContent = dynamic(() => import('./FetchContent'), {
  ssr: false,
})

type Props = {
  params: { id: string }
}

const page = ({ params }: Props) => {
  return (
    <>
      <FetchContent id={params.id} />
      <hr className="block w-full h-[3px] bg-gray-300 border-0 p-0 mb-20" />
      <Section className=" bg-background" maxWidth="max-w-6xl ">
        <h2 className="  py-5 bg-clip-text text-primary/90 text-5xl sm:text-6xl font-extrabold  bg-[url('/img/news/grain.jpg')]  max-w-6xl text-center mx-auto uppercase">
          Aktualności
        </h2>
        <div className="pt-6 border-t rounded-xl border-primary">
          <RecentNews repetation={10} />
        </div>
      </Section>
    </>
  )
}

export default page
