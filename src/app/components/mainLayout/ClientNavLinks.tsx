'use client'
import { SheetClose } from '@/components/ui/sheet'
import useStore from '@/lib/GlobalStateFavouriteNews'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { useEffect, useLayoutEffect, useState } from 'react'
import SkeletonNews from '../mainPageComponents/SkeletonNews'
const RenderStaticNavLinks = dynamic(() => import('./RenderStaticNavLinks'), {
  loading: () => <SkeletonNews repeat={6} className="h-5 w-20" />,
})
type Props = {
  className?: string
  children?: React.ReactNode
  sheet?: boolean
  StaticNav: any[]
}
const staticNavFun = (
  StaticNavLinkst: { title: string; url: string }[],
  isFavouriteExist: String,
) => {
  let StaticNavLinks = StaticNavLinkst
  let onLoad = false
  if (!onLoad) {
    if (
      StaticNavLinks[StaticNavLinks.length - 1].title != 'Zapisane' &&
      (isFavouriteExist != '' || isFavouriteExist)
    ) {
      StaticNavLinks.push({
        title: 'Zapisane',
        url: '/saved', //TODO: check if saved exist by
      })
    } else if (
      StaticNavLinks[StaticNavLinks.length - 1].title == 'Zapisane' &&
      (isFavouriteExist == '' || isFavouriteExist == undefined || !isFavouriteExist)
    ) {
      StaticNavLinks.pop()
    }
  }
  onLoad = true
  return StaticNavLinks
}
const ClientNavLinks = ({ className, children, sheet, StaticNav }: Props) => {
  const arrayOfFavouriteItems = useStore((state) => state.arrayOfFavouriteItems)
  const [StaticNavLinksCh, setStaticNavLinksCh] = useState(
    staticNavFun(StaticNav, arrayOfFavouriteItems[0]),
  )

  useLayoutEffect(() => {
    setStaticNavLinksCh(staticNavFun(StaticNav, arrayOfFavouriteItems[0]))
    console.log(StaticNavLinksCh)
  }, [arrayOfFavouriteItems])

  return (
    <>
      {' '}
      <style>
        {`
         

.spring-element {
 opacity:0;
 width:0px;

  animation: spring 1s ease-out forwards ;
}

@keyframes spring {
  0% {
    transform: translateY(-100px); 
    opacity:0; 
    
  }
  30% {
    transform:translateY(-30px) ;
    
  }
  50% {
    transform:translateY(5px) ;
       width: 13%;
    
  }
  70% {
    transform:translateY(-2px) ;


  }
  100% {
   
    transform:translateY(0);
    width: auto;
         opacity:1;
   
        
 
  }
}



     
                  `}
      </style>
      {StaticNavLinksCh && (
        <RenderStaticNavLinks
          StaticNavLinksCh={StaticNavLinksCh}
          className={className}
          sheet={false}
        />
      )}
    </>
  )
}
export default ClientNavLinks