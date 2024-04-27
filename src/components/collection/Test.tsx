import Link from 'next/link'
import React from 'react'

type Props = {}

export const Test: React.FC = (props: Props) => {
  return (
    <React.Fragment>
      <h4>
        Wygeneruj Opis Za Pomocą AI -&nbsp;
        <Link href="https://chat.openai.com/" target="_blank">
          Generuj
        </Link>
      </h4>
    </React.Fragment>
  )
}
