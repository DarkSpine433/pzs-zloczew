import Link from 'next/link'
import React from 'react'

type Props = {}

const Footer = (props: Props) => {
  return (
    <>
      <div className="flex gap-10 justify-center items-center py-10 z-40">
        <div>Socials</div>
        <div>Kontakt</div>
      </div>
      <hr className=" border-none w-full max-w-screen-2xl h-[1px] bg-gradient-to-r from-transparent via-secondary/50 to-transparent p-0" />
      <div className="text-center py-5">
        Wykonana z ❤️ Przez{' '}
        <Link href="https://ds-craft.vercel.app/" className="underline" target="_blank">
          DS-Craft
        </Link>
      </div>
    </>
  )
}

export default Footer
