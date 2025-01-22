import { cn } from '@/utilities/cn'
import React from 'react'

import { serializeLexical } from './serialize'

type Props = {
  className?: string
  content: Record<string, any>
  enableGutter?: boolean
  enableProse?: boolean
  getH2Headings?: boolean
}

const RichText: React.FC<Props> = ({
  className,
  content,
  enableGutter = true,
  enableProse = true,
  getH2Headings,
}) => {
  if (!content) {
    return null
  }

  return (
    <div
      className={cn(
        {
          'max-w-none w-full': enableGutter,
          'max-w-none ': !enableGutter,
          'mx-auto prose dark:prose-invert ': enableProse,
        },
        className,
      )}
    >
      {content &&
        !Array.isArray(content) &&
        typeof content === 'object' &&
        'root' in content &&
        serializeLexical({ nodes: content?.root?.children, getH2Headings: getH2Headings })}
    </div>
  )
}

export default RichText
