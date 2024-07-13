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
  return <>{children}</>;
}
