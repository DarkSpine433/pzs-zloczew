'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { url } from 'inspector'
import Image from 'next/image'
import Link from 'next/link'
import { useSearchParams, useRouter } from 'next/navigation'
import detectBackButton from 'detect-browser-back-navigation'
import { useEffect, useRef, useState } from 'react'

const ImageDialog = ({ imageUrl }: { imageUrl: string }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [canChangeDialogState, setCanChangeDialogState] = useState(true)
  const imageRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    if (isDialogOpen) {
      detectBackButton(() => {
        setIsDialogOpen(false)
        setCanChangeDialogState(true)
      })

      const keyDownHandler = (e: KeyboardEvent) => {
        if (e.key === 'Escape' || e.code === 'Space') {
          setIsDialogOpen(false)
          setCanChangeDialogState(true)
        }
      }

      const isScrolling = (e: KeyboardEvent) => {
        setIsDialogOpen(false)
        setCanChangeDialogState(true)
      }
      window.addEventListener('keydown', keyDownHandler)
      window.addEventListener('wheel', isScrolling)
      return () => {
        window.removeEventListener('keydown', keyDownHandler)
        window.addEventListener('wheel', isScrolling)
      }
    }
  }, [isDialogOpen])
  return (
    <motion.div
      className={`relative flex w-full max-w-96 items-center justify-center overflow-hidden ${!isDialogOpen ? `hover:cursor-pointer` : ''}`}
    >
      <div className={`h-[600px]`} />
      <AnimatePresence>
        <motion.div
          onClick={() => {
            if (canChangeDialogState && isDialogOpen) {
              setIsDialogOpen(!isDialogOpen)
              setCanChangeDialogState(true)
            } else if (canChangeDialogState) {
              setIsDialogOpen(!isDialogOpen)
              setCanChangeDialogState(false)
            }
          }}
          layout
          exit={{ opacity: 0, scale: 0 }}
          animate={{
            backgroundColor: isDialogOpen ? 'rgba(0, 0, 0, 0.5)' : 'rgba(0, 0, 0, 0)',

            transition: {
              delay: 0.4,
            },
          }}
          style={{
            height: isDialogOpen ? '100vh' : '100%',
            width: '100%',
            top: '0',
            left: '0',
            position: isDialogOpen ? 'fixed' : 'absolute',
            zIndex: isDialogOpen ? 999 : 'auto',
          }}
          className={`absolute left-0 top-0 flex items-center justify-center ${
            isDialogOpen ? 'p-1 backdrop-blur-sm sm:p-3 hover:cursor-pointer' : 'p-0'
          }`}
        >
          <div
            className={`relative flex h-fit w-fit max-w-7xl flex-col items-center overflow-y-auto rounded-xl bg-background ${
              isDialogOpen ? 'hover:cursor-default' : 'pb-3'
            }`}
            onMouseEnter={() => isDialogOpen && setCanChangeDialogState(false)}
            onMouseLeave={() => isDialogOpen && setCanChangeDialogState(true)}
          >
            {isDialogOpen && (
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
                  onClick={() => (setIsDialogOpen(false), setCanChangeDialogState(true))}
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
              ref={imageRef}
              alt="offer"
              width={1000}
              height={1000}
              quality={100}
              className="h-full w-fit rounded-xl object-contain shadow-md shadow-primary"
            />
          </div>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  )
}

export default ImageDialog
