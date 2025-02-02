import React from 'react'

import type { Page } from '@/payload-types'

import { HighImpactHero } from '@/heros/HighImpact'
import { LowImpactHero } from '@/heros/LowImpact'
import { MediumImpactHero } from '@/heros/MediumImpact'
import { MainHeroRender } from './MainHeroRender'

const heroes = {
  highImpact: HighImpactHero,
  lowImpact: LowImpactHero,
  mediumImpact: MediumImpactHero,
}

export const RenderHero: React.FC<Page['hero']> = (props) => {
  const { content } = props || {}

  if (!content || content == 'none' || (content == '' && content == null)) return null

  // const HeroToRender = heroes[type]

  // if (!HeroToRender) return null

  return <MainHeroRender {...props} />
}
