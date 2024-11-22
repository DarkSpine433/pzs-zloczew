import { getPayloadHMR } from '@payloadcms/next/utilities'
import configPromise from '@/payload.config'
import PayLoadErrorHandling from '@/app/components/PayLoadErrorHandling'

import dynamic from 'next/dynamic'

const BlockParser = dynamic(() => import('@/app/components/blockParser/BlockParser'), {})
type Props = {}

const FetchContent = async (props: Props) => {
  const payload = await getPayloadHMR({ config: configPromise })
  const data: any = await payload.findGlobal({
    slug: 'contact',
  })
  console.log(data.Content)
  return (
    <PayLoadErrorHandling data={data.Content[0]} showText>
      {data.Content.map((block: any) => (
        <>{typeof block != undefined && <BlockParser block={block} />}</>
      ))}
    </PayLoadErrorHandling>
  )
}

export default FetchContent
