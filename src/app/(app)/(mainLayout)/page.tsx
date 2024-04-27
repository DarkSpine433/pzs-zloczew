import dynamic from 'next/dynamic'

import CursorMovmentAnimation from '@/app/components/mainPageComponents/CursorMovmentAnimation'

import MarqueeComponent from '@/app/components/mainPageComponents/MarqueeComponent'
import GetOffer from './GetOffer'

import RecentNews from '@/app/components/mainPageComponents/RecentNews/RecentNews'
import Section from '@/app/components/mainPageComponents/Section'

import Cta from '@/app/components/mainPageComponents/Cta'

type Props = {}

const page = (props: Props) => {
  return (
    <div className=" overflow-x-hidden">
      <div className="w-full absolute top-0 left-0 bg-gradient-to-b from-primary/30 to-transparent h-dvh pointer-events-none -z-50"></div>
      <Section maxWidth="max-w-[1440px]">
        <CursorMovmentAnimation />
      </Section>
      <div className="">
        <Section maxWidth="max-w-6xl z-10">
          <h2
            id="discover"
            className=" scroll-m-20 text-center font-extrabold text-2xl py-5 uppercase text-transparent bg-clip-text bg-gradient-to-r from-primary via-foreground to-primary from-40% to-60%  space-y-10 drop-shadow-[0_1.2px_1.2px_hsl(--primary)]"
          >
            Opinie Naszych Uczniów
          </h2>

          <MarqueeComponent />
        </Section>
        <div className="px-2">
          <Section className=" mt-20  overflow-hidden">
            <div className="relative py-20 border-b rounded-lg border-primary/20">
              <hr className=" w-full h-[0.1rem] bg-gradient-to-r from-transparent from-10% to-90% via-primary to-transparent border-none p-0  absolute top-0 m-0 " />
              <div className=" absolute  blur-[100px] size-52 bg-primary left-1/2 top-0 -translate-x-1/2  -translate-y-1/2 -z-20 pointer-events-none "></div>
              <h2 className=" scroll-m-20 text-center font-extrabold text-4xl pb-10 uppercase text-transparent bg-clip-text bg-gradient-to-b from-primary via-foreground to-primary from-40% to-60%  space-y-10 drop-shadow-[0_1.2px_1.2px_hsl(--primary)]">
                Oferta Naszej Szkoły
              </h2>
              <GetOffer />
              <hr className=" w-full h-[0.1rem] bg-gradient-to-r from-transparent from-10% to-90% via-primary to-transparent border-none p-0  absolute bottom-0 m-0 " />
            </div>
          </Section>

          <Section maxWidth="max-w-[1440px] " className="   pt-32 ">
            <div className=" w-full h-max flex justify-center ">
              <h2 className=" text-5xl sm:text-8xl  font-extrabold text-center uppercase text-transparent bg-clip-text bg-gradient-to-r from-primary via-foreground to-primary from-40% to-60% max-w-4xl ">
                Rozpocznij swoją przygodę edukacyjną z nami!
              </h2>
            </div>
            <div className=" py-20 z-50">
              <Cta />
            </div>
            <div className=" absolute  blur-[200px] size-96 bg-primary left-1/2 bottom-0 -translate-x-1/2  translate-y-1/2 -z-20 pointer-events-none "></div>
          </Section>

          <Section className=" bg-background" maxWidth="max-w-6xl">
            <div className="relative pt-20">
              <hr className=" w-full h-[0.1rem] bg-gradient-to-r from-transparent from-10% to-90% via-primary to-transparent border-none p-0  absolute top-0 m-0 " />
              <h2 className=" scroll-m-20 text-center pb-20 font-extrabold text-4xl py-5 uppercase text-transparent bg-clip-text bg-gradient-to-r from-primary via-foreground to-primary from-40% to-60%  space-y-10 drop-shadow-[0_1.2px_1.2px_hsl(--primary)]">
                Aktualności
              </h2>
            </div>
            <div className="px-2">
              <RecentNews />
            </div>
          </Section>
        </div>
      </div>
      {/* <Section maxWidth="max-w-[1440px] " className=" ">
        <div className=" w-full h-max flex justify-center">
          <Image
            src="/img/mainPage/pzs-1.png"
            alt="zloczew"
            width={2000}
            height={2000}
            quality={100}
            className="object-contain w-max "
          />
        </div>
      </Section> */}
    </div>
  )
}

export default page
