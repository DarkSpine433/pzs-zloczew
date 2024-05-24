import Link from 'next/link'
import Image from 'next/image'
import { StaticNavLinks } from './StaticNavLinks'

type Props = {}

const Footer = (props: Props) => {
  return (
    <>
      <div className="w-full flex     py-10 z-40">
        <div className="">
          <Image src="/logo.png" alt="logo" width={150} height={150} />
        </div>
        <div className="flex justify-around w-full">
          <div>
            <h2>Szybka Nawigacja</h2>
            <div className=" flex flex-col pl-1">
              {StaticNavLinks.map((nav) => {
                return (
                  <Link
                    href={nav.url.toLowerCase()}
                    className="py-2 first-letter:uppercase lowercase first-letter:text-primary text-gray-500 transition-all hover:translate-x-1 w-fit h-fit"
                  >
                    {nav.title}
                  </Link>
                )
              })}
            </div>
          </div>
          <div>Socials</div>
          <div>Kontakt</div>{' '}
        </div>
      </div>
      <hr className=" border-none w-full max-w-screen-2xl h-[1px] bg-gradient-to-r from-transparent via-secondary/50 to-transparent p-0" />
      <div className="text-center py-5">
        Wykonana z ❤️ Przez{' '}
        <Link href="https://bit.ly/ds-craft" className="underline" target="_blank">
          DS-Craft
        </Link>
      </div>
    </>
  )
}

export default Footer
