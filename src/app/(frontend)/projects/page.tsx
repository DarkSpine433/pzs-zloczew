import React from 'react'
import FetchContent from './FetchContent'
import { Metadata } from 'next'

type Props = {}

const page = (props: Props) => {
  return (
    <div>
      <FetchContent />
    </div>
  )
}
export function generateMetadata(): Metadata {
  return {
    title: 'Projekty - PZS Złoczew',
    description:
      'Witamy na oficjalnej stronie PZS Złoczew. Poznaj naszą ofertę edukacyjną, wydarzenia szkolne, oraz wszystkie informacje na temat naszej szkoły w Złoczewie.',
    keywords: [
      'PZS Złoczew',
      'szkoła Złoczew',
      'oferta edukacyjna',
      'wydarzenia szkolne',
      'edukacja Złoczew',
      'szkoła średnia Złoczew',
    ],
    authors: [
      {
        name: 'DS-Craft Team',
        url: 'https://bit.ly/ds-craft',
      },
    ],

    openGraph: {
      title: 'Strona Główna - PZS Złoczew',
      description:
        'Witamy na stronie PZS Złoczew! Odkryj naszą ofertę edukacyjną, wydarzenia, aktualności oraz wszystko, co warto wiedzieć o naszej szkole.',
      images: [`/deafult_og.jpeg`],
      url: `${process.env.NEXT_PUBLIC_URL}`, // Replace with the actual homepage URL
      type: 'website',
      locale: 'pl_PL',
      siteName: 'PZS Złoczew',
    },
  }
}

export default page
