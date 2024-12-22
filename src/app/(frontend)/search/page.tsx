import type { Metadata } from 'next/types'

import { CollectionArchive } from '@/components/CollectionArchive'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import React from 'react'
import { News } from '@/payload-types'
import { Search } from '@/search/Component'
import PageClient from './page.client'
import dynamic from 'next/dynamic'
import TemplateNews from '@/app/components/news/TemplateNews'

const NotFoundAnimation = dynamic(() => import('@/app/components/NotFoundAnimation'), {})

type Args = {
  searchParams: Promise<{
    q: string
  }>
}
export default async function Page({ searchParams: searchParamsPromise }: Args) {
  const { q: query } = await searchParamsPromise
  const payload = await getPayload({ config: configPromise })

  const data = await payload.find({
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
  console.log(data)
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

      {data.totalDocs > 0 ? (
        <div className="mx-auto grid h-fit w-full max-w-7xl grid-cols-1 justify-center gap-5 sm:grid-cols-2 lg:grid-cols-3 px-3">
          {data.docs.map((doc, index) => (
            <TemplateNews
              key={doc.id + index}
              doc={doc}
              slugAndIdAndRelationTo={{
                slug: doc.slug,
                id: doc.doc.value,
                relationTo: doc.doc.relationTo,
              }}
            />
          ))}
        </div>
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
    title: 'Wyniki wyszukiwania - PZS Złoczew',
    description:
      'Poznaj wyniki wyszukiwania na stronie PZS Złoczew. Odkryj informacje o naszej szkole, wydarzeniach, ofercie edukacyjnej i więcej.',
    keywords: [
      'PZS Złoczew',
      'szkoła Złoczew',
      'wyniki wyszukiwania',
      'edukacja',
      'oferta edukacyjna',
      'wydarzenia szkolne',
    ],
    authors: [
      {
        name: 'DS-Craft Team',
        url: 'https://bit.ly/ds-craft',
      },
    ],
    openGraph: {
      title: 'Wyniki wyszukiwania - PZS Złoczew',
      description:
        'Wyniki wyszukiwania na stronie PZS Złoczew. Znajdź interesujące treści dotyczące naszej szkoły w Złoczewie.',
      url: 'https://www.pzszloczew.pl/search', // Replace with the actual search page URL
      type: 'website',
      locale: 'pl_PL',
      siteName: 'PZS Złoczew',
    },
  }
}
