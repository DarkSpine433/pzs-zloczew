'use client'

import { Button } from '@/components/ui/button'
import { motion, useMotionValue, useTransform } from 'framer-motion'
import Link from 'next/link'
import { useLayoutEffect, useRef, useState } from 'react'
import Image from 'next/image'

type Props = {
  children: React.ReactNode
}

const CursorMovmentAnimation = ({ children }: Props) => {
  const refOfSection = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const [windowWidth, setWindowWidth] = useState(0)

  const transformPostionX = useTransform(x, [-0.5, 0.5], [-3, 3])
  const transformPostionY = useTransform(y, [-0.5, 0.5], [-3, 3])

  const handleMouseMove = (e: any) => {
    const rect = refOfSection.current?.getBoundingClientRect()!
    x.set((e.clientX - rect.left) / rect.width - 0.5)
    y.set((e.clientY - rect.top) / rect.height - 0.5)
  }
  useLayoutEffect(() => {
    setWindowWidth(window.innerWidth)
    window.addEventListener('resize', () => {
      setWindowWidth(window.innerWidth)
    })
  }, [])
  return (
    <motion.div
      className=" h-fit w-full pb-10 transition-all overflow-hidden px-5  md:px-20 relative items-center flex   min-h-[600px] sm:items-center "
      ref={refOfSection}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        x.set(0)
        y.set(0)
      }}
    >
      <div className="w-[600px]  ">
        <h1 className=" text-5xl text inline-block text-transparent bg-clip-text bg-gradient-to-tl from-primary via-foreground to-primary from-40% to-60% font-bold space-y-10 drop-shadow-[0_1.2px_1.2px_hsl(--primary)]">
          <div className="uppercase text-5xl sm:text-8xl font-extrabold">PZS ZŁOCZEw</div>
          <div className=" text-2xl sm:text-3xl">
            Cieszymy się, że jesteś tutaj! Dowiedz się więcej o naszej szkole, naszych wartościach i
            bogatej historii. Znajdź informacje, które Cię interesują i dołącz do naszej wspaniałej
            społeczności.
          </div>
          <div className="flex gap-5 items-center ">
            <Link href="#discover" className=" flex items-center">
              <Button className="p-6 text-lg">Zwiedzaj</Button>
            </Link>
            {children}
          </div>
        </h1>
      </div>

      {/*PLUS IMAGE*/}
      <div className=" bg-[url('/plus.svg')] hidden sm:block size-28 absolute opacity-50 top-20 left-0 translate-x-1/2 -translate-y-1/2 -z-20 "></div>
      {/*Interactive Imgaes*/}
      {windowWidth > 768 && (
        <div className=" h-fit absolute hidden -z-10 top-0 right-0  overflow-hidden md:flex justify-end">
          <div className=" size-fit relative [perspective:150px] ">
            <motion.div
              style={{
                rotateX: transformPostionX,
                rotateY: transformPostionY,
                transformStyle: 'preserve-3d',
                transition: `all 1s cubic-bezier(0.17, 0.55, 0.55, 1)  `,
              }}
              className=" object-cover h-fit w-fit"
            >
              {windowWidth > 1024 ? (
                <Image
                  src="/img/mainPage/notebook-front-color.png"
                  alt="zloczew"
                  width={600}
                  height={600}
                  quality={100}
                  priority={true}
                />
              ) : (
                <Image
                  src="/img/mainPage/notebook-front-premium.png"
                  alt="zloczew"
                  width={600}
                  height={600}
                  quality={100}
                  priority={true}
                />
              )}
            </motion.div>
            <motion.div
              style={{
                rotateX: transformPostionX,
                rotateY: transformPostionY,
                transformStyle: 'preserve-3d',
                transition: `all 1s cubic-bezier(0.17, 0.55, 0.55, 1)  `,
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
                transition: `all 1s cubic-bezier(0.17, 0.55, 0.55, 1)  `,
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
      )}
    </motion.div>
  )
}

export default CursorMovmentAnimation
