import Link from 'next/link'
import React from 'react'
import { StaticNavLinks } from './StaticNavLinks'
import Image from 'next/image'
type Props = {}

const Footer = (props: Props) => {
  return (
    <>
      <div className="w-full flex flex-row flex-wrap justify-center    gap-y-10 pt-10 z-40">
        <div className="grid justify-center grid-cols-2 md:grid-cols-4 gap-10 h-fit">
          <div className="flex flex-col px-3">
            <h2 className="">Szybka Nawigacja</h2>
            <div className=" flex flex-col  flex-wrap pl-1 ">
              {StaticNavLinks.map((nav, index) => {
                return (
                  <Link
                    key={nav.title + nav.url + index}
                    href={nav.url.toLowerCase()}
                    className="py-5 pr-5 first-letter:uppercase lowercase first-letter:text-primary text-gray-500 transition-all hover:translate-x-1 w-fit h-fit hover:text-primary hover:first-letter:text-white"
                  >
                    {nav.title}
                  </Link>
                )
              })}
            </div>
          </div>
          <div className="flex flex-col px-3">
            <h2 className="">Social Media</h2>
            <div className=" flex flex-col flex-wrap ">
              <Link
                href={'#'}
                className="py-5 pr-5 first-letter:uppercase lowercase first-letter:text-primary text-gray-500 transition-all hover:translate-x-1 w-fit h-fit hover:text-primary hover:first-letter:text-white"
              >
                Youtube
              </Link>
              <Link
                href={'#'}
                className="py-5 pr-5 first-letter:uppercase lowercase first-letter:text-primary text-gray-500 transition-all hover:translate-x-1 w-fit h-fit hover:text-primary hover:first-letter:text-white"
              >
                FaceBook
              </Link>
            </div>
          </div>
          <div className="flex flex-col px-3">
            <h2 className="">Inne Strony</h2>
            <div className=" flex flex-col flex-wrap ">
              <Link
                href={'/sitemap.xml'}
                className="py-5 pr-5 first-letter:uppercase lowercase first-letter:text-primary text-gray-500 transition-all hover:translate-x-1 w-fit h-fit hover:text-primary hover:first-letter:text-white"
              >
                Dziennik
              </Link>
            </div>
            <div className=" flex flex-col flex-wrap ">
              <Link
                href={'https://zspzloczew.weebly.com/'}
                className="py-5 pr-5 first-letter:uppercase lowercase first-letter:text-primary text-gray-500 transition-all hover:translate-x-1 w-fit h-fit hover:text-primary hover:first-letter:text-white"
              >
                Stara Strona Szkoły
              </Link>
            </div>
          </div>
          <div className="flex flex-col px-3">
            <h2 className="">Dla Botów</h2>
            <div className=" flex flex-col flex-wrap ">
              <Link
                href={'/sitemap.xml'}
                className="py-5 pr-5 first-letter:uppercase lowercase first-letter:text-primary text-gray-500 transition-all hover:translate-x-1 w-fit h-fit hover:text-primary hover:first-letter:text-white"
              >
                Sitemap
              </Link>
            </div>
          </div>
        </div>

        <div className=" flex flex-col flex-wrap items-center text-sm mx-auto sm:mx-0 text-center w-fit">
          <div>
            <Image src="/logo.png" alt="logo" width={130} height={130} />
          </div>

          <div>
            {' '}
            &nbsp; Powiatowy Zespół Szkół w Złoczewie
            <br /> 2024 - {new Date().getFullYear()}
          </div>
        </div>
      </div>
      <hr className=" p-0  border-none w-full max-w-screen-2xl h-[1px] bg-gradient-to-r from-transparent via-secondary/50 to-transparent" />
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
