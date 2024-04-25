import React from 'react'
import ContactButton from '../ui/ContactButton'

type Props = {}

const Cta = (props: Props) => {
  return (
    <div className="flex justify-center">
      <ContactButton
        className="p-7 text-xl backdrop-blur-3xl shadow-2xl shadow-primary font-bold text-gray-800  "
        size="size-6 stroke-primary "
      />
    </div>
  )
}

export default Cta
