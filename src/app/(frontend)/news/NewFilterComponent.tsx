import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { SheetClose } from '@/components/ui/sheet'
import Link from 'next/link'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import configPromise from '@/payload.config'
import { FetchUrlObject } from '@/lib/FetchUrlObject'
import { redirect, RedirectType } from 'next/navigation'
import Form from 'next/form'
import dynamic from 'next/dynamic'
const NewFilterComponentclient = dynamic(() => import('./NewFilterComponent.client'))

type Props = {
  searchParams: { [key: string]: string | string[] | undefined }
}

const NewFilterComponent = async ({ searchParams }: Props) => {
  const payload = await getPayloadHMR({ config: configPromise })
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
