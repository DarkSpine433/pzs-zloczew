// @ts-nocheck
import React from 'react'
import CursorMovmentAnimation from '@/app/components/mainPageComponents/CursorMovmentAnimation'
import GetOffer from './GetOffer'
import MarqueeComponent from '@/app/components/mainPageComponents/MarqueeComponent'
import Image from 'next/image'
type Props = {}

const page = (props: Props) => {
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
      <MarqueeComponent />
      <section className=" w-full h-fit">
        <div className=" w-full h-max flex  justify-center">
          <Image
            src="/img/mainPage/pzs-1.png"
            alt="zloczew"
            width={2000}
            height={2000}
            quality={100}
            className="object-contain w-max "
          />
        </div>
      </section>
      <GetOffer />
    </div>
  )
}

export default page
