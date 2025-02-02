import type { Metadata } from 'next'

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
import PageClient from './page.client'

export async function generateStaticParams() {
  const payload = await getPayload({ config: configPromise })
  const pages = await payload.find({
    collection: 'pages',
    draft: false,
    limit: 1000,
    overrideAccess: false,
  })

  const params = pages.docs
    ?.filter((doc) => {
      return doc.slug !== 'home'
    })
    .map(({ slug, id }) => {
      return { slug: [slug, id] }
    })

  return params
}

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

  const { hero, layout } = page

  return (
    <article className="">
      <PageClient />
      {/* Allows redirects for valid pages too */}
      <PayloadRedirects disableNotFound url={url} />

      <RenderHero {...hero} />
      <div className="  w-full  flex justify-center max-w-screen-2xl  mx-auto px-0 md:px-3 ">
        <style>{`
    *{
    scroll-margin-top: 5rem;
    }
   #sideSection a:before {
content: '➤' !important;
    text-decoration: none !important;
      }  
 #sideSection a{ color:  #2563EB  !important;
        text-transform: uppercase;
        text-decoration: none !important;
          width: 100%;
        font-size: 1rem;
          display: flex;

          font-size: 0.68rem;
      
          margin: 0;
        padding: 0;

}
        #sideSection *{
        padding: 0;
        margin: 0;
        }
      #sideSection a h3 {
      margin: 0;
        }
 #sideSection a:hover{
transform:translateX(1px);
opacity:0.7;

}
          `}</style>
        <aside className="sideSectionClass left-0 bg-white shadow-sm hidden sm:sticky rounded-md   top-16  h-fit max-h-[calc(100vh-10rem)] overflow-y-auto w-0 md:w-10 lg:w-24 xl:w-44 float-left opacity-0 "></aside>
        <style>{`
          #content a {
        color:  #2563EB  !important;
      }
          #content a:hover {
            color:  rgba(37, 99, 235, 0.7)  !important;
      }
          `}</style>
        <div
          id="content"
          className=" min-w-72 w-full  mx-auto border-x px-3 float-left pb-10 max-w-screen-xl"
        >
          <RenderBlocks blocks={layout} />
        </div>{' '}
        <aside className="sideSectionClass left-0 bg-white rounded-md  sticky top-16  h-fit max-h-[calc(100vh-10rem)] overflow-y-auto w-60 float-left p-3 hidden sm:block ">
          <h2 className="text-2xl font-extrabold m-0 ">Tematy:</h2>
          <div id="sideSection" className="pl-5 ">
            <RenderBlocks getH2Headings={true} blocks={layout} />
          </div>
        </aside>
      </div>
    </article>
  )
}

export async function generateMetadata({ params: paramsPromise }): Promise<Metadata> {
  const { slug } = await paramsPromise
  const page = await queryPageBySlug({
    slug: slug[1],
    id: slug[0],
  })

  return generateMeta({ doc: page })
}

const queryPageBySlug = cache(async ({ slug, id }: { slug: string; id?: string | number }) => {
  const { isEnabled: draft } = await draftMode()

  const payload = await getPayload({ config: configPromise })

  const result = await payload.find({
    collection: 'pages',
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
