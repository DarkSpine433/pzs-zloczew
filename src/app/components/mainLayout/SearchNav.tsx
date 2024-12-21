import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import SearchHandlerClient from './SearchHandlerClient'
import { DialogClose, DialogTitle } from '@radix-ui/react-dialog'
import Link from 'next/link'
type Props = {}

const SearchNav = (props: Props) => {
  return (
    <Link href="/search" aria-label="wyszukaj">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        className="size-6 cursor-pointer stroke-gray-400 hover:stroke-primary"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
        />
      </svg>
    </Link>
  )
}

export default SearchNav
