//@ts-nocheck
import React from 'react'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import './style.css'
type Props = {}

const page = async (props: Props) => {
  const parse = require('html-react-parser').default
  const payload = await getPayload({ config: configPromise })

  const data = await payload.find({
    collection: 'pages',
  })
  return (
    <div>
      <div>
        {parse(typeof data.docs[0].nameOfYourRichTextField_html === 'undefined' && '') ===
          'undefined' && ''}
      </div>
    </div>
  )
}

export default page
