//disable cache
import { unstable_noStore as noStore } from 'next/cache'

//Other Ui Components Import
import Link from 'next/link'

//menu imports
import { SheetClose } from '@/components/ui/sheet'

//Payload imports
import { getPayloadHMR } from '@payloadcms/next/utilities'
import configPromise from '@payload-config'

const FetchNavContent = async () => {
  noStore()
  const payload = await getPayloadHMR({ config: configPromise })
  const data: any = await payload.findGlobal({
    slug: 'nav',
    depth: 4,
  })
  return (
    <div className="py-5">
      <menu>
        {data.nav.map((item: any) => {
          return (
            <Link href={'/' + item.id} key={item.id}>
              <li className="w-full ">{item.page.title}</li>
            </Link>
          )
        })}
        <Link href="/">
          <SheetClose>
            <li>asdf</li>
          </SheetClose>
        </Link>
        <li>asdf</li>
      </menu>
    </div>
  )
}

export default FetchNavContent
