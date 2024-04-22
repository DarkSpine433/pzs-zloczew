//@ts-nocheck
import React from 'react'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import configPromise from '@payload-config'
import parse from 'html-react-parser'
import './style.css'
type Props = {}

const page = async (props: Props) => {
  const payload = await getPayloadHMR({ config: configPromise })
  const data = await payload.find({
    collection: 'pages',
  })
  const parseDat = parse(data?.docs[0]?.nameOfYourRichTextField_html)
  return (
    <div>
      <div>{parseDat === 'undefined' && ' '}</div>
    </div>
  )
}

export default page
