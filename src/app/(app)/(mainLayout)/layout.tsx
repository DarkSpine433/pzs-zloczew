import Footer from "@/app/components/mainLayout/Footer";
import Nav from "@/app/components/mainLayout/Nav";
import "../globals.css";

export const metadata = {
  title: "Powiatowy Zespół Szkół w Złoczewie",
  description:
    "Powiatowy Zespół Szkół w Złoczewie to nowoczesna placówka edukacyjna oferująca wszechstronne kształcenie od przedszkola po szkołę średnią. Wysoki poziom nauczania, bogata oferta zajęć pozalekcyjnych i indywidualne podejście do ucznia. Zapisz się już dziś!",
  keywords:
    "PZS Złoczew, Powiatowy Zespół Szkół, szkoła Złoczew, edukacja, kształcenie, Technikum, Branżówka, liceum, zajęcia pozalekcyjne, rozwój ucznia, nowoczesna edukacja, szkoła średnia, wsparcie edukacyjne, zajęcia sportowe, koła zainteresowań, wymiana międzynarodowa",
};

export default function mainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <nav className="sticky left-0 top-0 z-50 mx-auto w-full bg-foreground px-10 py-1 text-background shadow-md">
        <div className="mx-auto max-w-[1200px]">
          <Nav />
        </div>
      </nav>

      <div className="mx-auto overflow-x-hidden">
        <main>{children}</main>
      </div>

      <hr className="pointer-events-none m-0 block h-[5px] w-full border-0 bg-gray-300 p-0" />
      <footer className="z-50 bg-foreground text-background">
        <div className="mx-auto max-w-7xl">
          <Footer />
        </div>
      </footer>
    </div>
  );
}
