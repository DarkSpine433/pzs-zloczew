import { cn } from 'src/utilities/cn'
import React, { Fragment } from 'react'

import type { Page } from '@/payload-types'

import { ArchiveBlock } from '@/blocks/ArchiveBlock/Component'
import { CallToActionBlock } from '@/blocks/CallToAction/Component'
import { ContentBlock } from '@/blocks/Content/Component'
import { FormBlock } from '@/blocks/Form/Component'
import { MediaBlock } from '@/blocks/MediaBlock/Component'
import { TopicHeading } from '@/blocks/TopicHeading/Component'

const blockComponents = {
  archive: ArchiveBlock,
  content: ContentBlock,
  cta: CallToActionBlock,
  formBlock: FormBlock,
  mediaBlock: MediaBlock,
  topicheading: TopicHeading,
}

export const RenderBlocks: React.FC<{
  blocks: Page['layout'][0][]
  getH2Headings?: boolean
}> = (props) => {
  const { blocks } = props
  console.log('blocks', blocks, props.getH2Headings)
  const hasBlocks = blocks && Array.isArray(blocks) && blocks.length > 0

  if (props.getH2Headings && hasBlocks && blocks[0].blockType === 'content') {
    return (
      <div className="py-10  max-w-4xl mx-auto  relative ">
        {blocks.map((block, index) => {
          const { blockType } = block

          if (blockType && blockType in blockComponents && blockType === 'content') {
            const Block = blockComponents[blockType]

            return (
              <div className="" key={index}>
                <Block {...block} getH2Headings={props.getH2Headings} />
              </div>
            )
          }

          return null
        })}
      </div>
    )
  }
  if (hasBlocks) {
    return (
      <Fragment>
        {blocks.map((block, index) => {
          const { blockType } = block

          if (blockType && blockType in blockComponents) {
            const Block = blockComponents[blockType]

            return (
              <div className="" key={index}>
                <Block {...block} />
              </div>
            )
          }

          return null
        })}
      </Fragment>
    )
  }

  return null
}
