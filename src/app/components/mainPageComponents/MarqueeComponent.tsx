"use client"; //Don't remove use client becouse of website will broke
import Marquee from "react-fast-marquee";
const Opinions = [
  {
    imie: "Anna",
    opinia: "Szkoła zapewnia świetne możliwości rozwoju osobistego",
  },
  { imie: "Piotr", opinia: "Atmosfera w szkole sprzyja nauce i kreatywności." },
  {
    imie: "Katarzyna",
    opinia: "Nauczyciele są bardzo zaangażowani i pomocni.",
  },

  {
    imie: "Natalia",
    opinia: "Program nauczania jest urozmaicony i interesujący.",
  },
  {
    imie: "Łukasz",
    opinia:
      "Szkoła oferuje wiele dodatkowych zajęć i aktywności pozalekcyjnych.",
  },
  {
    imie: "Aleksandra",
    opinia:
      "Biblioteka szkolna ma bogatą kolekcję książek i materiałów edukacyjnych.",
  },
  {
    imie: "Michał",
    opinia: "W szkole panuje przyjazna atmosfera współpracy między uczniami.",
  },
  {
    imie: "Magdalena",
    opinia: "Organizowane są ciekawe wyjazdy i wycieczki edukacyjne.",
  },
];
type Props = {};
const MarqueeComponent = (props: Props) => {
  return (
    <Marquee
      autoFill={true}
      gradient={true}
      gradientWidth={30}
      speed={40}
      pauseOnHover
      pauseOnClick
      gradientColor="#EEF3FE"
    >
      {Opinions.map(({ imie, opinia }) => (
        <div
          className="ml-2 overflow-hidden rounded-lg bg-foreground p-3 text-sm text-white shadow-sm shadow-primary"
          key={imie + opinia}
        >
          <div className="font-bold">{imie}</div>
          <div className="w-72">{opinia}</div>
        </div>
      ))}
    </Marquee>
  );
};

export default MarqueeComponent;
