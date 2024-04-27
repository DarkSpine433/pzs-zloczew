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
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="max-w-sm mx-auto h-dvh flex flex-col items-center justify-center ">
      <h2 className="text-3xl uppercase font-extrabold">Coś nie TAK!</h2>
      <h3 className="text-2xl lowercase">nieznaleziono strony</h3>
      <Link href="/">
        <Button className="mt-5">Wróc na strone główną</Button>
      </Link>
    </div>
  )
}
