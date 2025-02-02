import Link from 'next/link'
import React from 'react'

import Image from 'next/image'
import ClientNavLinks from './ClientNavLinks'
import { Button } from '@/components/ui/button'
type Props = {}

const Footer = (props: Props) => {
  return (
    <>
      <div className="z-40 flex w-full flex-row flex-wrap justify-center gap-y-10  pb-20">
        <hr className="h-[3px] w-full max-w-screen-2xl border-none bg-gradient-to-r from-transparent via-primary to-transparent p-0" />{' '}
        <div className="grid h-fit grid-cols-2 justify-center gap-10 md:grid-cols-4">
          <div className="flex flex-col px-3">
            <h2 className="">Szybka Nawigacja</h2>
            <div className="flex flex-col flex-wrap pl-1  [&>*]:py-3 [&>*]:h-fit [&>*]:w-fit [&>*]:pr-5 [&>*]:lowercase [&>*]:text-gray-500 [&>*]:transition-all [&>*]:first-letter:uppercase [&>*]:first-letter:text-primary  ">
              <ClientNavLinks className="group-hover:translate-x-1 group-hover:text-primary group-hover:first-letter:text-white group-hover:first-letter:uppercase  [&>*]:lowercase  " />
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
                target="_blank"
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
      </div>{' '}
      <Link
        href={`https://github.com/${process.env.NEXT_PUBLIC_NAME_OWNER_OF_PZS_ZLOCZEW_WEBSITE}/${process.env.NEXT_PUBLIC_REPO_NAME_OF_PZS_ZLOCZEW_WEBSITE}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Przejdź do GitHub"
        title="Przejdź do GitHub"
        prefetch={false}
        className="px-3 mx-auto flex w-fit flex-col flex-wrap items-center text-center text-sm "
      >
        <div className="py-2  text-center  text-sm bg-secondary w-fit mx-auto px-3 rounded-full mb-2 flex gap-2 items-center justify-center">
          <span className="underline text-foreground ">
            <strong>🚀Weź Udział W Rozwoju Naszej Strony!</strong>
          </span>
          <Button title="Przejdź do GitHub" aria-label="Przejdź do GitHub" size={'sm'}>
            Przejdź do GitHub
          </Button>
        </div>{' '}
      </Link>
      <hr className="h-[1px] w-full max-w-screen-2xl border-none bg-gradient-to-r from-transparent via-secondary/20 to-transparent p-0" />
      <div className="py-3 text-center   ">
        Wykonana z ❤️ Przez{' '}
        <Link href="https://bit.ly/ds-craft" className="underline" target="_blank">
          DS-Craft
        </Link>
      </div>
      <div className="py-2  text-center  opacity-50 text-sm">
        © {new Date().getFullYear()} Powiatowy Zespół Szkół w Złoczewie. Wszelkie prawa
        zastrzeżone.
      </div>
    </>
  )
}

export default Footer
