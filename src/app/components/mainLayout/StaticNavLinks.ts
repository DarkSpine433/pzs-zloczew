'use server'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { staticNavItems } from './StaticNavT'

export const getStaticNavItems = async () => {
  const payload = await getPayload({ config: configPromise })
  const data: any = await payload.findGlobal({
    slug: 'schooljournal',
  })

  return data.link
    ? [...staticNavItems, { title: 'Dziennik', url: data.link, external: true }]
    : staticNavItems
}

// type Props = {
//   className?: string
//   children?: React.ReactNode
//   sheet?: boolean
// }

// const StaticNavLinks = async ({ className, children, sheet }: Props) => {
//   const StaticNav2 = await StaticNav()
//   return (
//     <>
//       {StaticNav2 && (
//         <Suspense fallback={<SkeletonNews repeat={6} className="h-5 w-20" />}>
//           <ClientNavLinks StaticNav={StaticNav2} className={className} sheet={sheet} />
//         </Suspense>
//       )}
//     </>
//   )
// }
// export default StaticNavLinks
