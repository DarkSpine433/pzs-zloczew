import { SheetClose } from '@/components/ui/sheet'

import Link from 'next/link'
import React from 'react'

type Props = {
  StaticNavLinksCh: Array<any>
  sheet?: boolean
  className?: string
}

const RenderStaticNavLinks = ({ StaticNavLinksCh, sheet, className }: Props) => {
  return StaticNavLinksCh.map((nav, index) => (
    <div key={nav.title + nav.url + index}>
      {sheet ? (
        <SheetClose asChild>
          <Link href={nav.url.toLowerCase()} className={`${className} `}>
            {nav.title}
          </Link>
        </SheetClose>
      ) : (
        <Link
          href={nav.url.toLowerCase()}
          className={`${className} transition-all ${nav.title === `Zapisane` ? `spring-element` : ''} `}
          style={{}}
        >
          {nav.title}
        </Link>
      )}
    </div>
  ))
}

export default RenderStaticNavLinks
