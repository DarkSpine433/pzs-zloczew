import Link from 'next/link'
import Image from 'next/image'

type Props = {}

const Logo = (props: Props) => {
  return (
    <Link
      id="Logo"
      href="/"
      className="flex-1 items-center self-center justify-self-center sm:flex"
    >
      <Image src="/logo.png" alt="logo" width={100} height={100} className="size-10 lg:size-12" />

      <h2 className="text-md  font-bold uppercase text-primary hidden sm:block xl:block lg:hidden ">
        <strong>pzs ZŁoczew</strong>
      </h2>
    </Link>
  )
}

export default Logo
