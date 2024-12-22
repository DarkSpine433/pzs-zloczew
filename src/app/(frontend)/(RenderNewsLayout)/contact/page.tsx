import SpinerLoader from '@/app/components/SpinerLoader'
import { Metadata } from 'next'
import dynamic from 'next/dynamic'

const FetchContent = dynamic(() => import('./FetchContent'), {
  loading: () => <SpinerLoader />,
})
type Props = {}

const page = (props: Props) => {
  return (
    <>
      {' '}
      <div className="relative z-10 block space-y-5 overflow-hidden border-b-4 border-primary bg-foreground px-10 py-5 pb-14 sm:space-y-10 sm:py-12">
        <h1 className="lg:text-9xl= bg-[url('/img/news/grain.jpg')] bg-clip-text text-center text-[4rem] font-extrabold tracking-widest text-background/40 sm:text-7xl md:text-8xl">
          Kontakt
        </h1>
        <h3 className="mx-auto max-w-4xl border-l border-gray-400 px-4 py-1 text-left text-sm tracking-widest text-gray-500 first-letter:uppercase md:text-base [&>*]:first-letter:font-extrabold [&>*]:first-letter:uppercase [&>*]:first-letter:text-primary">
          <div>Oto nasze dane kontaktowe, abyś mógł się z nami skontaktować.</div>
          <br />

          <div>
            Skontaktuj się z nami! Czekamy na Twój telefon lub e-mail, abyśmy mogli Ci pomóc.
          </div>
        </h3>
      </div>
      <div className="mx-auto min-h-[600px] max-w-6xl border-x px-3 py-10">
        <FetchContent />
      </div>
    </>
  )
}
export function generateMetadata(): Metadata {
  return {
    title: 'Kontakt - PZS Złoczew',
    description:
      'Skontaktuj się z PZS Złoczew! Znajdź informacje o adresie, numerach telefonicznych, godzinach pracy oraz innych sposobach kontaktu z naszą szkołą w Złoczewie.',
    keywords: [
      'kontakt PZS Złoczew',
      'kontakt z szkołą Złoczew',
      'adres PZS Złoczew',
      'numer telefonu PZS Złoczew',
      'godziny pracy PZS Złoczew',
      'szkoła Złoczew kontakt',
    ],
    authors: [
      {
        name: 'DS-Craft Team',
        url: 'https://bit.ly/ds-craft',
      },
    ],

    openGraph: {
      title: 'Kontakt - PZS Złoczew',
      description:
        'Skontaktuj się z PZS Złoczew! Odkryj wszystkie informacje o adresie, numerach telefonicznych, godzinach pracy i innych opcjach kontaktowych.',
      images: ['/deafult_og.jpeg'], // Replace with the actual image URL
      url: `${process.env.NEXT_PUBLIC_URL}/kontakt`, // Replace with the actual contact page URL
      type: 'website',
      locale: 'pl_PL',
      siteName: 'PZS Złoczew',
    },
  }
}
export default page
