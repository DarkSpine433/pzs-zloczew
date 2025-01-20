import React from 'react'

import type { Page } from '@/payload-types'

import RichText from '@/components/RichText'

type LowImpactHeroType =
  | {
      children?: React.ReactNode
      richText?: never
    }
  | (Omit<Page['hero'], 'richText'> & {
      children?: never
      richText?: Page['hero']['richText']
    })

export const LowImpactHero: React.FC<LowImpactHeroType> = ({ children, richText }) => {
  return (
    <div
      className="h-fit py-40 flex items-center justify-center border-b-3 border-primary bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('/media/image-post${Math.floor(Math.random() * 3) + 1}.webp')`,
        backgroundSize: 'cover',

        backgroundPosition: 'center',
      }}
    >
      <style>{`
        
        #test h1 {
          color: #fff !important;
          text-shadow: 5px 5px 20px #000 !important;
          font-weight: 900 !important;
          text-transform: uppercase !important;
          word-break: break-word;
        
        }
      `}</style>
      {}
      <div
        id="test"
        className="max-w-screen-2xl text-center break-words  px-5 flex flex-col items-center justify-center col-start-2 text-background  font-extrabold "
      >
        {children || (richText && <RichText content={richText} enableGutter={false} />)}
      </div>
    </div>
  )
}
