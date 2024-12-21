import { getPayloadHMR } from '@payloadcms/next/utilities'
import configPromise from '@/payload.config'
import PayLoadErrorHandling from '@/app/components/PayLoadErrorHandling'
import BlockParser from '@/app/components/blockParser/BlockParser'
import TemplateNews from '@/app/components/news/TemplateNews'
type Props = {}

const FetchContent = async (props: Props) => {
  const payload = await getPayloadHMR({ config: configPromise })
  const data: any = await payload.find({
    collection: 'projects',
  })
  return (
    <PayLoadErrorHandling data={data.docs} showText>
      <div className="mx-auto grid h-fit w-full max-w-7xl grid-cols-1 justify-center gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {data.docs.map((doc, index) => (
          <TemplateNews key={doc.id + index} doc={doc} index={index} collection="projects" />
        ))}
      </div>
    </PayLoadErrorHandling>
  )
}

export default FetchContent
