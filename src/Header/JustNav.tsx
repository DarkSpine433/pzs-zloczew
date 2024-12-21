import { HeaderClient } from './Component.client'
import { getCachedGlobal } from '@/utilities/getGlobals'

import { CMSLink } from '@/components/Link'

import type { Header } from '@/payload-types'
import React from 'react'
import { SheetClose } from '@/components/ui/sheet'

async function JustNav({ className, isSheet }: { className?: string; isSheet?: boolean }) {
  const header: Header = await getCachedGlobal('header', 1)()
  const navItems = header?.navItems || []

  return navItems.map(({ link }, i) => {
    return isSheet ? (
      <SheetClose asChild key={i}>
        <CMSLink key={i} {...link} className={`${className}`} />
      </SheetClose>
    ) : (
      <CMSLink key={i} {...link} className={`${className}`} />
    )
  })
}

export default JustNav
