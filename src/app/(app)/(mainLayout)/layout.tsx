import dynamic from 'next/dynamic'

import Footer from '@/app/components/mainLayout/Footer'
import Nav from '@/app/components/mainLayout/Nav'
import '../globals.css'

export const metadata = {
  title: 'Powiatowy Zespół Szkół w Złoczewie',
  description:
    'Powiatowy Zespół Szkół w Złoczewie to nowoczesna placówka edukacyjna oferująca wszechstronne kształcenie od przedszkola po szkołę średnią. Wysoki poziom nauczania, bogata oferta zajęć pozalekcyjnych i indywidualne podejście do ucznia. Zapisz się już dziś!',
  keywords:
    'PZS Złoczew, Powiatowy Zespół Szkół, szkoła Złoczew, edukacja, kształcenie, Technikum, Branżówka, liceum, zajęcia pozalekcyjne, rozwój ucznia, nowoczesna edukacja, szkoła średnia, wsparcie edukacyjne, zajęcia sportowe, koła zainteresowań, wymiana międzynarodowa',
}

export default function mainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <nav className="backdrop-blur-sm bg-foreground border-b-2 shadow-md  text-background sticky top-0 left-0 z-50">
        <div className=" max-w-[1440px] mx-auto">
          <Nav />
        </div>
      </nav>

      <div className="mx-auto pb-10">
        <main>{children}</main>
      </div>

      <footer className="bg-foreground text-background z-50">
        <div className=" max-w-4xl mx-auto">
          <Footer />
        </div>
      </footer>
    </div>
  )
}
