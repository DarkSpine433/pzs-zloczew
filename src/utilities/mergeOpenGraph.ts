import type { Metadata } from 'next'
import { getServerSideURL } from './getURL'

const defaultOpenGraph: Metadata['openGraph'] = {
  type: 'website',
  description: 'PZS Złoczew Website',
  images: [
    {
      url: `/deafult_og.jpeg`,
    },
  ],
  siteName: 'PZS Złoczew Website',
  title: 'PZS Złoczew Website',
}

export const mergeOpenGraph = (og?: Metadata['openGraph']): Metadata['openGraph'] => {
  return {
    ...defaultOpenGraph,
    ...og,
    images: og?.images ? og.images : defaultOpenGraph.images,
  }
}
