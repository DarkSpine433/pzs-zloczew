import CursorMovmentAnimation from "@/app/components/mainPageComponents/CursorMovmentAnimation";
import MarqueeComponent from "@/app/components/mainPageComponents/MarqueeComponent";

import Section from "@/app/components/mainPageComponents/Section";
import Cta from "@/app/components/mainPageComponents/Cta";
import ContactButton from "@/app/components/ui/ContactButton";
import dynamic from "next/dynamic";
const GetOffer = dynamic(() => import("./GetOffer"));

export const revalidate = 21600;

type Props = {};

const page = (props: Props) => {
  return (
    <div className="pb-10">
      <div className="pointer-events-none absolute left-0 top-0 -z-50 h-dvh w-full bg-gradient-to-b from-primary/30 to-transparent"></div>
      <Section maxWidth="max-w-[1440px] relative h-fit">
        <CursorMovmentAnimation>
          <ContactButton className="bg-white/70 p-6 text-lg text-foreground opacity-80" />
        </CursorMovmentAnimation>
        <div className="] pointer-events-none absolute -top-[45rem] left-1/2 -z-20 size-[80rem] -translate-x-1/2 rounded-full bg-[radial-gradient(rgba(37,99,235,0.6)_0%,rgba(0,0,0,0.00)_30%)] md:-top-[28rem] md:left-full md:size-[96rem] lg:left-[80%]"></div>
      </Section>

      <div className="">
        <Section maxWidth="max-w-6xl z-10">
          <h2
            id="discover"
            className="scroll-m-20 space-y-10 bg-gradient-to-r from-primary from-40% via-foreground to-primary to-60% bg-clip-text py-5 text-center text-2xl font-extrabold uppercase text-transparent drop-shadow-[0_1.2px_1.2px_hsl(--primary)]"
          >
            Opinie Naszych Uczniów
          </h2>

          <MarqueeComponent />
        </Section>
        <div>
          <Section className="mt-20 overflow-hidden">
            <div className="relative rounded-lg border-t border-primary/30 bg-secondary/50 pb-20 pt-10">
              <hr className="absolute top-0 m-0 h-[0.1rem] w-full border-none bg-gradient-to-r from-transparent from-10% via-primary to-transparent to-90% p-0" />
              <div className="pointer-events-none absolute left-1/2 top-0 -z-10 size-[130rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(rgba(37,99,235,0.6)_0%,rgba(0,0,0,0.00)_30%)]"></div>

              <h2 className="scroll-m-20 space-y-10 bg-gradient-to-r from-blue-800 from-20% via-blue-500 to-blue-800 to-80% bg-clip-text pb-4 text-center text-4xl font-extrabold uppercase text-transparent drop-shadow-[0_1.2px_1.2px_hsl(--primary)]">
                Oferta Naszej Szkoły
              </h2>

              <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-2 px-2 pb-10 [&>div]:rounded-lg [&>div]:py-1">
                <div className="mb-4 w-fit border border-blue-400 bg-blue-200 px-2 text-sm text-blue-800 shadow-md shadow-blue-200 transition-all hover:-translate-y-0.5 hover:shadow-lg sm:mb-0">
                  Kreatywność
                </div>
                <div className="mb-4 w-fit border border-blue-500 bg-blue-300 px-2 text-sm text-blue-900 shadow-md shadow-blue-300 transition-all hover:-translate-y-0.5 hover:shadow-lg sm:mb-0">
                  Bezpieczeństwo
                </div>
                <div className="mb-4 w-fit border border-blue-300 bg-blue-100 px-2 text-sm text-blue-700 shadow-md shadow-blue-100 transition-all hover:-translate-y-0.5 hover:shadow-lg sm:mb-0">
                  Motywacja
                </div>
                <div className="mb-4 w-fit border border-blue-400 bg-blue-200 px-2 text-sm text-blue-800 shadow-md shadow-blue-200 transition-all hover:-translate-y-0.5 hover:shadow-lg sm:mb-0">
                  Wsparcie
                </div>
                <div className="mb-4 w-fit border border-blue-500 bg-blue-300 px-2 text-sm text-blue-900 shadow-md shadow-blue-300 transition-all hover:-translate-y-0.5 hover:shadow-lg sm:mb-0">
                  Integracja
                </div>
                <div className="mb-4 w-fit border border-blue-300 bg-blue-100 px-2 text-sm text-blue-700 shadow-md shadow-blue-100 transition-all hover:-translate-y-0.5 hover:shadow-lg sm:mb-0">
                  Rozwój
                </div>
                <div className="mb-4 w-fit border border-blue-400 bg-blue-200 px-2 text-sm text-blue-800 shadow-md shadow-blue-200 transition-all hover:-translate-y-0.5 hover:shadow-lg sm:mb-0">
                  Odkrywanie
                </div>
                <div className="mb-4 w-fit border border-blue-300 bg-blue-100 px-2 text-sm text-blue-700 shadow-md shadow-blue-100 transition-all hover:-translate-y-0.5 hover:shadow-lg sm:mb-0">
                  Przyjaźń
                </div>
                <div className="mb-4 w-fit border border-blue-500 bg-blue-300 px-2 text-sm text-blue-900 shadow-md shadow-blue-300 transition-all hover:-translate-y-0.5 hover:shadow-lg sm:mb-0">
                  Nauka
                </div>
                <div className="mb-4 w-fit border border-blue-300 bg-blue-100 px-2 text-sm text-blue-700 shadow-md shadow-blue-100 transition-all hover:-translate-y-0.5 hover:shadow-lg sm:mb-0">
                  Dyscyplina
                </div>
              </div>

              <GetOffer />

              <hr className="absolute bottom-0 m-0 h-[0.1rem] w-full border-none bg-gradient-to-r from-transparent from-10% via-primary to-transparent to-90% p-0" />
            </div>
          </Section>

          <Section maxWidth="max-w-[1440px] px-3 " className="pt-20">
            <div className="relative">
              <div className="flex h-max w-full justify-center">
                <h2 className="max-w-4xl bg-gradient-to-r from-primary from-40% via-foreground to-primary to-60% bg-clip-text text-center text-5xl font-extrabold uppercase text-transparent sm:text-8xl">
                  Rozpocznij swoją przygodę edukacyjną z nami!
                </h2>
              </div>
              <div className="z-50 py-20">
                <Cta />
              </div>
              <div className="pointer-events-none absolute bottom-0 left-1/2 -z-20 h-[50rem] w-[60rem] -translate-x-1/2 translate-y-1/2 rounded-full bg-[radial-gradient(rgba(37,99,235,0.6)_0%,rgba(0,0,0,0.00)_70%)]"></div>
            </div>
          </Section>
        </div>
      </div>
    </div>
  );
};

export default page;
