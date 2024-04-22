import axios from 'axios'
import Image from 'next/image'

import { getPayloadHMR } from '@payloadcms/next/utilities'
import config from '@payload-config'
import { getPayload } from 'payload'

type Props = {}

const fetchOffer = async () => {}

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
              <img src="/api/media/file/89dcd9ed59d16f7c77f001daa35c38e30b16c8dc.png" alt="asd" />
            </div>
          )
        })}
      </h1>
    </div>
  )
}
export default GetOffer
