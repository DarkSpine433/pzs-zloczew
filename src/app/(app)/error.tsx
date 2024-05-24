'use client' // Error components must be Client Components

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="max-w-sm mx-auto min-h-screen flex flex-col items-center justify-center relative w-full ">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-3/4 w-max">
        {' '}
        <h2 className="text-3xl uppercase font-extrabold">Coś nie TAK!</h2>
        <h3 className="text-2xl lowercase">nieznaleziono strony</h3>
        <Link href="/">
          <Button className="mt-5">Wróc na strone główną</Button>
        </Link>
      </div>
    </div>
  )
}
