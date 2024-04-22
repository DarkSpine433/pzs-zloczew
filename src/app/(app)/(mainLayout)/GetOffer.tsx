//@ts-nocheck
import { getPayloadHMR } from '@payloadcms/next/utilities'
import config from '@payload-config'

type Props = {}

const GetOffer = async (props: Props) => {
  const payload = await getPayloadHMR({ config })
  const getOffer = await payload.find({
    collection: 'offer',
  })
  return (
    <div>
      <h1>
        {getOffer.docs.map((offer) => {
          return (
            <div key={offer.id}>
              <h1>{offer.title}</h1>
            </div>
          )
        }) || ''}
      </h1>
    </div>
  )
}
export default GetOffer
