import { cn } from 'src/utilities/cn'
import React from 'react'
import RichText from '@/components/RichText'

import type { ContentBlock as ContentBlockProps } from '@/payload-types'

import { CMSLink } from '../../components/Link'

export const ContentBlock: React.FC<ContentBlockProps & { getH2Headings?: boolean }> = (props) => {
  const { columns, getH2Headings } = props

  const colsSpanClasses = {
    full: '12',
    half: '6',
    oneThird: '4',
    twoThirds: '8',
  }

  return (
    <div className=" w-full gap-y-8 gap-x-16">
      {columns &&
        columns.length > 0 &&
        columns.map((col, index) => {
          const { enableLink, link, richText, size } = col

          return (
            <div
              className={cn(`col-span-4 lg:col-span-${colsSpanClasses[size!]}`, {
                'md:col-span-2': size !== 'full',
              })}
              key={index + 'col'}
            >
              {richText && (
                <RichText content={richText} enableGutter={false} getH2Headings={getH2Headings} />
              )}

              {enableLink && !getH2Headings && <CMSLink {...link} />}
            </div>
          )
        })}
    </div>
  )
}
