//@ts-nocheck
import './globals.css'
import { Inter as FontSans } from 'next/font/google'

import { cn } from '@/lib/utils'
import Head from 'next/head'
import Link from 'next/link'
import HolyLoader from 'holy-loader'
import type { Metadata } from 'next'

import { GeistMono } from 'geist/font/mono'
import { GeistSans } from 'geist/font/sans'
import React from 'react'

import { AdminBar } from '@/components/AdminBar'

import { Header } from '@/Header/Component'
import { LivePreviewListener } from '@/components/LivePreviewListener'
import { Providers } from '@/providers'
import { InitTheme } from '@/providers/Theme/InitTheme'
import { mergeOpenGraph } from '@/utilities/mergeOpenGraph'
import { draftMode } from 'next/headers'
import { getServerSideURL } from '@/utilities/getURL'
import Footer from '@/app/components/mainLayout/Footer'
import Nav from '../components/mainLayout/Nav'

import CookiesConsentClinent from './CookiesConsentClinent'
const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
})

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const { isEnabled } = await draftMode()
  return (
    <html
      lang="pl"
      suppressHydrationWarning={true}
      className={`${cn(GeistSans.variable, GeistMono.variable)} scroll-smooth`}
    >
      <body className={cn('min-h-screen bg-foreground font-sans antialiased', fontSans.variable)}>
        <HolyLoader color="#2563EB" zIndex={50} />
        <Providers>
          <AdminBar
            adminBarProps={{
              preview: isEnabled,
            }}
          />
          <LivePreviewListener />
          <header className="sticky left-0 top-0 z-50 mx-auto w-full bg-foreground px-10 py-1 text-background">
            <nav>
              <div className="mx-auto max-w-[1200px]">
                {' '}
                <Nav />{' '}
              </div>
            </nav>
          </header>
          <main className=" bg-background">{children}</main>
          <footer className="z-50 bg-foreground text-background pb-3 ">
            <div className="mx-auto max-w-7xl">
              <Footer />
            </div>
          </footer>
        </Providers>
        <CookiesConsentClinent />
      </body>
    </html>
  )
}
export function generateMetadata(): Metadata {
  return {
    authors: [
      {
        name: 'DS-Craft Team',
        url: 'https://bit.ly/ds-craft',
      },
    ],

    openGraph: {
      images: ['/deafult_og.jpeg'], // Replace with the actual image URL
      type: 'website',
      locale: 'pl_PL',
      siteName: 'PZS Złoczew',
    },
  }
}
