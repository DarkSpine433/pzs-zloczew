import dynamic from 'next/dynamic'
import Image from 'next/image'

//Other Ui Components Import
import { Button } from '@/components/ui/button'
import Link from 'next/link'

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
import Socials from './Socials'

const FetchNavContent = dynamic(() => import('./FetchNavContent'), { ssr: false })

type Props = {}

const ShowMenu = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="p-5 px-7">Menu</Button>
      </SheetTrigger>
      <SheetContent side="left" className="overflow-y-auto">
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
          <SheetDescription>Tu znajdziesz czego szukasz.</SheetDescription>
        </SheetHeader>

        <FetchNavContent />

        <SheetFooter>
          <div className="text-center py-5">
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
    <div className="w-full flex gap-5 justify-around items-center py-0.5">
      <Link href="/">
        <Image src="/logo.png" alt="logo" width={70} height={70} />
      </Link>

      <div className=" flex gap-3 ">
        <Link href="https://uonetplus.vulcan.net.pl/powiatsieradzki/" target="_blanks">
          <Button className="p-5 px-7 text-white" variant={'outline'}>
            Dziennik
          </Button>
        </Link>
        <ShowMenu />
      </div>
    </div>
  )
}

export default Nav
