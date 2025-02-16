import { getPayload } from 'payload'
import configPromise from '@/payload.config'
import dynamic from 'next/dynamic'
const NewFilterComponentclient = dynamic(() => import('./NewFilterComponent.client'))

type Props = {
  searchParams: { [key: string]: string | string[] | undefined }
}

const NewFilterComponent = async ({ searchParams }: Props) => {
  const payload = await getPayload({ config: configPromise })
  const { docs } = await payload.find({
    collection: 'news',
    limit: 1,
    sort: '-createdYear',
  })
  const newDate = Number(docs[0].createdYear)

  const data = await payload.find({
    collection: 'news',
    limit: 1,
    sort: 'createdYear',
  })

  const lastData = Number(data.docs[0].createdYear)

  return (
    <NewFilterComponentclient lastData={lastData} newDate={newDate} searchParams={searchParams} />
  )
}

export default NewFilterComponent
