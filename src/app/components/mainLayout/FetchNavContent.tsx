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
  const data = await payload.findGlobal({
    slug: 'nav',
    depth: 4,
  })
  return (
    <div className="py-5">
      {data.nav.map((item) => {
        return (
          <Link href={'/' + item.id} key={item.id}>
            <div key={item.id} className="w-full h-20">
              {item.page.title} test
            </div>
          </Link>
        )
      })}
      <menu>
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
