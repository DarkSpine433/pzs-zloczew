import dynamic from 'next/dynamic'

import type { Metadata, ResolvingMetadata } from 'next'

import { PayloadRedirects } from '@/components/PayloadRedirects'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { draftMode } from 'next/headers'
import React, { cache } from 'react'
import { homeStatic } from '@/endpoints/seed/home-static'

import type { Page as PageType } from '@/payload-types'

import { RenderBlocks } from '@/blocks/RenderBlocks'
import { RenderHero } from '@/heros/RenderHero'
import { generateMeta } from '@/utilities/generateMeta'

const FetchContent = dynamic(() => import('./FetchContent'))

// type Params = Promise<{ id: string }>
// const page = async (props: { params: Params }) => {
//   const params = await props.params

//   return (
//     <>
//       <div className="flex flex-col min-h-full">
//         <FetchContent id={params.id} />
//       </div>
//     </>
//   )
// }
type Args = {
  params: Promise<{
    slug?: string[]
  }>
}

export default async function Page({ params: paramsPromise }: Args) {
  let { slug = [] } = await paramsPromise

  const url = '/' + slug?.join('/')

  let page = await queryPageBySlug({
    slug: slug[1],
    id: slug[0],
  })

  if (!page) {
    return <PayloadRedirects url={url} />
  }

  const { id } = page

  return (
    <article>
      <div className="flex flex-col min-h-full">
        <FetchContent id={id} />
      </div>
    </article>
  )
}
const queryPageBySlug = cache(async ({ slug, id }: { slug: string; id?: string | number }) => {
  const { isEnabled: draft } = await draftMode()

  const payload = await getPayload({ config: configPromise })

  const result = await payload.find({
    collection: 'news',
    draft,
    limit: 1,
    overrideAccess: draft,
    where: {
      and: [
        {
          slug: {
            equals: slug,
          },
        },
        {
          id: {
            equals: id?.toString(),
          },
        },
      ],
    },
  })

  return result.docs?.[0] || null
})

export async function generateMetadata(
  { params: paramsPromise }: Args,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  let { slug = [] } = await paramsPromise
  const url = '/' + slug?.join('/')
  let page = await queryPageBySlug({
    slug: slug[1],
    id: slug[0],
  })
  return {
    title: page.meta?.title || 'Payload Website Template news',
    description: page.meta?.description,
    openGraph: {
      url: url,
      title: page.meta?.title || 'Payload Website Template news',
      description: page.meta?.description || 'News ',
    },
  }
}
