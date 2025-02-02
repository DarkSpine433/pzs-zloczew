import React from 'react'

import type { Page } from '@/payload-types'

import RichText from '@/components/RichText'

type HeroTypes =
  | {
      children?: React.ReactNode
      content?: never
    }
  | (Omit<Page['hero'], 'content'> & {
      children?: never
      content?: Page['hero']['content']
    })

export const MainHeroRender: React.FC<HeroTypes> = ({ children, content }) => {
  return (
    <div
      className="h-fit py-40 flex items-center justify-center border-b-3 border-primary bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('/img/backgrounds/image-${Math.floor(Math.random() * 4) + 1}.webp')`,
        backgroundSize: 'cover',

        backgroundPosition: 'center',
      }}
    >
      <style>{`
        
        #hero {
          color: #fff !important;
          text-shadow: 5px 5px 20px #000 !important;
          font-weight: 900 !important;
          text-transform: uppercase !important;
          word-break: break-word;
        
        }
          
      `}</style>
      {}
      <h1
        id="hero"
        className="max-w-screen-2xl text-center break-words  px-5 flex flex-col items-center justify-center col-start-2 text-background text-5xl  font-extrabold "
      >
        {content}
      </h1>
    </div>
  )
}
