'use client'

import React from 'react'

import type { Header as HeaderType } from '@/payload-types'

import { CMSLink } from '@/components/Link'

export const HeaderNav: React.FC<{ header: HeaderType; className?: string }> = ({
  header,
  className,
}) => {
  const navItems = header?.navItems || []

  return navItems.map(({ link }, i) => {
    return <CMSLink key={i} {...link} className={`${className}`} />
  })
}
