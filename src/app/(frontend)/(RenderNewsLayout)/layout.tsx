import Section from '@/app/components/mainPageComponents/Section'
import SkeletonNews from '@/app/components/mainPageComponents/SkeletonNews'
import { ArchiveBlock } from '@/blocks/ArchiveBlock/Component'
import { Button } from '@/components/ui/button'

import { Skeleton } from '@mui/material'

import dynamic from 'next/dynamic'
import Link from 'next/link'
import { Suspense } from 'react'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <div className=" border-t border-b-foreground/50 border-t-primary/10 bg-secondary/50 relative">
        <hr className="absolute -top-0.5  m-0 h-[0.1rem] w-full border-none bg-gradient-to-r from-transparent from-10% via-primary to-transparent to-90% p-0" />

        <Section className=" pb-20 " maxWidth="max-w-6xl ">
          {' '}
          <h2 className="scroll-m-20 space-y-10 bg-gradient-to-r from-primary from-40% via-foreground to-primary to-60% bg-clip-text pb-10 pt-10 text-center text-4xl font-extrabold uppercase text-transparent drop-shadow-[0_1.2px_1.2px_hsl(--primary)]">
            Aktualności
          </h2>
          <ArchiveBlock
            limit={12}
            populateBy="collection"
            blockType="archive"
            relationTo={'news'}
          />{' '}
          <Link
            href="/news"
            className="mx-auto mt-10 flex w-fit items-center justify-center text-center"
          >
            <Button>Zobacz Więcej</Button>
          </Link>
        </Section>
      </div>
    </>
  )
}
