//disable cache
import { unstable_noStore as noStore } from 'next/cache'

//Other Ui Components Import
import Link from 'next/link'

//Payload imports
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { SheetClose } from '@/components/ui/sheet'
import Socials from './Socials'

// const StaticNavLinks = dynamic(() => import('./StaticNavLinks'), {})

import PayLoadErrorHandling from '../PayLoadErrorHandling'
import dynamic from 'next/dynamic'
import { getCachedGlobal } from '@/utilities/getGlobals'
import { CMSLink } from '@/components/Link'
import { Header } from '@/Header/Component'
import JustNav from '@/Header/JustNav'
import ClientNavLinks from './ClientNavLinks'

const FetchNavContent = () => {
  return (
    <div className="py-5">
      <menu className="flex flex-col gap-3">
        <ClientNavLinks
          className="w-full rounded-lg border-b-4 border-primary bg-secondary/60 px-3 py-3 text-left font-semibold uppercase shadow-sm shadow-primary transition-all hover:border-primary hover:bg-secondary hover:px-3.5"
          sheet={true}
        />
        <li className="flex justify-center gap-3 md:hidden">
          <Socials />
        </li>
        <hr className="m-0 mb-5 h-[1px] w-full max-w-screen-2xl border-none bg-gradient-to-r from-transparent via-primary/50 to-transparent p-0" />

        <JustNav className="w-full rounded-lg border-b-4 border-primary bg-secondary/60 px-3 py-3 text-left font-semibold uppercase shadow-sm shadow-primary transition-all hover:border-primary hover:bg-secondary hover:px-3.5" />
      </menu>
    </div>
  )
}

export default FetchNavContent
