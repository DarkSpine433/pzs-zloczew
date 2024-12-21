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
      <div className="relative z-10 block space-y-5 overflow-hidden border-b-4 border-primary bg-foreground px-10 py-5 pb-14 sm:space-y-10 sm:py-12">
        <h1 className="lg:text-9xl= bg-[url('/img/news/grain.jpg')] bg-clip-text text-center text-[4rem] font-extrabold tracking-widest text-background/40 sm:text-7xl md:text-8xl">
          Kontakt
        </h1>
        <h3 className="mx-auto max-w-4xl border-l border-gray-400 px-4 py-1 text-left text-sm tracking-widest text-gray-500 first-letter:uppercase md:text-base [&>*]:first-letter:font-extrabold [&>*]:first-letter:uppercase [&>*]:first-letter:text-primary">
          <div>
            Oto nasze dane kontaktowe, abyś mógł się z nami skontaktować.
          </div>
          <br />

          <div>
            Skontaktuj się z nami! Czekamy na Twój telefon lub e-mail, abyśmy
            mogli Ci pomóc.
          </div>
        </h3>
      </div>
      <div className="mx-auto min-h-[600px] max-w-6xl border-x px-3 py-10">
        <FetchContent />
      </div>
    </>
  );
};

export default page;
