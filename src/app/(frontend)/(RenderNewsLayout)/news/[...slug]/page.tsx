import dynamic from 'next/dynamic'

import type { Metadata, ResolvingMetadata } from 'next'

import { PayloadRedirects } from '@/components/PayloadRedirects'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { draftMode } from 'next/headers'
import React, { cache } from 'react'

import type { Page as PageType } from '@/payload-types'

import { RenderBlocks } from '@/blocks/RenderBlocks'
import { RenderHero } from '@/heros/RenderHero'
import { generateMeta } from '@/utilities/generateMeta'

const FetchContent = dynamic(() => import('../../../../components/blockParser/FetchContent'))

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

  let data = await queryPageBySlug({
    slug: slug[1],
    id: slug[0],
  })

  if (!data) {
    return <PayloadRedirects url={url} />
  }

  return (
    <>
      <style>
        {`
          .show-news-u-are-in-${slug[0].toString()} {
            pointer-events: none;
            opacity: 0.7;
            filter: grayscale(100%);
            border: 1px solid black;
            postion:relative;
          } 
          .show-news-u-are-in-${slug[0].toString()}::after {   
            pointer-events: all;
            content: 'Aktualnie Przeglądasz';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            background: rgba(255, 255, 255, 0.2);
            border-radius: 16px;
            box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
            backdrop-filter: blur(2px);
            -webkit-backdrop-filter: blur(2px);
            font-weight: bold;
            text-align: center;
            text-transform: uppercase;
            font-size: 20px;
            color: black;
          }    
            remove-pointer-events-${slug[0].toString()}{
              pointer-events: none;
        
            }
        `}
      </style>
      <article>
        <div className="flex flex-col min-h-full">
          <FetchContent data={data} />
        </div>
      </article>{' '}
    </>
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
    title: page.meta?.title || 'PZS Złoczew',
    description: page.meta?.description,
    openGraph: {
      url: url,
      title: page.meta?.title || 'PZS Złoczew',
      description: page.meta?.description || 'News ',
    },
  }
}
