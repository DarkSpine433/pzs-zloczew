import Image from 'next/image'
type Props = {}

const Icon = (props: Props) => {
  return (
    <Image src="/logo.png" alt="logo" width={100} height={100} className="size-10 lg:size-12" />
  )
}

export default Icon
