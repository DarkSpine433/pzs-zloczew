import Link from 'next/link'
import React from 'react'

import Image from 'next/image'
import ClientNavLinks from './ClientNavLinks'
type Props = {}

const Footer = (props: Props) => {
  return (
    <>
      <div className="z-40 flex w-full flex-row flex-wrap justify-center gap-y-10 pt-10">
        <div className="grid h-fit grid-cols-2 justify-center gap-10 md:grid-cols-4">
          <div className="flex flex-col px-3">
            <h2 className="">Szybka Nawigacja</h2>
            <div className="flex flex-col flex-wrap pl-1  [&>*]:py-3 [&>*]:h-fit [&>*]:w-fit [&>*]:pr-5 [&>*]:lowercase [&>*]:text-gray-500 [&>*]:transition-all [&>*]:first-letter:uppercase [&>*]:first-letter:text-primary ">
              <ClientNavLinks className="hover:translate-x-1 hover:text-primary hover:first-letter:text-white" />
            </div>
          </div>
          <div className="flex flex-col px-3">
            <h2 className="">Social Media</h2>
            <div className="flex flex-col flex-wrap [&>*]:py-3 [&>*]:h-fit [&>*]:w-fit [&>*]:pr-5 [&>*]:lowercase [&>*]:text-gray-500 [&>*]:transition-all [&>*]:first-letter:uppercase [&>*]:first-letter:text-primary ">
              <Link
                href={'#'}
                className="hover:translate-x-1 hover:text-primary hover:first-letter:text-white"
              >
                Youtube
              </Link>
              <Link
                href={'#'}
                className="hover:translate-x-1 hover:text-primary hover:first-letter:text-white"
              >
                FaceBook
              </Link>
            </div>
          </div>
          <div className="flex flex-col px-3">
            <h2 className="">Inne Strony</h2>

            <div className="flex flex-col flex-wrap [&>*]:py-3 [&>*]:h-fit [&>*]:w-fit [&>*]:pr-5 [&>*]:lowercase [&>*]:text-gray-500 [&>*]:transition-all [&>*]:first-letter:uppercase [&>*]:first-letter:text-primary ">
              <Link
                href={'https://zspzloczew.weebly.com/'}
                className="hover:translate-x-1 hover:text-primary hover:first-letter:text-white"
              >
                Poprzednia
                <br /> Strona Szkoły
              </Link>
            </div>
          </div>
          <div className="flex flex-col px-3">
            <h2 className="">Dla Botów</h2>
            <div className="flex flex-col flex-wrap [&>*]:py-3 [&>*]:h-fit [&>*]:w-fit [&>*]:pr-5 [&>*]:lowercase [&>*]:text-gray-500 [&>*]:transition-all [&>*]:first-letter:uppercase [&>*]:first-letter:text-primary ">
              <Link
                href={'/sitemap.xml'}
                className="hover:translate-x-1 hover:text-primary hover:first-letter:text-white"
              >
                Sitemap
              </Link>
            </div>
          </div>
        </div>

        <div className="mx-auto flex w-fit flex-col flex-wrap items-center text-center text-sm sm:mx-0">
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
      <hr className="h-[1px] w-full max-w-screen-2xl border-none bg-gradient-to-r from-transparent via-secondary/50 to-transparent p-0" />
      <div className="py-5 text-center">
        Wykonana z ❤️ Przez{' '}
        <Link href="https://ds-craft.vercel.app/" className="underline" target="_blank">
          DS-Craft
        </Link>
      </div>
    </>
  )
}

export default Footer
