//@ts-nocheck
import React from 'react'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import parse from 'html-react-parser'
import './style.css'
type Props = {}

const page = async (props: Props) => {
  const payload = await getPayload({ config: configPromise })
  const data = await payload.find({
    collection: 'pages',
  })
  const parseDat = await parse(data.docs[0].nameOfYourRichTextField_html)
  return (
    <div>
      <div>{parseDat}</div>
    </div>
  )
}

export default page
