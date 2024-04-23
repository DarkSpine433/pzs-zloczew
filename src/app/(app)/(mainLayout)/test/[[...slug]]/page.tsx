//@ts-nocheck
import React from 'react'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import configPromise from '@payload-config'
import parse, { domToReact } from 'html-react-parser'
import Image from 'next/image'
import { unstable_cache } from 'next/cache'
import './style.css'
type Props = {}

const page = async ({ params }: { params: { slug: string } }) => {
  const payload = await getPayloadHMR({ config: configPromise })
  const data = await payload.find(
    {
      collection: 'pages',
    },
    { next: { revalidate: 5 } },
  )
  const parseDat = parse(data?.docs[0]?.nameOfYourRichTextField_html, {
    replace({ name, children, attribs }) {
      if (name === 'img') {
        return <Image {...attribs} height={100} width={100} alt={'asd'} />
      }
    },
  })
  return (
    <div>
      <div>
        {parseDat} {params.slug}
      </div>
    </div>
  )
}

export default page
