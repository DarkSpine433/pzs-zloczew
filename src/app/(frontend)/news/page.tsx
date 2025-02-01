import type { Metadata } from 'next/types'

import PageClient from './page.client'

import dynamic from 'next/dynamic'
import SpinerLoader from '@/app/components/SpinerLoader'

const FetchNews = dynamic(() => import('./FetchNews'), {
  loading: () => <SpinerLoader />,
})
export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  return (
    <>
      <PageClient>
        <FetchNews searchParams={await searchParams} />
      </PageClient>
    </>
  )
}

export function generateMetadata(): Metadata {
  return {
    title: 'Aktualności - PZS Złoczew',
    description:
      'Bądź na bieżąco z najnowszymi wydarzeniami i aktualnościami w PZS Złoczew. Sprawdź, co dzieje się w naszej szkole w Złoczewie.',
    keywords: [
      'PZS Złoczew',
      'aktualności',
      'wydarzenia szkolne',
      'wiadomości',
      'szkoła Złoczew',
      'informacje szkolne',
    ],
    authors: [{ name: 'DS-Craft Team', url: 'https://bit.ly/ds-craft' }],
    openGraph: {
      title: 'Aktualności - PZS Złoczew',
      images: ['/deafult_og.jpeg'],
      description:
        'Najświeższe wiadomości i wydarzenia z życia PZS Złoczew. Dowiedz się, co nowego w naszej szkole.',
      url: 'https://www.pzszloczew.pl/news', // Replace with the actual news page URL
      type: 'website',
      locale: 'pl_PL',
      siteName: 'PZS Złoczew',
    },
  }
}
