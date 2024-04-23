//@ts-nocheck
import { unstable_noStore as noStore } from 'next/cache'

import configPromise from '@payload-config'
import { getPayload } from 'payload'

type Props = {}

const GetOffer = async (props: Props) => {
  noStore()
  const payload = await getPayload({ config: configPromise })
  const getOffer = await payload.find({
    collection: 'offer',
  })
  return (
    <section>
      <h1>
        {getOffer.docs.map((offer) => {
          return (
            <div key={offer.id}>
              <h1>{offer.title}</h1>
            </div>
          )
        }) || ''}
      </h1>
    </section>
  )
}
export default GetOffer
