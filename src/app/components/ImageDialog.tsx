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

      return () => {
        window.removeEventListener('keydown', keyDownHandler)
      }
    }
  }, [isDialogOpen])

  useEffect(() => {
    const getSizeOfImage = () => {
      if (imageRef.current) {
        return setSizeOfImage({
          width: imageRef.current.width,
          height: imageRef.current.height,
        })
      }
    }
    getSizeOfImage()
    window.addEventListener('resize', () => getSizeOfImage())

    return () => {
      window.removeEventListener('resize', () => getSizeOfImage())
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
      className={`relative flex w-fit md:max-w-[22rem] max-w-full lg:max-w-md xl:max-w-lg items-center justify-center hover:cursor-pointer h-full max-h-[700px] transition-none ${isDialogOpen ? 'overflow-visible ' : 'overflow-hidden transition-none'}`}
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
          className={`flex items-center justify-center transition-all duration-300 ${
            isDialogOpen
              ? 'fixed inset-0 z-50 h-dvh w-screen bg-background/80 backdrop-blur-sm p-4'
              : 'relative w-full max-w-md mx-auto'
          }`}
        >
          {' '}
          {isDialogOpen && (
            <>
              <style>{`
                  body {
                    overflow: hidden !important;
                  }
                `}</style>
              <motion.button
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute top-7 right-7 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-background/80 border border-primary shadow-lg hover:bg-background transition-colors md:top-8 md:right-8"
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
                  strokeWidth={2}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </motion.button>
            </>
          )}
          <div
            className={`relative flex flex-col items-center rounded-xl bg-background/50 ${
              isDialogOpen ? 'w-full h-full flex items-center overflow-auto justify-center' : ''
            }`}
          >
            <Image
              onMouseEnter={() => isDialogOpen && setCanChangeDialogState(false)}
              onMouseLeave={() => isDialogOpen && setCanChangeDialogState(true)}
              src={imageUrl}
              ref={imageRef}
              alt="offer"
              width={1000}
              height={1000}
              quality={100}
              className={`rounded-xl  ${
                isDialogOpen
                  ? 'max-h-[95vh]  mx-auto  w-fit  min-w-max h-dvh  cursor-default  '
                  : ''
              }`}
            />
          </div>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  )
}

export default ImageDialog
