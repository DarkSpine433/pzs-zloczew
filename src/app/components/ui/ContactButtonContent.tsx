import { unstable_noStore as noStore } from 'next/cache'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import configPromise from '@payload-config'
import BlockParser from '../BlockParser'

type Props = {}

const ContactButtonContent = async (props: Props) => {
  noStore()
  const payload = await getPayloadHMR({ config: configPromise })
  const data: any = await payload.find({
    collection: 'contact',
    limit: 5,
  })
  return (
    <>
      {data.docs[0].Content.map((block: any) => (
        <BlockParser block={block} />
      ))}
    </>
  )
}

export default ContactButtonContent
