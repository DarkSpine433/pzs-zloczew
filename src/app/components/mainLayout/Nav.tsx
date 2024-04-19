import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

//menu imports
import {
  Sheet,
  SheetClose,
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

type Props = {}

const ShowMenu = () => {
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
        <div className="py-5">
          <menu>
            <Link href="/">
              <li>asdf</li>
            </Link>
            <li>asdf</li>
          </menu>
        </div>

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
          >
            <Button className="py-5">
              <FaFacebook />
            </Button>
          </Link>
          <Link href="https://www.youtube.com/channel/UCUub2QdjjKFoww2u2ZeVpKA" target="_blanks">
            <Button className="py-5 bg-red-600">
              <FaYoutube />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Nav
