//@ts-nocheck
import type { Metadata, ResolvingMetadata } from 'next'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import configPromise from '@payload-config'
import BlockParser from '@/app/components/BlockParser'
import dynamic from 'next/dynamic'
const FetchContent = dynamic(() => import('./FetchContent'), { ssr: false })

type Props = {
  params: { id: string }
}

const page = ({ params }: { params: { id: string } }) => {
  return (
    <div className="max-w-[1440px]">
      <FetchContent id={params.id} />
    </div>
  )
}

export default page
