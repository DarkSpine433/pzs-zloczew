//@ts-nocheck
import React from 'react'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import configPromise from '@payload-config'
import BlockParser from '@/app/components/BlockParser'
import './style.css'
type Props = {}

const page = async () => {
  const payload = await getPayloadHMR({ config: configPromise })
  const data = await payload.find({
    collection: 'pages',
  })

  const dataDisplay = data.docs.map((doc) =>
    doc?.Content.map((block) => {
      return (
        <>
          <BlockParser block={block} />
        </>
      )
    }),
  )

  return (
    <div>
      <div>{dataDisplay}</div>
    </div>
  )
}

export default page
