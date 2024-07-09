import SpinerLoader from "@/app/components/SpinerLoader";
import dynamic from "next/dynamic";

const FetchContent = dynamic(() => import("./FetchContent"), {
  loading: () => <SpinerLoader />,
});
type Props = {};

const page = (props: Props) => {
  return (
    <>
      {" "}
      <div className="after:to-gray-black/30 relative z-10 block space-y-5 overflow-hidden bg-cover bg-center bg-no-repeat py-5 pb-14 after:absolute after:inset-0 after:left-0 after:top-0 after:z-[-5] after:block after:h-full after:w-full after:bg-background after:bg-gradient-to-tr after:from-foreground after:from-40% after:to-foreground/40 after:content-[''] sm:space-y-10 sm:py-20">
        <h1 className="bg-[url('/img/news/grain.jpg')] bg-clip-text text-center text-[4rem] font-extrabold tracking-widest text-background/40 sm:text-7xl md:text-8xl lg:text-9xl">
          Kontakt
        </h1>
        <h3 className="mx-auto max-w-4xl px-6 text-left text-sm tracking-widest text-primary [text-shadow:0_0_5px_blue] md:text-base">
          Oto nasze dane kontaktowe, abyś mógł się z nami skontaktować.
          <br />
          <br />
          Skontaktuj się z nami! Czekamy na Twój telefon lub e-mail, abyśmy
          mogli Ci pomóc.
        </h3>
      </div>
      <div className="mx-auto min-h-[600px] max-w-6xl px-3 pt-10">
        <FetchContent />
      </div>
    </>
  );
};

export default page;
