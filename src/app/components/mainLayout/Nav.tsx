import dynamic from 'next/dynamic'

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

//icons imports
import { FaYoutube } from 'react-icons/fa'
import { FaFacebook } from 'react-icons/fa'

const FetchNavContent = dynamic(() => import('./FetchNavContent'), { ssr: false })

type Props = {}

const ShowMenu = async () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="p-5 px-7">Menu</Button>
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
          <SheetDescription>Tu znajdziesz czego szukasz.</SheetDescription>
        </SheetHeader>
        <FetchNavContent />

        <SheetFooter>
          <div className="text-center py-5">
            Wykonana z ❤️ Przez{' '}
            <Link href="https://ds-craft.vercel.app/" className="underline" target="_blank">
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
    <div className="w-full flex justify-around items-center py-3.5">
      <ShowMenu />
      <div className=" flex gap-3 ">
        <Link href="https://uonetplus.vulcan.net.pl/powiatsieradzki/" target="_blanks">
          <Button className="p-5 px-7">Dziennik</Button>
        </Link>
        <div className="border-l pl-3 hidden md:flex gap-3 ">
          <Link
            href="https://www.facebook.com/people/PZS-Z%C5%82oczew/61551036213821/"
            target="_blanks"
            title="Facebook"
          >
            <Button className="py-5" title="Facebook">
              <FaFacebook />
            </Button>
          </Link>
          <Link
            href="https://www.youtube.com/channel/UCUub2QdjjKFoww2u2ZeVpKA"
            target="_blanks"
            title="YouTube"
          >
            <Button className="py-5 bg-red-600" title="YouTube">
              <FaYoutube />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Nav
