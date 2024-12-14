import type { Metadata } from 'next/types'

import { CollectionArchive } from '@/components/CollectionArchive'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import React from 'react'
import { News } from '@/payload-types'
import { Search } from '@/search/Component'
import PageClient from './page.client'
import dynamic from 'next/dynamic'

const NotFoundAnimation = dynamic(() => import('@/app/components/NotFoundAnimation'), {})

type Args = {
  searchParams: Promise<{
    q: string
  }>
}
export default async function Page({ searchParams: searchParamsPromise }: Args) {
  const { q: query } = await searchParamsPromise
  const payload = await getPayload({ config: configPromise })

  const news = await payload.find({
    collection: 'search',
    depth: 1,
    limit: 12,
    ...(query
      ? {
          where: {
            or: [
              {
                title: {
                  like: query,
                },
              },
              {
                'meta.description': {
                  like: query,
                },
              },
              {
                'meta.title': {
                  like: query,
                },
              },
              {
                slug: {
                  like: query,
                },
              },
            ],
          },
        }
      : {}),
  })

  return (
    <div className="pt-10 pb-24 min-h-dvh">
      <PageClient />

      <div className="container mb-16">
        <div className="pb-4 px-4 flex flex-col gap-3">
          <h1 className="text-5xl sm:text-6xl font-extrabold">
            <strong>Wyszukaj</strong>
          </h1>
          <h3 className="text-foreground/50 text-sm pl-2">
            Znajdź to, czego potrzebujesz w naszej bazie informacji.
          </h3>
        </div>
        <div className="prose dark:prose-invert max-w-none">
          <h2 className="sr-only">Wyszukaj</h2>
          <Search />
        </div>
      </div>

      {news.totalDocs > 0 ? (
        <CollectionArchive news={news.docs as unknown as News[]} />
      ) : (
        <div className="container">
          <NotFoundAnimation NotFoundFor={query} />
        </div>
      )}
    </div>
  )
}

export function generateMetadata(): Metadata {
  return {
    title: `Payload Website Template Search`,
  }
}
