import CursorMovmentAnimation from '@/app/components/mainPageComponents/CursorMovmentAnimation'

import MarqueeComponent from '@/app/components/mainPageComponents/MarqueeComponent'
import Image from 'next/image'
import GetOffer from './GetOffer'
import RecentNews from '@/app/components/mainPageComponents/RecentNews'
import Section from '@/app/components/mainPageComponents/Section'
import { Button } from '@/components/ui/button'
import Cta from '@/app/components/mainPageComponents/Cta'

type Props = {}

const page = (props: Props) => {
  return (
    <div className="">
      <div className="w-full absolute top-0 left-0 bg-gradient-to-b from-primary/30 to-transparent h-dvh pointer-events-none -z-50"></div>
      <Section maxWidth="max-w-[1440px]">
        <CursorMovmentAnimation />
      </Section>
      <div className="">
        <Section maxWidth="max-w-6xl">
          <h2
            id="discover"
            className=" scroll-m-20 text-center font-extrabold text-2xl py-5 uppercase text-transparent bg-clip-text bg-gradient-to-r from-primary via-foreground to-primary from-40% to-60%  space-y-10 drop-shadow-[0_1.2px_1.2px_hsl(--primary)]"
          >
            Opinie Naszych Uczniów
          </h2>

          <MarqueeComponent />
        </Section>
        <hr className=" w-full h-[0.1rem] bg-gradient-to-r from-transparent from-10% to-90% via-primary/50 to-transparent border-none p-0  " />
        <Section className="  py-10 bg-gradient-to-t from-primary/50 via-10% via-transparent to-transparent border-b-blue-500 border-b-2">
          <h2 className=" scroll-m-20 text-center font-extrabold text-4xl pb-10 uppercase text-transparent bg-clip-text bg-gradient-to-r from-primary via-foreground to-primary from-40% to-60%  space-y-10 drop-shadow-[0_1.2px_1.2px_hsl(--primary)]">
            Oferta Naszej Szkoły
          </h2>
          <GetOffer />
        </Section>
        <Section maxWidth="max-w-[1440px] " className=" ">
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
        </Section>
        <Section maxWidth="max-w-[1440px] py-5 " className="  ">
          <div className=" w-full h-max flex justify-center">
            <h2 className=" text-8xl font-extrabold text-center uppercase text-transparent bg-clip-text bg-gradient-to-r from-primary via-foreground to-primary from-40% to-60% max-w-4xl ">
              Rozpocznij swoją przygodę edukacyjną z nami!
            </h2>
          </div>
          <Cta />
        </Section>
        <Section
          className="py-10 bg-gradient-to-b from-primary/30 via-10% via-transparent to-transparent border-primary border-t-2"
          maxWidth="max-w-6xl"
        >
          <h2 className=" scroll-m-20 text-center pb-20 font-extrabold text-4xl py-5 uppercase text-transparent bg-clip-text bg-gradient-to-r from-primary via-foreground to-primary from-40% to-60%  space-y-10 drop-shadow-[0_1.2px_1.2px_hsl(--primary)]">
            Aktualności
          </h2>

          <RecentNews />
        </Section>
      </div>
    </div>
  )
}

export default page
