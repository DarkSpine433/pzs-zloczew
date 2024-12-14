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
    <SheetClose asChild>
      <p>{children}</p>
    </SheetClose>
  ) : (
    <p>{children}</p>
  )
}

const RenderStaticNavLinks = ({ StaticNavLinksCh, sheet, className }: Props) => {
  return StaticNavLinksCh.map((nav, index) => (
    <Link
      href={nav.url.toLowerCase()}
      key={nav.title + nav.url + index}
      className={`${className}  transition-all ${nav.title === `Zapisane` ? `spring-element` : ''} `}
    >
      <Component sheet={sheet}>{nav.title}</Component>
    </Link>
  ))
}

export default RenderStaticNavLinks
