//@ts-nocheck
import React from 'react'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import configPromise from '@payload-config'
import parse, { domToReact } from 'html-react-parser'
import Image from 'next/image'
import { unstable_cache } from 'next/cache'
import './style.css'
type Props = {}
const getPages = unstable_cache(async () => {
  const payload = await getPayloadHMR({ config: configPromise })
  const data = await payload.find({
    collection: 'pages',
  })
  return data
}, 'pages')
const page = async (props: Props) => {
  const data = await getPages()
  const parseDat = parse(data?.docs[0]?.nameOfYourRichTextField_html, {
    replace({ name, children, attribs }) {
      if (name === 'img') {
        return <Image {...attribs} />
      }
    },
  })
  return (
    <div>
      <div>{parseDat}</div>
    </div>
  )
}

export default page
