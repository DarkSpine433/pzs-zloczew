//@ts-nocheck
import { unstable_noStore as noStore } from 'next/cache'

import configPromise from '@payload-config'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import Image from 'next/image'
type Props = {}

const GetOffer = async (props: Props) => {
  noStore()
  const payload = await getPayloadHMR({ config: configPromise })
  const getOffer = await payload.find({
    collection: 'offer',
  })
  return (
    <div className="flex flex-wrap items-center justify-center gap-10">
      {getOffer.docs[0].Content.map((offer) => {
        return (
          <Image
            key={offer.id}
            src={offer.ImageUrl}
            alt="offer"
            width={500}
            height={500}
            key={offer.id}
            quality={100}
            className="border-8 border-blue-500 hover:scale-[1.02] transition-all shadow-md shadow-blue-500"
          />
        )
      })}
    </div>
  )
}
export default GetOffer
