"use client";

import { useLayoutEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { fetchFavourites } from "@/app/actions/fetchFavourites";
import TemplateNews from "@/app/components/news/TemplateNews";
import { title } from "process";
import { BarLoader, HashLoader, RotateLoader } from "react-spinners";
import SpinerLoader from "@/app/components/SpinerLoader";
import Link from "next/link";
import { Button } from "@/components/ui/button";

type Props = {};

const page = (props: Props) => {
  const [favourites, setFavourites] = useState<any>({});
  const [isLoading, setIsLoading] = useState(true);
  useLayoutEffect(() => {
    const fetchFavouritesClient = async () => {
      try {
        setFavourites(
          await fetchFavourites({
            idsNews: localStorage.getItem("FavouriteNews")?.toString()!,
          }),
        );
      } catch (err) {
        setFavourites([{ title: "Nie udało się wczytać listy ulubionych" }]);
      }
    };
    if (
      localStorage.getItem("FavouriteNews") === null ||
      localStorage.getItem("FavouriteNews") === undefined ||
      localStorage.getItem("FavouriteNews") === ""
    ) {
      setFavourites({ newsMessage: "Brak zapisanych artykułów" });
    } else {
      fetchFavouritesClient();
    }
    setIsLoading(false);
  }, []);

  return (
    <>
      {" "}
      <div className="after:to-gray-black/30 ] relative z-10 block space-y-5 overflow-hidden border-b-8 border-gray-400 bg-cover bg-center bg-no-repeat py-5 pb-14 shadow-lg after:absolute after:inset-0 after:left-0 after:top-0 after:z-[-5] after:block after:h-full after:w-full after:bg-foreground/60 after:bg-gradient-to-b after:from-foreground after:content-[''] sm:space-y-10 sm:py-20">
        <h1 className="text-center text-[3rem] font-extrabold tracking-widest text-background sm:text-7xl md:text-8xl lg:text-9xl">
          Zapisane
        </h1>
      </div>
      <div className="mx-auto my-5 flex min-h-[600px] max-w-screen-xl flex-col gap-10 px-5">
        <Carousel
          opts={{
            dragFree: true,
          }}
          className="rounded-lg border border-primary bg-secondary/50 px-3 pb-3 shadow-lg"
        >
          <h2 className="py-5 text-3xl font-bold">Aktualności</h2>
          {isLoading ? (
            <div className="h-80">
              <SpinerLoader />
            </div>
          ) : (
            <div className="min-h-80">
              {favourites.news ? (
                <>
                  <CarouselContent>
                    {favourites.news.map((value: any, index: number) => (
                      <CarouselItem className="max-w-96" key={index + value.id}>
                        <TemplateNews index={index} key={index} doc={value} />
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="-left-4 size-12 bg-background/90 p-3" />
                  <CarouselNext className="-right-4 size-12 bg-background/90 p-3" />
                </>
              ) : (
                <div className="h-80">
                  {favourites.newsMessage && (
                    <div className="flex h-full w-full flex-col items-center justify-center gap-5">
                      <div className="text-xl font-semibold text-destructive">
                        {favourites.newsMessage}
                      </div>
                      <Link href="/news">
                        <Button>Zobacz Więcej</Button>
                      </Link>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </Carousel>
        <Carousel
          opts={{
            dragFree: true,
          }}
          className="rounded-xl border border-primary bg-secondary px-3 pb-3"
        >
          <h2 className="py-5 text-3xl font-bold">Aktualności</h2>
          {isLoading ? (
            <div className="h-80">
              <SpinerLoader />
            </div>
          ) : (
            <>
              {favourites.news ? (
                <>
                  <CarouselContent>
                    {favourites.news.map((value: any, index: number) => (
                      <CarouselItem className="max-w-96" key={index + value.id}>
                        <TemplateNews index={index} key={index} doc={value} />
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="-left-4 z-50 size-12 bg-background/50 p-3" />
                  <CarouselNext className="-right-4 z-50 size-12 bg-background/50 p-3" />
                </>
              ) : (
                favourites.newsMessage
              )}
            </>
          )}
        </Carousel>
      </div>
    </>
  );
};

export default page;
