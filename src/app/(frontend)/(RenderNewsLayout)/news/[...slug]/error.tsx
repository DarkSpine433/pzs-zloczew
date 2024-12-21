"use client"; // Error components must be Client Components

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="relative mx-auto flex min-h-screen w-full max-w-sm flex-col items-center justify-center">
      <div className="absolute left-1/2 top-1/2 w-max -translate-x-1/2 -translate-y-3/4">
        {" "}
        <h2 className="text-3xl font-extrabold uppercase">Coś nie TAK!</h2>
        <h3 className="text-2xl lowercase">nieznaleziono strony</h3>
        <Link href="/">
          <Button className="mt-5">Wróc na strone główną</Button>
        </Link>
      </div>
    </div>
  );
}
