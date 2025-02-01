//@ts-nocheck
import { unstable_noStore as noStore } from 'next/cache'

import configPromise from '@payload-config'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import Image from 'next/image'
import PayLoadErrorHandling from '@/app/components/PayLoadErrorHandling'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import ImageDialog from '@/app/components/ImageDialog'

type Props = {}

const GetOffer = async (props: Props) => {
  const payload = await getPayloadHMR({ config: configPromise })
  const getOffer = await payload.findGlobal({
    slug: 'offer',
  })

  return (
    <PayLoadErrorHandling data={getOffer.Content} showText={true}>
      <div className="flex flex-wrap items-center justify-center gap-10 px-3 ">
        {getOffer.Content.map((offer, index) => {
          return <ImageDialog imageUrl={offer.ImageUrl} key={index} />
        })}
      </div>
    </PayLoadErrorHandling>
  )
}
export default GetOffer
