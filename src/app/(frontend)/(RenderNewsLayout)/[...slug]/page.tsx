import type { Metadata } from 'next'

import { PayloadRedirects } from '@/components/PayloadRedirects'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { draftMode } from 'next/headers'
import React, { cache } from 'react'

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
  #sideSection::-webkit-scrollbar {
  width: 10px;
}

/* Track */
#sideSection::-webkit-scrollbar-track {
  background: transparent;
  opacity: 0; 
}
 
/* Handle */
#sideSection::-webkit-scrollbar-thumb {
  background: rgba(37, 99, 235, 0.4);
        border-radius: 4px;

}

/* Handle on hover */
#sideSection::-webkit-scrollbar-thumb:hover {
   background: rgba(37, 99, 235, 0.7);
}
 #sideSection a{ color:  gray  !important;
        text-transform: uppercase;
        text-decoration: none !important;
          width: 100%;
        font-size: 1rem;
          display: flex;
          opacity: 0.8;
          font-size: 0.68rem;
          transition: transform  0.06s linear;
          margin: 0;
        padding: 6px 0;
        text-transform: lowercase;

}
         #sideSection *::first-letter{   text-transform: uppercase;
     color:  rgba(37, 99, 235, 1)  !important;
      font-size: 1.1rem;
      font-weight: 500;


}
        #sideSection *{
        padding: 0;
        margin: 0;
        }
      #sideSection a h3 {
      margin: 0;
      font-weight: 400;
        }
 #sideSection a:hover{
transform:translateX(1px);
opacity:1;
color:  rgba(37, 99, 235,1)  !important;

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
        <aside className="sideSectionClass left-0 bg-white rounded-md  sticky top-16  h-fit max-h-[calc(100vh-2rem)]  w-60 float-left p-3 hidden sm:block ">
          {' '}
          <h2 className="text-xl font-semibold   m-0 ">Tematy:</h2>
          <div
            id="sideSection"
            className="pl-2 w-full scroll-  h-fit max-h-[calc(100vh-7rem)] overflow-y-auto overflow-x-hidden"
          >
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
