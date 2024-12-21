'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { url } from 'inspector'
import { tree } from 'next/dist/build/templates/app-page'
import Image from 'next/image'
import Link from 'next/link'
import { useSearchParams, useRouter } from 'next/navigation'
import detectBackButton from 'detect-browser-back-navigation'

import { useEffect, useRef, useState } from 'react'

type Props = {
  urlOfImage: string
}

const ImageDialog = ({ urlOfImage }: Props) => {
  const { Base64 } = require('js-base64')
  const [isOpen, setIsOpen] = useState(false)
  const [canChange, setCanChange] = useState(true)
  const [imageUrl, setImageUrl] = useState(urlOfImage)

  useEffect(() => {
    if (isOpen) {
      detectBackButton(() => {
        setIsOpen(false)
        setCanChange(true)
      })

      const keyDownFun = (e: KeyboardEvent) => {
        if (e.key === 'Escape' || e.code === 'Space') {
          setIsOpen(false)
          setCanChange(true)
        }
      }
      const isScrolling = (e: KeyboardEvent) => {
        setIsOpen(false)
        setCanChange(true)
      }

      window.addEventListener('keydown', keyDownFun)
      window.addEventListener('wheel', isScrolling)

      return () => {
        window.removeEventListener('wheel', keyDownFun)
        window.removeEventListener('keydown', isScrolling)
      }
    }
  }, [isOpen])
  return (
    <motion.div
      className={`relative flex h-fit w-96 max-h-[600px] items-center justify-center overflow-hidden ${!isOpen ? `hover:cursor-pointer` : ''}`}
    >
      <Image
        src={imageUrl}
        alt="offer"
        width={0}
        height={0}
        quality={0}
        priority={false}
        className="h-full w-full opacity-0"
        placeholder="blur"
        blurDataURL={Base64.encode(imageUrl)}
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
          className={`absolute left-0 top-0 flex items-center justify-center  ${
            isOpen ? 'p-1 backdrop-blur-sm sm:p-3 hover:cursor-pointer' : 'p-0'
          }`}
        >
          <div
            className={`relative flex h-full w-fit max-w-7xl flex-col items-center overflow-y-auto rounded-xl bg-background ${
              isOpen ? 'hover:cursor-default' : 'pb-3'
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
              placeholder="blur"
              blurDataURL={Base64.encode(imageUrl)}
            />{' '}
          </div>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  )
}

export default ImageDialog
