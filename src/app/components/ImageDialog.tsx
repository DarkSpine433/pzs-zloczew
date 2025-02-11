'use client'

import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import detectBackButton from 'detect-browser-back-navigation'
import { useEffect, useRef, useState, useCallback, useMemo, memo, useLayoutEffect } from 'react'
import { createPortal } from 'react-dom'

const ZOOM_CONFIG = {
  SCALE_INCREMENT: 0.1,
  MAX_SCALE: 1.3,
  MIN_SCALE: 0.7,
  INITIAL_SCALE: 1,
} as const

const calculateNewZoomState = (currentScale: number, increment: boolean) => {
  const newScale = Number(
    (
      currentScale + (increment ? ZOOM_CONFIG.SCALE_INCREMENT : -ZOOM_CONFIG.SCALE_INCREMENT)
    ).toFixed(1),
  )
  return {
    scale: newScale,
    isAtMin: newScale <= ZOOM_CONFIG.MIN_SCALE,
    isAtMax: newScale >= ZOOM_CONFIG.MAX_SCALE,
  }
}

const ZoomButton = memo(
  ({
    onClick,
    onMouseEnter,
    onMouseLeave,
    isZoomIn = true,
    buttonRef,
  }: {
    onClick: () => void
    onMouseEnter: () => void
    onMouseLeave: () => void
    isZoomIn?: boolean
    buttonRef: React.RefObject<HTMLButtonElement>
  }) => (
    <motion.button
      ref={buttonRef}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
      initial={{ scale: 0, borderRadius: '0%' }}
      animate={{ scale: 1, borderRadius: '50%' }}
      whileHover={{ scale: 1.1, borderRadius: '40%' }}
      whileTap={{ scale: 1, borderRadius: '50%', rotate: 10 }}
      whileFocus={{ scale: 1.1, borderRadius: '100%' }}
      transition={{ duration: 0.2 }}
      title={isZoomIn ? 'Zbliżenie' : 'Oddalenie'}
      aria-label={isZoomIn ? 'Zbliżenie' : 'Oddalenie'}
      className="bg-background/70 backdrop-blur-sm border border-primary shadow-primary shadow-sm hover:bg-background p-3"
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
          d={
            isZoomIn
              ? 'm21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607ZM10.5 7.5v6m3-3h-6'
              : 'm21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607ZM13.5 10.5h-6'
          }
        />
      </svg>
    </motion.button>
  ),
)

ZoomButton.displayName = 'ZoomButton'

const useImageDimensions = (imageRef: React.RefObject<HTMLImageElement>) => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  const updateDimensions = useCallback(() => {
    if (!imageRef.current) return

    const { width, height } = imageRef.current
    setDimensions((prev) => {
      if (prev.width === width && prev.height === height) return prev
      return { width, height }
    })
  }, [imageRef])

  useLayoutEffect(() => {
    const debouncedResize = (() => {
      let timeoutId: NodeJS.Timeout
      return () => {
        clearTimeout(timeoutId)
        timeoutId = setTimeout(updateDimensions, 100)
      }
    })()

    window.addEventListener('resize', debouncedResize)
    updateDimensions()

    return () => window.removeEventListener('resize', debouncedResize)
  }, [updateDimensions])

  return dimensions
}

const useZoom = (imageRef: React.RefObject<HTMLImageElement>, isDialogOpen: boolean) => {
  const [zoomState, setZoomState] = useState({
    scale: ZOOM_CONFIG.INITIAL_SCALE,
    isAtMin: true,
    isAtMax: false,
  })

  const updateImageStyles = useCallback(
    (scale: number) => {
      if (!imageRef.current) return

      const isCenter = scale <= 1 || !isDialogOpen
      const styles = {
        scale: String(scale),
        transformOrigin: isCenter ? 'center' : 'left top',
        justifyContent: isCenter ? 'center' : 'left',
        alignItems: isCenter ? 'center' : 'top',
      }

      Object.assign(imageRef.current.style, styles)
    },
    [isDialogOpen, imageRef],
  )

  const handleZoom = useCallback(
    (increment: boolean) => {
      if (!isDialogOpen || !imageRef.current) return

      setZoomState((prevState: any) => {
        if ((increment && prevState.isAtMax) || (!increment && prevState.isAtMin)) return prevState

        const newState = calculateNewZoomState(prevState.scale, increment)
        updateImageStyles(newState.scale)
        return newState
      })
    },
    [isDialogOpen, updateImageStyles, imageRef],
  )

  const resetZoom = useCallback(() => {
    setZoomState({
      scale: ZOOM_CONFIG.INITIAL_SCALE,
      isAtMin: true,
      isAtMax: false,
    })
    if (imageRef.current) {
      updateImageStyles(ZOOM_CONFIG.INITIAL_SCALE)
    }
  }, [updateImageStyles, imageRef])

  return { zoomState, handleZoom, resetZoom }
}

