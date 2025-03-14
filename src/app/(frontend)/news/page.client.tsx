'use client'
import { useHeaderTheme } from '@/providers/HeaderTheme'

const PageClient = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="after:to-gray-black/30 relative z-10 block space-y-5 overflow-hidden border-b-8 border-gray-500 bg-[url('https://i.ibb.co/gVrnYp5/news.webp')] bg-cover bg-center bg-no-repeat py-5 pb-14 shadow-lg after:absolute after:inset-0 after:left-0 after:top-0 after:z-[-5] after:block after:h-full after:w-full after:bg-foreground/60 after:bg-gradient-to-b after:from-foreground after:content-[''] sm:space-y-10 sm:py-20">
        <h1 className="bg-[url('/img/news/grain.jpg')] bg-clip-text text-center text-[3rem] font-extrabold tracking-widest text-background/40 sm:text-7xl md:text-8xl lg:text-9xl">
          Aktualności
        </h1>
        <h3 className="mx-auto max-w-4xl bg-[url('/img/news/grain.jpg')] bg-clip-text px-6 text-left text-sm tracking-widest text-gray-500/20 md:text-base">
          <ol className="flex flex-col gap-2 [&>li]:first-letter:uppercase [&>li]:first-letter:text-primary">
            <li>Najnowsze informacje i wydarzenia życia szkoły.</li>
            <li>
              Regularnie publikujemy wiadomości o osiągnięciach uczniów, relacje z wydarzeń
              szkolnych, informacje o nadchodzących konkursach oraz ogłoszenia dla rodziców i
              uczniów.
            </li>
            <li>
              Nasza strona jest najlepszym źródłem, aby być na bieżąco z tym, co dzieje się w naszej
              szkole.
            </li>
            <li>Zapraszamy do regularnego odwiedzania i śledzenia naszych aktualności!</li>
          </ol>
        </h3>
      </div>
      <div
        className="mx-auto flex w-full max-w-screen-2xl flex-col justify-center gap-10 px-5 pt-20"
        id="NewsTop"
      >
        {children}
      </div>
    </>
  )
}

export default PageClient
