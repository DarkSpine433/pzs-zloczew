//disable cache
import { unstable_noStore as noStore } from 'next/cache'

//Other Ui Components Import
import Link from 'next/link'

//Payload imports
import { getPayloadHMR } from '@payloadcms/next/utilities'
import configPromise from '@payload-config'
import { SheetClose } from '@/components/ui/sheet'
import Socials from './Socials'

const FetchNavContent = async () => {
  noStore()
  const payload = await getPayloadHMR({ config: configPromise })
  const data: any = await payload.findGlobal({
    slug: 'nav',
  })

  return (
    <div className="py-5">
      <menu className="flex flex-col gap-3">
        <Link href={'/'}>
          <SheetClose className="w-full border-b-4 border-primary rounded-lg px-3 py-3 bg-secondary/60 hover:bg-secondary hover:px-3.5 hover:border-primary transition-all shadow-sm shadow-primary text-left uppercase font-semibold  ">
            <li>Strona główna</li>
          </SheetClose>
        </Link>
        <Link href={'/news'}>
          <SheetClose className="w-full border-b-2 border-primary rounded-lg px-3 py-3 bg-secondary/60 hover:bg-secondary hover:px-3.5 hover:border-primary/50 transition-all shadow-sm shadow-primary/50 text-left lowercase first-letter:uppercase  font-semibold">
            <li>Aktualności</li>
          </SheetClose>
        </Link>
        <Link href={'/news'}>
          <SheetClose className="w-full border-b-2 border-primary rounded-lg px-3 py-3 bg-secondary/60 hover:bg-secondary hover:px-3.5 hover:border-primary/50 transition-all shadow-sm shadow-primary/50 text-left lowercase first-letter:uppercase  font-semibold">
            <li>Kontakt</li>
          </SheetClose>
        </Link>
        <li className=" flex gap-3">
          <Socials />
        </li>

        {data.nav.map((item: any) => {
          return (
            <Link key={item.page.id} href={'/p/' + item.page.id} className="">
              <SheetClose className="w-full border-b-2 border-primary rounded-lg px-3 py-3 bg-secondary/60 hover:bg-secondary hover:px-3.5 hover:border-primary/50 transition-all shadow-sm shadow-primary/50 text-left lowercase first-letter:uppercase  font-semibold">
                <li>{item.page.title}</li>
              </SheetClose>
            </Link>
          )
        })}
        <Link href="/">
          <li>asdf</li>
        </Link>
        <li>asdf</li>
      </menu>
    </div>
  )
}

export default FetchNavContent
