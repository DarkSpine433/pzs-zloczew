import dynamic from 'next/dynamic'
import Image from 'next/image'

//Other Ui Components Import

import Link from 'next/link'
import SearchNav from './SearchNav'
//menu imports
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'

const FetchNavContent = dynamic(() => import('./FetchNavContent'))
const ClientNavLinks = dynamic(() => import('./ClientNavLinks'))

type Props = {}

const ShowMenu = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-8 cursor-pointer stroke-background hover:stroke-primary"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
        </svg>
      </SheetTrigger>
      <SheetContent side="right" className="overflow-y-auto">
        <SheetHeader>
          <SheetTitle>
            {' '}
            <Link href="/" className="flex items-center">
              <Image src="/logo.png" alt="logo" width={150} height={150} className="size-16" />
              <h2 className="text-2xl  font-bold uppercase text-primary ">
                <strong>pzs ZŁoczew </strong>
              </h2>
            </Link>
            <br />
            MENU
          </SheetTitle>
          <SheetDescription>Tu znajdziesz czego szukasz.</SheetDescription>
        </SheetHeader>

        <FetchNavContent />
        <SheetFooter>
          <div className="py-5 text-center">
            Wykonana z ❤️ Przez{' '}
            <Link href="https://bit.ly/ds-craft" className="underline" target="_blank">
              DS-Craft
            </Link>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}

const Nav = (props: Props) => {
  return (
    <div className="z-50 flex w-full items-center gap-2">
      <Link href="/" className="flex-1 items-center self-center justify-self-center sm:flex">
        <Image src="/logo.png" alt="logo" width={100} height={100} className="size-10 lg:size-12" />

        <h2 className="text-md  font-bold uppercase text-primary hidden sm:block xl:block lg:hidden ">
          <strong>pzs ZŁoczew</strong>
        </h2>
      </Link>
      <div className="hidden justify-end gap-5 font-semibold text-gray-500 transition-all lg:flex">
        <ClientNavLinks className="rounded-lg px-3 py-1.5 transition-all hover:bg-secondary hover:text-primary" />
      </div>

      <div className="flex flex-1 items-center justify-end gap-3">
        <SearchNav />

        <ShowMenu />
      </div>
    </div>
  )
}

export default Nav
