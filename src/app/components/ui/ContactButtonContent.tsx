import { unstable_noStore as noStore } from 'next/cache'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import configPromise from '@payload-config'
import BlockParser from '../BlockParser'
import GlobalNotFounded from '../GlobalNotFounded'

type Props = {}

const ContactButtonContent = async (props: Props) => {
  noStore()
  const payload = await getPayloadHMR({ config: configPromise })
  const data: any = await payload.findGlobal({
    slug: 'contact',
  })
  if (!data.Content || data.Content.length === 0) {
    return <GlobalNotFounded />
  }

  return (
    <>
      {data.docs[0].Content.map((block: any) => (
        <BlockParser block={block} />
      ))}
    </>
  )
}

export default ContactButtonContent
