//disable cache
import { unstable_noStore as noStore } from 'next/cache'

//Other Ui Components Import
import Link from 'next/link'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

//Payload imports
import { getPayloadHMR } from '@payloadcms/next/utilities'
import configPromise from '@payload-config'
import { Button } from '@/components/ui/button'
import { SheetClose } from '@/components/ui/sheet'

const FetchNavContent = async () => {
  noStore()
  const payload = await getPayloadHMR({ config: configPromise })
  const data: any = await payload.find({
    collection: 'nav',
    depth: 3,
    sort: '-id',
  })
  const latest = 2018
  const newest = 2020
  return (
    <div className="py-5">
      <menu className="flex flex-col gap-3">
        {newest - latest !== 0 ? (
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-lg font-semibold">Aktualności</AccordionTrigger>
              <AccordionContent>
                <div className=" flex flex-col gap-5">
                  <Link href={'/news'}>
                    <SheetClose className="w-full font-semibold border-y rounded-lg px-3 py-3 bg-secondary/60 hover:bg-secondary hover:px-3.5 hover:border-primary/50 transition-all shadow-sm shadow-primary/50 text-left ">
                      <li>Najnowsze</li>
                    </SheetClose>
                  </Link>

                  <div className="flex flex-col gap-2">
                    <div className="text-[1rem] font-semibold">Archiwum</div>
                    <div>
                      <ul className="flex flex-col gap-3 pl-3 ">
                        {[...Array(newest - latest)].map((_, i) => (
                          <Link key={i} href={`/news/${latest + i}-${latest + i + 1}`} className="">
                            <SheetClose className="w-full border-y rounded-lg px-3 py-3 bg-secondary/60 hover:bg-secondary hover:px-3.5 hover:border-primary/50 transition-all shadow-sm shadow-primary/50 text-left ">
                              <li>
                                {latest + i}-{latest + i + 1}
                              </li>
                            </SheetClose>
                          </Link>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ) : (
          <Link href={'/news'}>
            <SheetClose className="w-full border-y rounded-lg px-3 py-3 bg-secondary/60 hover:bg-secondary hover:px-3.5 hover:border-primary/50 transition-all shadow-sm shadow-primary/50 text-left ">
              <li>Aktualności</li>
            </SheetClose>
          </Link>
        )}

        {data.docs[0].nav.map((item: any) => {
          return (
            <Link key={item.page.id} href={'/p/' + item.page.id} className="">
              <SheetClose className="w-full border-y rounded-lg px-3 py-3 bg-secondary/60 hover:bg-secondary hover:px-3.5 hover:border-primary/50 transition-all shadow-sm shadow-primary/50 text-left ">
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
