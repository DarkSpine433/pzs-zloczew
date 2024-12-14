'use server'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import configPromise from '@payload-config'
import { StaticNavT } from './StaticNavT'

export const StaticNav = async () => {
  const payload = await getPayloadHMR({ config: configPromise })
  const data: any = await payload.findGlobal({
    slug: 'schooljournal',
  })

  return data.link ? [...StaticNavT, { title: 'Dziennik', url: data.link }] : StaticNavT
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
