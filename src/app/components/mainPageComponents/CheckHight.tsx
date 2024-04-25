'use client'

import { useLayoutEffect, useRef, useState } from 'react'
import { Dialog, DialogContent, DialogDescription, DialogTrigger } from '@/components/ui/dialog'

type Props = {
  children: React.ReactNode
}

const CheckHight = ({ children }: Props) => {
  const heighToCheck = 599
  const ref = useRef<HTMLDivElement>(null)
  const [height, setHeight] = useState(heighToCheck)

  useLayoutEffect(() => {
    if (typeof ref.current?.offsetHeight === 'number') {
      setHeight(ref.current?.offsetHeight)
    }
  }, [])
  return (
    <div
      className="bg-secondary-foreground shadow-md rounded-lg shadow-blue-200 border-2 border-blue-700 text-background  transition-all relative overflow-hidden max-h-[600px] h-fit w-full px-2 [&>h2]:text-9xl"
      ref={ref}
    >
      {height >= heighToCheck ? (
        <>
          <div className="absolute top-0 left-0 w-full h-full z-20 bg-gradient-to-t to-transparent from-secondary-foreground text-background flex items-end justify-center pb-20 pointer-events-none">
            Czytaj Więcej
          </div>

          <Dialog>
            <DialogTrigger>
              <div className={`w-full  md:p-10 py-5 h-max  `}>{children}</div>
            </DialogTrigger>
            <DialogContent className="max-w-[1000px] max-h-[850px] py-10 flex flex-col items-center">
              {children}
            </DialogContent>
          </Dialog>
        </>
      ) : (
        <div
          className={`bg-secondary-foreground shadow-md md:p-10 py-5 text-background w-full  transition-all   relative overflow-hidden max-h-[600px] h-fit`}
        >
          {children}
        </div>
      )}
    </div>
  )
}

export default CheckHight
