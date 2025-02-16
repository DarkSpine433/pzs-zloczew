import { getPayload } from 'payload'
import configPromise from '@payload-config'
type Props = {}

const SchoolJournal = async (props: Props) => {
  const payload = await getPayload({ config: configPromise })
  const data: any = await payload.findGlobal({
    slug: 'schooljournal',
  })
  return data.link
}

export default SchoolJournal
