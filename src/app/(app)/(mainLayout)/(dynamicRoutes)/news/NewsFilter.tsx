'use client'

import { useState, useLayoutEffect } from 'react'
import { Button } from '@/components/ui/button'

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import NewFilterComponent from './NewFilterComponent'

type Props = {}

const NewsFilter = (props: Props) => {
  const [windowWidth, setWindowWidth] = useState<number>(1400)

  useLayoutEffect(() => {
    const asideLayoutListener = () => {
      setWindowWidth(window.innerWidth)
      console.log(windowWidth)
    }
    asideLayoutListener()
    window.addEventListener('resize', asideLayoutListener)

    return () => {
      window.removeEventListener('resize', asideLayoutListener)
    }
  }, [])

  return (
    <>
      {windowWidth >= 1024 ? (
        <aside
          className={`sticky top-20 left-0  h-4/5  z-10 justify-center  min-w-52 transition-all w-96 bg-secondary/20 p-10 rounded-md  flex flex-col border border-primary/20`}
        >
          <NewFilterComponent isSheet={false} />
        </aside>
      ) : (
        <Sheet>
          <SheetTrigger>
            {' '}
            <Button
              variant={'secondary'}
              className=" p-4 py-6 rounded-full fixed bottom-5 left-5 z-10 "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z"
                />
              </svg>
            </Button>
          </SheetTrigger>
          <SheetContent
            className={`overflow-y-auto  max-h-[100dvh] ${
              windowWidth > 640 ? 'h-fit flex items-end w-96' : 'w-full h-fit'
            }`}
            side={'bottom'}
          >
            <NewFilterComponent isSheet />
          </SheetContent>
        </Sheet>
      )}
    </>
  )
}

export default NewsFilter
