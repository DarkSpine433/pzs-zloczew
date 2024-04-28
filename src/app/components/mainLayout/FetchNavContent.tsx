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
            <li className="w-full " key={item.page.id}>
              <Link href={'/p/' + item.page.id}>{item.page.title}</Link>
            </li>
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
