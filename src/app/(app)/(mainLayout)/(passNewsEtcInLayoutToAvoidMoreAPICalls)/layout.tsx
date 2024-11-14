import Section from "@/app/components/mainPageComponents/Section";
import RecentNews from "@/app/components/news/recentNews/RecentNews";

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
      {children}

      <div className="border-b-4 border-t border-b-foreground/50 border-t-primary/10 bg-secondary/50">
        <Section className="" maxWidth="max-w-6xl ">
          <hr className="absolute -top-0.5 m-0 h-[0.1rem] w-full border-none bg-gradient-to-r from-transparent from-10% via-primary to-transparent to-90% p-0" />

          <RecentNews repetation={10} />
        </Section>
      </div>
    </div>
  );
}
