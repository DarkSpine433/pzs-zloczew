'use client'

import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import detectBackButton from 'detect-browser-back-navigation'
import { useEffect, useRef, useState } from 'react'

const ImageDialog = ({ imageUrl }: { imageUrl: string }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [canChangeDialogState, setCanChangeDialogState] = useState(true)
  const imageRef = useRef<HTMLImageElement>(null)
  const [sizeOfImage, setSizeOfImage] = useState({ width: 0, height: 0 })

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
        window.removeEventListener('wheel', isScrolling)
      }
    }
  }, [isDialogOpen])

  useEffect(() => {
    const fun = () => {
      if (imageRef.current) {
        return setSizeOfImage({
          width: imageRef.current.width,
          height: imageRef.current.height,
        })
      }
    }

    window.addEventListener('resize', () => fun())

    return () => {
      window.removeEventListener('resize', () => fun())
    }
  }, [])

  const handleDialogClick = () => {
    if (canChangeDialogState && isDialogOpen) {
      setIsDialogOpen(false)
      setCanChangeDialogState(true)
    } else if (canChangeDialogState) {
      setIsDialogOpen(true)
      setCanChangeDialogState(false)
    }
  }

  return (
    <motion.div
      className={`relative flex w-full md:max-w-[22rem] max-w-full lg:max-w-md xl:max-w-lg items-center justify-center hover:cursor-pointer transition-none ${isDialogOpen ? 'overflow-visible' : 'overflow-hidden transition-none'}`}
    >
      <div
        style={{
          width: sizeOfImage.width,
          height: sizeOfImage.height,
        }}
        className={` pointer-events-none ${isDialogOpen ? '' : 'hidden'} top-0 left-0 flex items-center justify-center`}
      ></div>
      <AnimatePresence>
        <motion.div
          onClick={handleDialogClick}
          layout
          style={{
            height: isDialogOpen ? '100vh' : 'auto',
            width: '100%',
            position: isDialogOpen ? 'fixed' : 'relative',
            top: isDialogOpen ? '0' : 'auto',
            left: isDialogOpen ? '0' : 'auto',
            zIndex: isDialogOpen ? 999 : 'auto',

            background: isDialogOpen
              ? 'radial-gradient(circle, rgba(8,6,34,1) 5%, rgba(8,6,34,0) 80%)'
              : 'transparent',
          }}
          className={`flex items-center justify-center  ${
            isDialogOpen ? 'p-1 backdrop-blur-sm sm:p-3 hover:cursor-pointer ' : 'pb-2 px-1 '
          }`}
        >
          <div
            className={`relative flex h-fit w-fit  flex-col items-center rounded-xl bg-background ${
              isDialogOpen ? 'hover:cursor-default' : ''
            }`}
            onMouseEnter={() => isDialogOpen && setCanChangeDialogState(false)}
            onMouseLeave={() => isDialogOpen && setCanChangeDialogState(true)}
          >
            {isDialogOpen && (
              <>
                <style>{`
                  body {
                    overflow: hidden !important;
                  }
                `}</style>
                <motion.button
                  whileHover={{ scale: 0.9 }}
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
                  className="absolute right-3 top-3 z-50 flex size-14 items-center justify-center border border-primary bg-background"
                  onClick={(e) => {
                    e.stopPropagation()
                    setIsDialogOpen(false)
                    setCanChangeDialogState(true)
                  }}
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
              className={`rounded-xl object-contain   ${
                isDialogOpen ? 'max-h-[95vh] w-full ' : 'h-auto w-full shadow-md shadow-primary'
              }`}
            />
          </div>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  )
}

export default ImageDialog
