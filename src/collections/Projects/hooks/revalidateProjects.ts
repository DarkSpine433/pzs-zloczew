import type { CollectionAfterChangeHook } from 'payload'

import { revalidatePath } from 'next/cache'

import type { Project } from '../../../payload-types'

export const revalidateProjects: CollectionAfterChangeHook<Project> = ({
  doc,
  previousDoc,
  req: { payload },
}) => {
  if (doc._status === 'published') {
    const path = `/projects/${doc.slug}`

    payload.logger.info(`Revalidating Projects at path: ${path}`)

    revalidatePath(path)
  }

  // If the News was previously published, we need to revalidate the old path
  if (previousDoc._status === 'published' && doc._status !== 'published') {
    const oldPath = `/projects/${previousDoc.slug}`

    payload.logger.info(`Revalidating old News at path: ${oldPath}`)

    revalidatePath(oldPath)
  }

  return doc
}
