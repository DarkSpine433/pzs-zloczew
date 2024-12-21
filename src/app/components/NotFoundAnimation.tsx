'use client'
import React from 'react'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'

type Props = {
  NotFoundFor?: string
}

const NotFoundAnimation = ({ NotFoundFor }: Props) => {
  return (
    <div className="flex h-fit w-full flex-col items-center overflow-x-hidden">
      {NotFoundFor !== undefined && (
        <h2>
          Nie znaleźliśmy wyników dla <strong className="text-primary">{`„${NotFoundFor}”`}</strong>
        </h2>
      )}
      <DotLottieReact
        className="w-max h-max"
        height={300}
        width={300}
        src="/animations/NotFound.lottie"
        loop
        autoplay
      />
    </div>
  )
}

export default NotFoundAnimation
