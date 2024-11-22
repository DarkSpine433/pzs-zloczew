'use client'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import {
  PayloadLexicalReactRenderer,
  defaultElementRenderers,
} from '@atelier-disko/payload-lexical-react-renderer'
import '@/app/(frontend)/globals.css'
import { Skeleton } from '@/components/ui/skeleton'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ScrollArea } from '@radix-ui/react-scroll-area'

const CustomCode = dynamic(() => import('./CustomCode'), {
  ssr: false,
  loading: () => <Skeleton className="h-94 w-64" />,
})
const BlockParserClientComponents = dynamic(() => import('./BlockParserClientComponents'), {
  ssr: false,
  loading: () => <Skeleton className="h-[600px] w-64" />,
})
const RichText = dynamic(() => import('@/components/RichText'), { ssr: false })
type Props = {}

const BlockParser = ({ block }: { block: any }) => {
  if (block.blockType === 'iframe') {
    return (
      <iframe
        src={block.Iframe}
        allowFullScreen={true}
        key={block.id}
        width="900"
        height="620"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share;  picture-in--medipicture;"
        className="flex aspect-square h-full max-h-[700px] w-full items-center justify-center overflow-hidden border-none [&>html]:h-fit"
      />
    )
  }
  if (block.blockType === 'socialmediaposts') {
    return <BlockParserClientComponents block={block} />
  }

  if (block.blockType === 'customcode') {
    if (block.code) {
      return <CustomCode block={block} />
    }
  }

  if (
    block.blockType === 'text' &&
    typeof block.nameOfYourRichTextField != undefined &&
    block.nameOfYourRichTextField != undefined
  ) {
    return (
      <div key={block.id} className="blockParserClass text-left text-xl [&>ul>ul>li]:list-none">
        <RichText content={block.nameOfYourRichTextField} />
      </div>
    )
  }
  if (block.blockType === 'imageurl') {
    const [isOpen, setIsOpen] = useState(false)
    const [canChange, setCanChange] = useState(true)
    const [imageUrl, setImageUrl] = useState(block.ImageUrl)
    console.log(isOpen, canChange)

    return (
      <motion.div className="relative flex h-fit max-h-[600px] items-center justify-center overflow-hidden">
        <Image
          src={imageUrl}
          alt="offer"
          width={0}
          height={0}
          quality={0}
          priority={false}
          className="h-full w-full opacity-0"
        />
        <AnimatePresence>
          <motion.div
            onClick={() => {
              if (canChange && isOpen) {
                setIsOpen(!isOpen), setCanChange(true)
              } else if (canChange) {
                setIsOpen(!isOpen), setCanChange(false)
              }
            }}
            layout
            exit={{ opacity: 0, scale: 0 }}
            animate={{
              backgroundColor: isOpen ? 'rgba(0, 0, 0, 0.5)' : 'rgba(0, 0, 0, 0)',

              transition: {
                delay: 0.4,
              },
            }}
            style={{
              height: isOpen ? '100vh' : '100%',
              width: '100%',
              top: '0',
              left: '0',
              position: isOpen ? 'fixed' : 'absolute',
              zIndex: isOpen ? 999 : 'auto',
            }}
            className={`absolute left-0 top-0 flex items-center justify-center ${
              isOpen ? 'p-1 backdrop-blur-sm sm:p-3' : 'p-0'
            }`}
          >
            <div
              className={`relative flex h-full w-full max-w-7xl flex-col items-center overflow-y-auto rounded-xl bg-background ${
                isOpen ? '' : 'pb-3'
              }`}
              onMouseEnter={() => isOpen && setCanChange(false)}
              onMouseLeave={() => isOpen && setCanChange(true)}
            >
              {isOpen && (
                <>
                  <style>
                    {`
                  body {
                    overflow: hidden !important;
                  }
                `}
                  </style>
                  <motion.button
                    whileHover={{
                      scale: 0.9,
                    }}
                    whileTap={{
                      rotate: 15,
                      scale: 1.1,
                      boxShadow: '0px 0px 8px #2563EB',
                      borderRadius: '50px',
                    }}
                    style={{
                      boxShadow: '0px 2px 5px #2563EB',
                      borderRadius: '10px',
                    }}
                    transition={{ type: 'spring', duration: 1, bounce: 0.5 }}
                    className="absolute right-3 top-3 z-50 flex size-14 items-center justify-center border border-primary"
                    onClick={() => (setIsOpen(false), setCanChange(true))}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-8"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                  </motion.button>
                </>
              )}
              <Image
                src={imageUrl}
                alt="offer"
                width={1000}
                height={1000}
                quality={100}
                className="h-full w-fit rounded-xl object-contain shadow-md shadow-primary"
              />{' '}
            </div>
          </motion.div>
        </AnimatePresence>
      </motion.div>
    )
  }
}

export default BlockParser
