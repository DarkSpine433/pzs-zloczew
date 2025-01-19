'use client'
import useStore from '@/lib/GlobalStateFavouriteNews'
import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'
import { staticNavItems } from './StaticNavT'
import { getStaticNavItems } from './StaticNavLinks'

const RenderStaticNavLinks = dynamic(() => import('./RenderStaticNavLinks'), {
  ssr: false,
})

const updateStaticNavLinks = (
  staticNavLinks: { title: string; url: string }[],
  isFavouriteItemExist: string,
) => {
  if (!isFavouriteItemExist) {
    return staticNavLinks
  }
  const hasFavouriteLink = staticNavLinks.some(({ title }) => title === 'Zapisane')
  if (!hasFavouriteLink) {
    return [...staticNavLinks, { title: 'Zapisane', url: '/saved' }]
  }
  return staticNavLinks
}

type Props = {
  className?: string
  children?: React.ReactNode
  sheet?: boolean
}
const ClientNavLinks = ({ className, children, sheet }: Props) => {
  const favouriteItems = useStore((state) => state.favouriteItems)
  const [staticNavLinks, setStaticNavLinks] = useState(staticNavItems)
  useEffect(() => {
    const fetchStaticNavItems = async () => {
      const staticNavItems = await getStaticNavItems()
      setStaticNavLinks(staticNavItems)
    }
    fetchStaticNavItems()
  }, [])
  useEffect(() => {
    setStaticNavLinks(updateStaticNavLinks(staticNavLinks, favouriteItems[0]))
  }, [favouriteItems, staticNavLinks])

  return (
    <>
      <style>
        {`
          .spring-element {
            opacity: 0;
            width: 0px;
            animation: spring 1s ease-out forwards;
          }
          @keyframes spring {
            0% {
              transform: translateY(-100px);
              opacity: 0;
            }
            30% {
              transform: translateY(-30px);
            }
            50% {
              transform: translateY(5px);
              width: 13%;
            }
            70% {
              transform: translateY(-2px);
            }
            100% {
              transform: translateY(0);
              width: auto;
              opacity: 1;
            }
          }
        `}
      </style>
      <RenderStaticNavLinks StaticNavLinksCh={staticNavLinks} className={className} sheet={sheet} />
    </>
  )
}
export default ClientNavLinks