const ImageDialog = ({ imageUrl }: { imageUrl: string }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [isInteractive, setIsInteractive] = useState(true)
  const imageRef = useRef<HTMLImageElement>(null)
  const zoomInButtonRef = useRef<HTMLButtonElement | null>(null)
  const zoomOutButtonRef = useRef<HTMLButtonElement | null>(null)

  const dimensions = useImageDimensions(imageRef as React.RefObject<HTMLImageElement>)
  const { zoomState, handleZoom, resetZoom } = useZoom(
    imageRef as React.RefObject<HTMLImageElement>,
    isDialogOpen,
  )

  const closeDialog = useCallback(() => {
    setIsDialogOpen(false)
    setIsInteractive(true)
    resetZoom()
  }, [resetZoom])

  const handleDialogClick = useCallback(() => {
    if (isInteractive) {
      isDialogOpen ? closeDialog() : setIsDialogOpen(true)
    }
  }, [isInteractive, isDialogOpen, closeDialog])

  useEffect(() => {
    if (!isDialogOpen) return

    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'Escape' || e.code === 'Space') closeDialog()
    }

    detectBackButton(closeDialog)
    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [isDialogOpen, closeDialog])

  const handleMouseEnter = useCallback(() => {
    if (isDialogOpen) setIsInteractive(false)
  }, [isDialogOpen])

  const handleMouseLeave = useCallback(() => {
    if (isDialogOpen) setIsInteractive(true)
  }, [isDialogOpen])

  useEffect(() => {
    if (zoomInButtonRef.current) {
      zoomInButtonRef.current.style.opacity = zoomState.isAtMax ? '20%' : '100%'
    }
    if (zoomOutButtonRef.current) {
      zoomOutButtonRef.current.style.opacity = zoomState.isAtMin ? '20%' : '100%'
    }
  }, [zoomState.isAtMax, zoomState.isAtMin])

  const dialogContent = (
    <motion.div
      transition={{ duration: 0 }}
      className={`relative flex w-fit md:max-w-[22rem] max-w-full lg:max-w-md xl:max-w-lg items-center justify-center hover:cursor-pointer h-full max-h-[700px] transition-none ${
        isDialogOpen ? 'overflow-visible' : 'overflow-hidden transition-none'
      }`}
    >
      {isDialogOpen && (
        <div
          style={dimensions}
          className="pointer-events-none top-0 left-0 flex items-center justify-center"
        />
      )}
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
          {isDialogOpen && (
            <>
              <div className="h-fit fixed top-7 left-1/2 -translate-x-1/2 flex flex-row gap-2 z-50">
                <ZoomButton
                  buttonRef={zoomInButtonRef as React.RefObject<HTMLButtonElement>}
                  onClick={() => handleZoom(true)}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  isZoomIn={true}
                />
                <ZoomButton
                  buttonRef={zoomOutButtonRef as React.RefObject<HTMLButtonElement>}
                  onClick={() => handleZoom(false)}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  isZoomIn={false}
                />
              </div>
              <motion.button
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute top-7 right-7 z-50 flex size-12 items-center justify-center rounded-full bg-background/80 border border-primary shadow-lg hover:bg-background transition-colors md:top-8 md:right-8"
                onClick={(e) => {
                  e.stopPropagation()
                  closeDialog()
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
              <style>{`
                body {
                  overflow: hidden !important;
                }
              `}</style>
            </>
          )}
          <div
            className={`mx-auto relative flex flex-col items-center rounded-xl bg-background/50 ${
              isDialogOpen ? 'w-full h-full flex items-center overflow-auto justify-center' : ''
            }`}
          >
            <Image
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              src={imageUrl}
              ref={imageRef}
              alt="offer"
              width={1000}
              height={1000}
              quality={100}
              className={`rounded-xl ${
                isDialogOpen
                  ? `max-h-[95vh] mx-auto w-fit min-w-max h-dvh cursor-default min-h-[600px] max-w-[1920px]`
                  : ''
              }`}
            />
          </div>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  )

  return isDialogOpen ? createPortal(dialogContent, document.body) : dialogContent
}

export default memo(ImageDialog)
