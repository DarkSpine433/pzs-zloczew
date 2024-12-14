import Section from '@/app/components/mainPageComponents/Section'
import SkeletonNews from '@/app/components/mainPageComponents/SkeletonNews'
import { ArchiveBlock } from '@/blocks/ArchiveBlock/Component'

import { Skeleton } from '@mui/material'

import dynamic from 'next/dynamic'
import { Suspense } from 'react'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <div className=" border-t border-b-foreground/50 border-t-primary/10 bg-secondary/50 relative">
        <hr className="absolute  m-0 h-[0.1rem] w-full border-none bg-gradient-to-r from-transparent from-10% via-primary to-transparent to-90% p-0" />

        <Section className=" py-20" maxWidth="max-w-6xl ">
          <ArchiveBlock
            limit={12}
            populateBy="collection"
            blockType="archive"
            relationTo={'news'}
          />
        </Section>
      </div>
    </>
  )
}
