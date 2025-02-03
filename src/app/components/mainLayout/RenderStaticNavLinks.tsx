import { SheetClose } from '@/components/ui/sheet'

import Link from 'next/link'

type Props = {
  StaticNavLinksCh: Array<any>
  sheet?: boolean
  className?: string
}
const Component = ({
  children,
  sheet,
  className,
}: {
  children: React.ReactNode
  sheet?: boolean
  className?: string
}) => {
  return sheet ? (
    <>
      {
        <style>
          {`
        .sheet-no-animation-close {
          animation: none !important;
          -webkit-animation: none!important;
          -moz-animation: none !important;
          width: 100% !important;
          height: 100% !important;
          opacity: 1 !important;
          transform: none !important;
        }
      `}
        </style>
      }
      <SheetClose className={`sheet-no-animation-close ${className} `}>{children}</SheetClose>
    </>
  ) : (
    <p className={className}>{children}</p>
  )
}

const RenderStaticNavLinks = ({ StaticNavLinksCh, sheet, className }: Props) => {
  return StaticNavLinksCh.map((nav, index) => (
    <Link
      href={nav.url.toLowerCase()}
      key={nav.title + nav.url + index}
      target={nav.external === true ? '_blank' : '_self'}
      className="group"
    >
      <Component
        className={`${className}  transition-all ${nav.title === `Zapisane` ? `spring-element` : ''} `}
        sheet={sheet}
      >
        {nav.title}
      </Component>
    </Link>
  ))
}

export default RenderStaticNavLinks
