'use client'

import { Button } from '@/components/ui/button'
import { motion, useMotionValue, useTransform } from 'framer-motion'
import Link from 'next/link'
import { useRef } from 'react'
import Image from 'next/image'

type Props = {}

const CursorMovmentAnimation = (props: Props) => {
  const refOfSection = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const transformPostionX = useTransform(x, [-0.5, 0.5], [-2, 2])
  const transformPostionY = useTransform(y, [-0.5, 0.5], [-2, 2])

  const handleMouseMove = (e: any) => {
    const rect = refOfSection.current?.getBoundingClientRect()!
    x.set((e.clientX - rect.left) / rect.width - 0.5)
    y.set((e.clientY - rect.top) / rect.height - 0.5)
  }
  return (
    <motion.section
      className=" h-fit w-full pb-10 transition-all overflow-hidden px-5  md:px-20 relative min-h-[600px] flex items-center "
      ref={refOfSection}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        x.set(0)
        y.set(0)
      }}
    >
      <div className="w-[600px]  ">
        <h1 className=" text-5xl text inline-block text-transparent bg-clip-text bg-gradient-to-tl from-primary via-foreground to-primary from-40% to-60% font-bold space-y-10 drop-shadow-[0_1.2px_1.2px_hsl(--primary)]">
          <div className="uppercase text-5xl sm:text-7xl font-extrabold">PZS ZŁOCZEw</div>
          <div className=" text-2xl sm:text-3xl">
            Cieszymy się, że jesteś tutaj! Dowiedz się więcej o naszej szkole, naszych wartościach i
            bogatej historii. Znajdź informacje, które Cię interesują i dołącz do naszej wspaniałej
            społeczności.
          </div>
          <div className="flex gap-5 items-center ">
            <Link href="#discover" className=" flex items-center">
              <Button className="p-5">Zwiedzaj</Button>
            </Link>
            <Button variant={'outline'} className="bg-transparent p-5">
              Kontakt
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="ml-2 w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20.25 3.75v4.5m0-4.5h-4.5m4.5 0-6 6m3 12c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 0 1 4.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 0 0-.38 1.21 12.035 12.035 0 0 0 7.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 0 1 1.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 0 1-2.25 2.25h-2.25Z"
                />
              </svg>
            </Button>
          </div>
        </h1>
      </div>

      {/*PLUS IMAGE*/}
      <div className=" bg-[url('/plus.svg')] hidden sm:block size-28 absolute opacity-50 top-20 left-0 translate-x-1/2 -translate-y-1/2 -z-20 "></div>
      {/*Interactive Imgaes*/}
      <div className=" h-fit absolute hidden -z-10 top-0 right-0  overflow-hidden md:flex justify-end">
        <div className=" size-fit relative [perspective:150px] ">
          <motion.div
            style={{
              rotateX: transformPostionX,
              rotateY: transformPostionY,
              transformStyle: 'preserve-3d',
              transition: `all 2s cubic-bezier(0.17, 0.55, 0.55, 1)  `,
            }}
            className=" object-cover h-fit w-fit"
          >
            <Image
              src="/img/mainPage/notebook-front-color.png"
              alt="zloczew"
              width={600}
              height={600}
              quality={100}
              className="hidden lg:block"
              priority={true}
            />
            <Image
              src="/img/mainPage/notebook-front-premium.png"
              alt="zloczew"
              width={600}
              height={600}
              quality={100}
              className="block lg:hidden "
              priority={true}
            />
          </motion.div>
          <motion.div
            style={{
              rotateX: transformPostionX,
              rotateY: transformPostionY,
              transformStyle: 'preserve-3d',
              transition: `all 2s cubic-bezier(0.17, 0.55, 0.55, 1)  `,
            }}
            className="w-fit h-fit absolute top-0 right-20"
          >
            <Image
              src="/img/mainPage/calender-dynamic-color.png"
              alt="zloczew"
              width={180}
              height={180}
              priority={true}
              className="object-cover "
            />
          </motion.div>

          <motion.div
            style={{
              rotateX: transformPostionX,
              rotateY: transformPostionY,
              transformStyle: 'preserve-3d',
              transition: `all 2s cubic-bezier(0.17, 0.55, 0.55, 1)  `,
            }}
            className="w-fit h-fit absolute bottom-10 left-10"
          >
            <Image
              src="/img/mainPage/thumb-up-dynamic-color.png"
              alt="zloczew"
              width={180}
              height={180}
              priority={true}
              className="object-cover "
            />
          </motion.div>
          <motion.div
            style={{
              rotateX: transformPostionX,
              rotateY: transformPostionY,
              transformStyle: 'preserve-3d',
              transition: `all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1)  `,
              translateX: '-50%',
            }}
            className="absolute object-contain w-fit h-fit bottom-5 left-1/2 -z-10 opacity-5 "
          >
            <Image
              src="/img/mainPage/Ellipse.png"
              alt="zloczew"
              width={300}
              height={300}
              priority={true}
              className="object-cover "
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

export default CursorMovmentAnimation
