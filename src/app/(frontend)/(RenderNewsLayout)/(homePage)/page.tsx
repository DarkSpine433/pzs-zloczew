import CursorMovmentAnimation from '@/app/components/mainPageComponents/CursorMovmentAnimation'
import MarqueeComponent from '@/app/components/mainPageComponents/MarqueeComponent'

import Section from '@/app/components/mainPageComponents/Section'
import Cta from '@/app/components/mainPageComponents/Cta'
import ContactButton from '@/app/components/ui/ContactButton'
import dynamic from 'next/dynamic'
import { ArchiveBlock } from '@/blocks/ArchiveBlock/Component'
import { Metadata } from 'next/types'

const GetOffer = dynamic(() => import('./GetOffer'))

type Props = {}

const Home = (props: Props) => {
  return (
    <>
      <div className="pointer-events-none absolute left-0 top-0 z-0  hidden h-dvh w-full bg-gradient-to-b from-primary/30 to-transparent lg:block"></div>
      <Section maxWidth="max-w-[1440px] relative h-fit" className="overflow-hidden">
        <CursorMovmentAnimation>
          <ContactButton className="bg-white p-6 text-lg text-foreground opacity-60" />
        </CursorMovmentAnimation>
        <div className="pointer-events-none absolute -top-[45rem] left-1/2  h-[80rem] w-[130rem] -translate-x-1/2 rounded-full bg-[radial-gradient(rgba(37,99,235,0.6)_0%,rgba(0,0,0,0.00)_30%)] md:-top-[28rem] md:left-full md:size-[96rem] lg:left-[80%] overflow-hidden"></div>
      </Section>
      <Section maxWidth="max-w-6xl z-10 min-h-40">
        <h2
          id="discover"
          className="scroll-m-20 space-y-10 bg-gradient-to-r from-primary from-40% via-foreground to-primary to-60% bg-clip-text py-5 text-center text-2xl font-extrabold uppercase text-transparent drop-shadow-[0_1.2px_1.2px_hsl(--primary)]"
        >
          Opinie Naszych Uczniów
        </h2>

        <MarqueeComponent />
      </Section>
      <Section className="mt-20 overflow-hidden">
        <div className="relative rounded-lg border-t border-primary/30 bg-secondary/50 pb-20 pt-10">
          <hr className="absolute top-0 m-0 h-[0.1rem] w-full border-none bg-gradient-to-r from-transparent from-10% via-primary to-transparent to-90% p-0" />
          <div className="pointer-events-none absolute left-1/2 top-0 z-0 size-[130rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(rgba(37,99,235,0.6)_0%,rgba(0,0,0,0.00)_30%)]"></div>

          <h2 className="scroll-m-20 space-y-10 bg-gradient-to-r from-blue-800 from-20% via-blue-500 to-blue-800 to-80% bg-clip-text pb-4 text-center text-4xl font-extrabold uppercase text-transparent drop-shadow-[0_1.2px_1.2px_hsl(--primary)]">
            Oferta Naszej Szkoły
          </h2>

          <div className="wave-container">
            <style>
              {`
                    @keyframes wave {
                      0% { transform: translateY(0); }
                      50% { transform: translateY(-1px); scale: 1.01; }
                      100% { transform: translateY(0); }
                    }

                    .wave-container {
                      display: flex;
                      flex-wrap: wrap;
                      justify-content: center;
                      gap: 0.5rem;
                      max-width: 112rem;
                      padding-bottom: 2.5rem;
                      margin: 0 auto;
                    }

                    .wave-item {
                      margin-bottom: 1rem;
                      width: fit-content;
                      padding: 0.5rem;
                      font-size: 0.875rem;
                      text-align: center;
                      border-radius: 0.5rem;
                      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                      transition: all 0.3s ease;
                      animation: wave 2s ease-in-out infinite;
                    }

                    .blue-200 {
                      border: 1px solid #60a5fa;
                      background-color: #bfdbfe;
                      color: #1e40af;
                      box-shadow: 0 4px 6px rgba(96, 165, 250, 0.4);
                    }

                    .blue-300 {
                      border: 1px solid #3b82f6;
                      background-color: #93c5fd;
                      color: #1e3a8a;
                      box-shadow: 0 4px 6px rgba(59, 130, 246, 0.4);
                    }

                    .blue-100 {
                      border: 1px solid #93c5fd;
                      background-color: #dbeafe;
                      color: #1d4ed8;
                      box-shadow: 0 4px 6px rgba(59, 130, 246, 0.1);
                    }

                    .wave-item:nth-child(1) {
                      animation-delay: 0s;
                    }

                    .wave-item:nth-child(2) {
                      animation-delay: 0.1s;
                    }

                    .wave-item:nth-child(3) {
                      animation-delay: 0.2s;
                    }

                    .wave-item:nth-child(4) {
                      animation-delay: 0.3s;
                    }

                    .wave-item:nth-child(5) {
                      animation-delay: 0.4s;
                    }

                    .wave-item:nth-child(6) {
                      animation-delay: 0.5s;
                    }

                    .wave-item:nth-child(7) {
                      animation-delay: 0.6s;
                    }

                    .wave-item:nth-child(8) {
                      animation-delay: 0.7s;
                    }

                    .wave-item:nth-child(9) {
                      animation-delay: 0.8s;
                    }

                    .wave-item:nth-child(10) {
                      animation-delay: 0.9s;
                    } 
                      .wave-item:nth-child(11) {
                      animation-delay: 1s;
                    }
                  `}
            </style>
            <div className="wave-item blue-200">Kreatywność</div>
            <div className="wave-item blue-300">Bezpieczeństwo</div>
            <div className="wave-item blue-100">Motywacja</div>
            <div className="wave-item blue-200">Wsparcie</div>
            <div className="wave-item blue-300">Integracja</div>
            <div className="wave-item blue-100">Rozwój</div>
            <div className="wave-item blue-200">Odkrywanie</div>
            <div className="wave-item blue-100">Przyjaźń</div>
            <div className="wave-item blue-300">Nauka</div>
            <div className="wave-item blue-100">Dyscyplina</div>
          </div>

          <GetOffer />

          <hr className="absolute bottom-0 m-0 h-[0.1rem] w-full border-none bg-gradient-to-r from-transparent from-10% via-primary to-transparent to-90% p-0" />
        </div>
      </Section>
      <Section maxWidth="max-w-[1440px] px-3  " className="pt-20 overflow-hidden">
        <div className="">
          <div className="flex h-max w-full justify-center">
            <h2 className="max-w-4xl bg-gradient-to-r from-primary from-40% via-foreground to-primary to-60% bg-clip-text text-center text-[3.2rem] font-extrabold uppercase text-transparent [line-height:1] sm:text-7xl md:text-8xl">
              <strong>Rozpocznij swoją przygodę edukacyjną z nami!</strong>
            </h2>
          </div>
          <div className="z-50 py-20">
            <Cta />
          </div>
          <div className="pointer-events-none absolute bottom-0 left-1/2 z-0 h-[50rem] w-[60rem] -translate-x-1/2 translate-y-1/2 rounded-full bg-[radial-gradient(rgba(37,99,235,0.6)_0%,rgba(0,0,0,0.00)_70%)]"></div>
        </div>
      </Section>{' '}
    </>
  )
}
export function generateMetadata(): Metadata {
  return {
    title: 'PZS Złoczew - Strona Główna',
    description:
      'Witamy na oficjalnej stronie PZS Złoczew. Poznaj naszą ofertę edukacyjną, wydarzenia szkolne, oraz wszystkie informacje na temat naszej szkoły w Złoczewie.',
    keywords: [
      'PZS Złoczew',
      'szkoła Złoczew',
      'oferta edukacyjna',
      'wydarzenia szkolne',
      'edukacja Złoczew',
      'szkoła średnia Złoczew',
    ],
    authors: [
      {
        name: 'DS-Craft Team',
        url: 'https://bit.ly/ds-craft',
      },
    ],

    openGraph: {
      title: 'PZS Złoczew - Strona Główna',
      description:
        'Witamy na stronie PZS Złoczew! Odkryj naszą ofertę edukacyjną, wydarzenia, aktualności oraz wszystko, co warto wiedzieć o naszej szkole.',
      images: [`/deafult_og.jpeg`],
      url: `${process.env.NEXT_PUBLIC_URL}`, // Replace with the actual homepage URL
      type: 'website',
      locale: 'pl_PL',
      siteName: 'PZS Złoczew',
    },
  }
}

export default Home
