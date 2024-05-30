import CursorMovmentAnimation from '@/app/components/mainPageComponents/CursorMovmentAnimation'

import MarqueeComponent from '@/app/components/mainPageComponents/MarqueeComponent'
import GetOffer from './GetOffer'

import RecentNews from '@/app/components/mainPageComponents/RecentNews/RecentNews'
import Section from '@/app/components/mainPageComponents/Section'

import Cta from '@/app/components/mainPageComponents/Cta'
import ContactButton from '@/app/components/ui/ContactButton'

type Props = {}

const page = (props: Props) => {
  return (
    <div className=" overflow-x-hidden pb-10">
      <div className="w-full absolute top-0 left-0 bg-gradient-to-b from-primary/30 to-transparent h-dvh pointer-events-none -z-50"></div>
      <Section maxWidth="max-w-[1440px]">
        <CursorMovmentAnimation>
          <ContactButton className="p-6 text-lg text-foreground bg-white/70" />
        </CursorMovmentAnimation>
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
        <div>
          <Section className=" mt-20  overflow-hidden">
            <div className="relative pt-10 pb-20  rounded-lg border-primary/20">
              <hr className=" w-full h-[0.1rem] bg-gradient-to-r from-transparent from-10% to-90% via-primary to-transparent border-none p-0  absolute top-0 m-0 " />
              <div className=" absolute rounded-full size-[80rem] left-1/2 top-0 -translate-x-1/2  -translate-y-1/2 -z-20 pointer-events-none  bg-[radial-gradient(rgba(37,99,235,0.6)_0%,rgba(0,0,0,0.00)_30%)]  "></div>

              <h2 className=" scroll-m-20 text-center font-extrabold text-4xl pb-4 uppercase text-transparent bg-clip-text bg-gradient-to-r from-blue-800 via-blue-500 to-blue-800 from-20% to-80%  space-y-10 drop-shadow-[0_1.2px_1.2px_hsl(--primary)]">
                Oferta Naszej Szkoły
              </h2>

              <div className=" gap-2 [&>div]:rounded-lg [&>div]:py-1 pb-10 mx-auto  max-w-7xl flex  flex-wrap items-center justify-center  px-2  ">
                <div className="px-2 hover:-translate-y-0.5 hover:shadow-lg shadow-md shadow-blue-100 text-sm border bg-blue-100 border-blue-300 text-blue-700 w-fit mb-4 sm:mb-0 transition-all">
                  Dyscyplina
                </div>
                <div className="px-2 hover:-translate-y-0.5 hover:shadow-lg shadow-md shadow-blue-200 text-sm border bg-blue-200 border-blue-400 text-blue-800 w-fit mb-4 sm:mb-0 transition-all">
                  Kreatywność
                </div>
                <div className="px-2 hover:-translate-y-0.5 hover:shadow-lg shadow-md shadow-blue-300 text-sm border bg-blue-300 border-blue-500 text-blue-900 w-fit mb-4 sm:mb-0 transition-all">
                  Bezpieczeństwo
                </div>
                <div className="px-2 hover:-translate-y-0.5 hover:shadow-lg shadow-md shadow-blue-100 text-sm border bg-blue-100 border-blue-300 text-blue-700 w-fit mb-4 sm:mb-0 transition-all">
                  Motywacja
                </div>
                <div className="px-2 hover:-translate-y-0.5 hover:shadow-lg shadow-md shadow-blue-200 text-sm border bg-blue-200 border-blue-400 text-blue-800 w-fit mb-4 sm:mb-0 transition-all">
                  Wsparcie
                </div>
                <div className="px-2 hover:-translate-y-0.5 hover:shadow-lg shadow-md shadow-blue-300 text-sm border bg-blue-300 border-blue-500 text-blue-900 w-fit mb-4 sm:mb-0 transition-all">
                  Integracja
                </div>
                <div className="px-2 hover:-translate-y-0.5 hover:shadow-lg shadow-md shadow-blue-100 text-sm border bg-blue-100 border-blue-300 text-blue-700 w-fit mb-4 sm:mb-0 transition-all">
                  Rozwój
                </div>
                <div className="px-2 hover:-translate-y-0.5 hover:shadow-lg shadow-md shadow-blue-200 text-sm border bg-blue-200 border-blue-400 text-blue-800 w-fit mb-4 sm:mb-0 transition-all">
                  Odkrywanie
                </div>
                <div className="px-2 hover:-translate-y-0.5 hover:shadow-lg shadow-md shadow-blue-300 text-sm border bg-blue-300 border-blue-500 text-blue-900 w-fit mb-4 sm:mb-0 transition-all">
                  Nauka
                </div>
                <div className="px-2 hover:-translate-y-0.5 hover:shadow-lg shadow-md shadow-blue-100 text-sm border bg-blue-100 border-blue-300 text-blue-700 w-fit mb-4 sm:mb-0 transition-all">
                  Przyjaźń
                </div>
              </div>

              <GetOffer />
              <hr className=" w-full h-[0.1rem] bg-gradient-to-r from-transparent from-10% to-90% via-primary to-transparent border-none p-0  absolute bottom-0 m-0 " />
            </div>
          </Section>

          <Section maxWidth="max-w-[1440px] px-3 " className=" border-t pt-20 ">
            <div className="relative">
              <div className=" w-full h-max flex justify-center ">
                <h2 className=" text-5xl sm:text-8xl  font-extrabold text-center uppercase text-transparent bg-clip-text bg-gradient-to-r from-primary via-foreground to-primary from-40% to-60% max-w-4xl ">
                  Rozpocznij swoją przygodę edukacyjną z nami!
                </h2>
              </div>
              <div className=" py-20 z-50">
                <Cta />
              </div>
              <div className=" absolute rounded-full  w-[60rem] h-[50rem] left-1/2 bottom-0 -translate-x-1/2  translate-y-1/2 -z-20 pointer-events-none  bg-[radial-gradient(rgba(37,99,235,0.6)_0%,rgba(0,0,0,0.00)_70%)]  "></div>
            </div>
          </Section>
          <div className="px-2">
            <Section className=" bg-background mb-5 " maxWidth="max-w-6xl ">
              <div className="relative ">
                <hr className="w-full h-[0.1rem] bg-gradient-to-r from-transparent from-10% to-90% via-primary to-transparent border-none p-0  absolute top-0 m-0 " />
                <h2 className=" scroll-m-20 text-center pb-20 font-extrabold text-4xl py-5 uppercase text-transparent bg-clip-text bg-gradient-to-r from-primary via-foreground to-primary from-40% to-60%  space-y-10 drop-shadow-[0_1.2px_1.2px_hsl(--primary)]">
                  Aktualności
                </h2>
              </div>
              <RecentNews repetation={10} />
            </Section>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
