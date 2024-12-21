'use client'

import { Button } from '@/components/ui/button'
import { motion, useMotionValue, useTransform } from 'motion/react'
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
      className="relative flex h-fit min-h-[600px] w-full items-center overflow-hidden px-5 pb-10 transition-all sm:items-center lg:px-10 xl:px-28"
      ref={refOfSection}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        x.set(0)
        y.set(0)
      }}
    >
      {' '}
      <div className="flex w-full flex-col items-center justify-center gap-10 text-center lg:w-[600px] lg:items-start lg:justify-normal lg:text-left">
        <div className="text inline-block max-w-2xl space-y-10 bg-gradient-to-tl from-primary from-40% via-foreground to-primary to-60% bg-clip-text text-5xl font-bold text-transparent drop-shadow-[0_1.2px_1.2px_hsl(--primary)]">
          <h1 className="text-6xl uppercase tracking-widest sm:text-8xl">
            <strong>PZS ZŁOCZEW</strong>
          </h1>
          <h2 className="text-2xl sm:text-3xl">
            Cieszymy się, że jesteś tutaj! Dowiedz się więcej o naszej szkole, naszych wartościach i
            bogatej historii. Znajdź informacje, które Cię interesują i dołącz do naszej wspaniałej
            społeczności.
          </h2>
        </div>{' '}
        <div className="flex items-center gap-5">
          <Link href="#discover" className="flex items-center">
            <Button className="group p-6 text-lg shadow shadow-primary hover:bg-transparent hover:text-primary">
              Zwiedzaj
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="ml-1 size-5 transition-all group-hover:rotate-90 group-hover:scale-105 group-hover:text-primary"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </Button>
          </Link>
          {children}
        </div>
      </div>
      {/*PLUS IMAGE*/}
      {/*Interactive Imgaes*/}
      {windowWidth !== 0 && (
        <>
          {windowWidth >= 1024 ? (
            <div className="absolute -right-24 top-0 z-10  hidden h-fit justify-end overflow-hidden md:flex lg:-right-20 xl:right-0">
              <div className="relative size-fit [perspective:150px]">
                <motion.div
                  style={{
                    rotateX: transformPostionX,
                    rotateY: transformPostionY,
                    transformStyle: 'preserve-3d',
                    transition: `all 1s cubic-bezier(0.17, 0.55, 0.55, 1)  `,
                  }}
                  className="h-fit w-fit object-cover"
                >
                  <Image
                    src="/img/mainPage/notebook-front-color.png"
                    alt="zloczew"
                    width={600}
                    height={600}
                  />
                </motion.div>
                <motion.div
                  style={{
                    rotateX: transformPostionX,
                    rotateY: transformPostionY,
                    transformStyle: 'preserve-3d',
                    transition: `all 1s cubic-bezier(0.17, 0.55, 0.55, 1)  `,
                  }}
                  className="absolute right-20 top-0 h-fit w-fit"
                >
                  <Image
                    src="/img/mainPage/calender-dynamic-color.png"
                    alt="zloczew"
                    width={180}
                    height={180}
                    priority={true}
                    className="object-cover"
                  />
                </motion.div>

                <motion.div
                  style={{
                    rotateX: transformPostionX,
                    rotateY: transformPostionY,
                    transformStyle: 'preserve-3d',
                    transition: `all 1s cubic-bezier(0.17, 0.55, 0.55, 1)  `,
                  }}
                  className="absolute bottom-10 left-10 h-fit w-fit"
                >
                  <Image
                    src="/img/mainPage/thumb-up-dynamic-color.png"
                    alt="zloczew"
                    width={180}
                    height={180}
                    priority={true}
                    className="object-cover"
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
                  className="absolute bottom-5 left-1/2 -z-10 h-fit w-fit object-contain opacity-5"
                >
                  <Image
                    src="/img/mainPage/Ellipse.png"
                    alt="zloczew"
                    width={300}
                    height={300}
                    priority={true}
                    className="object-cover"
                  />
                </motion.div>
              </div>
            </div>
          ) : (
            <div className="absolute left-0 top-0 z-10 h-fit w-full">
              <Image
                src="/img/mainPage/zsp_zloczew.jpeg"
                alt="zloczew"
                width={1000}
                height={1000}
                priority={true}
                className="pointer-events-none absolute left-0 top-0 -z-50 h-[600px] w-full object-cover opacity-20"
              />
              <div className="absolute left-0 top-0 z-0 h-[600px] w-full bg-gradient-to-t from-white from-10% to-transparent"></div>
            </div>
          )}
        </>
      )}
    </motion.div>
  )
}

export default CursorMovmentAnimation
