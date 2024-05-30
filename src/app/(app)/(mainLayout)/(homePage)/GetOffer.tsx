//@ts-nocheck
import { unstable_noStore as noStore } from 'next/cache'

import configPromise from '@payload-config'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import Image from 'next/image'
import GlobalNotFounded from '@/app/components/GlobalNotFounded'
type Props = {}

const GetOffer = async (props: Props) => {
  noStore()
  const payload = await getPayloadHMR({ config: configPromise })
  const getOffer = await payload.findGlobal({
    slug: 'offer',
  })
  if (!getOffer.Content || getOffer.Content.length === 0) {
    return <GlobalNotFounded />
  }
  return (
    <div className="flex flex-wrap items-center justify-center gap-10">
      {getOffer.Content.map((offer) => {
        return (
          <Image
            key={offer.id}
            src={offer.ImageUrl}
            alt="offer"
            width={450}
            height={450}
            key={offer.id}
            quality={100}
            className="outline-4 outline-blue-500 outline border-blue-500 hover:scale-[1.02] hover:outline-8 transition-all shadow-md shadow-blue-500"
          />
        )
      })}
    </div>
  )
}
export default GetOffer
