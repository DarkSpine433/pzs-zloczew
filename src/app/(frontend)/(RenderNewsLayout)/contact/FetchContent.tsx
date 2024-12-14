import { getPayload } from 'payload'
import configPromise from '@/payload.config'
import PayLoadErrorHandling from '@/app/components/PayLoadErrorHandling'

import dynamic from 'next/dynamic'

const BlockParser = dynamic(() => import('@/app/components/blockParser/BlockParser'), {})
type Props = {}

const FetchContent = async (props: Props) => {
  const payload = await getPayload({ config: configPromise })
  const data: any = await payload.findGlobal({
    slug: 'contact',
    depth: 2,
  })
  console.log(data.Content)
  return (
    <PayLoadErrorHandling data={data.Content[0]} showText>
      {data.Content.map((block: any, index) => (
        <>{typeof block != undefined && <BlockParser block={block} key={block.id + 'index'} />}</>
      ))}
    </PayLoadErrorHandling>
  )
}

export default FetchContent
