import React from 'react'
import Marquee from 'react-fast-marquee'
import CursorMovmentAnimation from '@/app/components/mainPageComponents/CursorMovmentAnimation'
import configPromise from '@payload-config'
import GetOffer from './GetOffer'

type Props = {}

const Opinions = [
  {
    imie: 'Anna',
    opinia: 'Szkoła zapewnia świetne możliwości rozwoju osobistego',
  },
  { imie: 'Piotr', opinia: 'Atmosfera w szkole sprzyja nauce i kreatywności.' },
  { imie: 'Katarzyna', opinia: 'Nauczyciele są bardzo zaangażowani i pomocni.' },

  { imie: 'Natalia', opinia: 'Program nauczania jest urozmaicony i interesujący.' },
  { imie: 'Łukasz', opinia: 'Szkoła oferuje wiele dodatkowych zajęć i aktywności pozalekcyjnych.' },
  {
    imie: 'Aleksandra',
    opinia: 'Biblioteka szkolna ma bogatą kolekcję książek i materiałów edukacyjnych.',
  },
  { imie: 'Michał', opinia: 'W szkole panuje przyjazna atmosfera współpracy między uczniami.' },
  { imie: 'Magdalena', opinia: 'Organizowane są ciekawe wyjazdy i wycieczki edukacyjne.' },
]

const page = (props: Props) => {
  const getOffer = async () => {
    console.log(await fetch('@/app/my-route/route'))
  }
  return (
    <div className=" space-y-10 ">
      <CursorMovmentAnimation />

      <hr className=" w-full h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent border-none " />
      <h2
        id="discover"
        className=" scroll-m-20 text-center font-bold text-4xl py-5 uppercase text-transparent bg-clip-text bg-gradient-to-r from-primary via-foreground to-primary from-40% to-60%  space-y-10 drop-shadow-[0_1.2px_1.2px_hsl(--primary)]"
      >
        Opinie Naszych Uczniów
      </h2>
      <Marquee autoFill={true} gradient={true} gradientWidth={30}>
        {Opinions.map(({ imie, opinia }) => (
          <div
            className="p-3 ml-2 bg-foreground text-white rounded-lg  overflow-hidden shadow-sm shadow-primary "
            key={imie + opinia}
          >
            <div className="font-bold">{imie}</div>
            <div className="w-60">{opinia}</div>
          </div>
        ))}
      </Marquee>
      <section className=" w-full h-fit">
        <div className=" w-full h-max flex  justify-center">
          <img src="/img/mainPage/pzs-1.png" alt="zloczew" className="object-contain w-max " />
        </div>
      </section>
      <GetOffer />
    </div>
  )
}

export default page
