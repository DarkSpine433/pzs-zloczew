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
  const [isZoomed, setIsZoomed] = useState(false)
  const scale = useRef(1)
  const zoomButtonRef = useRef<HTMLButtonElement>(null)
  const unZoomBottonRef = useRef<HTMLButtonElement>(null)

  const setInitialVlauesOfSatates = () => {
    setIsDialogOpen(false)
    setCanChangeDialogState(true)
    scale.current = 1
    if (imageRef.current) {
      imageRef.current.style.scale = '1'
      imageRef.current.style.transformOrigin = 'initial'
      imageRef.current.style.justifyContent = 'center'
      imageRef.current.style.alignItems = 'center'
    }
  }

  useEffect(() => {
    if (isDialogOpen) {
      detectBackButton(() => {
        setInitialVlauesOfSatates()
      })

      const keyDownHandler = (e: KeyboardEvent) => {
        if (e.key === 'Escape' || e.code === 'Space') {
          setInitialVlauesOfSatates()
        }
      }

      const isScrolling = (e: KeyboardEvent) => {
        setInitialVlauesOfSatates()
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
      setInitialVlauesOfSatates()
    } else if (canChangeDialogState) {
      setIsDialogOpen(true)
      setCanChangeDialogState(false)
    }
  }

  const scaleMultiplier = 0.1
  const initialScale = 1
  const maxIncrease = 1.3
  const maxDecrease = 0.7
  const fixPositionWhenZoomingOnLeftTopIfScaleNotOne = () => {
    if (!imageRef.current) return

    if (scale.current <= 1 || isDialogOpen == false) {
      imageRef.current.style.transformOrigin = ' center'
      imageRef.current.style.justifyContent = 'center'
      imageRef.current.style.alignItems = 'center'
    } else if (scale.current > 1 && isDialogOpen) {
      {
        imageRef.current.style.transformOrigin = 'left top'
        imageRef.current.style.justifyContent = 'left'
        imageRef.current.style.alignItems = ' top'
      }
    }
    console.log(imageRef.current.style.transformOrigin, scale)
  }

  const handleZoom = () => {
    if (isDialogOpen && imageRef.current && scale.current <= maxIncrease) {
      console.log(scale)
      imageRef.current.style.scale = `${scale.current + scaleMultiplier}`
      scale.current = Number((scale.current + scaleMultiplier).toFixed(1))
      if (scale.current <= maxDecrease && unZoomBottonRef.current) {
        unZoomBottonRef.current.style.opacity = '20%'
      } else if (unZoomBottonRef.current) {
        unZoomBottonRef.current.style.opacity = '100%'
      }
      if (scale.current >= maxIncrease && zoomButtonRef.current) {
        zoomButtonRef.current.style.opacity = '20%'
      } else if (zoomButtonRef.current) {
        zoomButtonRef.current.style.opacity = '100%'
      }

      fixPositionWhenZoomingOnLeftTopIfScaleNotOne()
    }
  }
  const handleZoomUnzoom = () => {
    if (isDialogOpen && imageRef.current && scale.current > maxDecrease) {
      imageRef.current.style.scale = `${scale.current - scaleMultiplier}`

      scale.current = Number((scale.current - scaleMultiplier).toFixed(1))
      if (scale.current <= maxDecrease && unZoomBottonRef.current) {
        unZoomBottonRef.current.style.opacity = '20%'
      } else if (unZoomBottonRef.current) {
        unZoomBottonRef.current.style.opacity = '100%'
      }

      if (scale.current >= maxIncrease && zoomButtonRef.current) {
        zoomButtonRef.current.style.opacity = '20%'
      } else if (zoomButtonRef.current) {
        zoomButtonRef.current.style.opacity = '100%'
      }
      fixPositionWhenZoomingOnLeftTopIfScaleNotOne()
    }
  }
  return (
    <motion.div
      transition={{ duration: 0 }}
      className={`relative flex w-fit md:max-w-[22rem] max-w-full lg:max-w-md xl:max-w-lg items-center justify-center hover:cursor-pointer  h-full max-h-[700px] transition-none ${isDialogOpen ? 'overflow-visible ' : 'overflow-hidden transition-none'}`}
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
          transition={{ duration: 0 }}
        >
          {' '}
          {isDialogOpen && (
            <>
              {' '}
              {/*Zooming Buttons*/}
              <div className=" h-fit fixed top-7  left-1/2 -translate-x-1/2 flex flex-row gap-2 z-50 ">
                <motion.button
                  onMouseEnter={() => isDialogOpen && setCanChangeDialogState(false)}
                  onMouseLeave={() => isDialogOpen && setCanChangeDialogState(true)}
                  onClick={handleZoom}
                  ref={zoomButtonRef}
                  initial={{ scale: 0, borderRadius: '0%' }}
                  animate={{
                    scale: 1,
                    borderRadius: '50%',
                  }}
                  whileHover={{ scale: 1.1, borderRadius: '40%' }}
                  whileTap={{
                    scale: 1,
                    borderRadius: '50%',
                    rotate: 10,
                  }}
                  whileFocus={{ scale: 1.1, borderRadius: '100%' }}
                  transition={{ duration: 0.2 }}
                  title="Zbliżenie"
                  aria-label="Zbliżenie"
                  className="bg-background/70 backdrop-blur-sm border border-primary shadow-primary shadow-sm hover:bg-background p-3  "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607ZM10.5 7.5v6m3-3h-6"
                    />
                  </svg>
                </motion.button>{' '}
                {/*Zooming Button End*/}
                {/*UnZooming Buttons*/}
                <motion.button
                  onMouseEnter={() => isDialogOpen && setCanChangeDialogState(false)}
                  onMouseLeave={() => isDialogOpen && setCanChangeDialogState(true)}
                  onClick={handleZoomUnzoom}
                  ref={unZoomBottonRef}
                  initial={{ scale: 0, borderRadius: '0%' }}
                  animate={{
                    scale: 1,
                    borderRadius: '50%',
                  }}
                  whileHover={{ scale: 1.1, borderRadius: '40%' }}
                  whileTap={{
                    scale: 1,
                    borderRadius: '50%',
                    rotate: 10,
                  }}
                  whileFocus={{ scale: 1.1, borderRadius: '100%' }}
                  transition={{ duration: 0.2 }}
                  title="Zbliżenie"
                  aria-label="Zbliżenie"
                  className="  bg-background/70 backdrop-blur-sm border border-primary shadow-primary shadow-sm hover:bg-background p-3  "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607ZM13.5 10.5h-6"
                    />
                  </svg>
                </motion.button>
              </div>
              {/*UnZooming Buttons End*/}
              <style>{`
                  body {
                    overflow: hidden !important;
                  }
                `}</style>
              <motion.button
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute top-7 right-7 z-50 flex size-12 items-center justify-center rounded-full bg-background/80 border border-primary shadow-lg hover:bg-background transition-colors md:top-8 md:right-8"
                onClick={(e) => {
                  e.stopPropagation()
                  setInitialVlauesOfSatates()
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
            className={` mx-auto relative flex flex-col items-center rounded-xl bg-background/50 ${
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
                  ? `max-h-[95vh]  mx-auto   w-fit   min-w-max h-dvh  cursor-default min-h-[600px]  max-w-[1920px]`
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
