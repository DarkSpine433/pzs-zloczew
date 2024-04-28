import { unstable_noStore as noStore } from 'next/cache'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import configPromise from '@payload-config'

type Props = {}

const ContactButtonContent = async (props: Props) => {
  noStore()
  const payload = await getPayloadHMR({ config: configPromise })
  const data = await payload.find({
    collection: 'contact',
    limit: 5,
  })
  return <>{data.docs[0].Content}</>
}

export default ContactButtonContent
