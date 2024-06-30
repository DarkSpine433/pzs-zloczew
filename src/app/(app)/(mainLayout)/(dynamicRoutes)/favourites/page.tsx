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

type Props = {};

const page = (props: Props) => {
  const [favourites, setFavourites] = useState<any>([]);
  useLayoutEffect(() => {
    const fetchFavouritesClient = async () => {
      try {
        setFavourites(
          await fetchFavourites({
            ids: localStorage.getItem("FavouriteNews")?.toString()!,
          }),
        );
      } catch (err) {
        setFavourites([{ title: "Nie udało się wczytać listy ulubionych" }]);
      }
    };

    fetchFavouritesClient();
  }, []);

  return (
    <div className="mx-auto flex min-h-[600px] max-w-screen-xl flex-col px-14">
      {localStorage.getItem("FavouriteNews") === null ||
      localStorage.getItem("FavouriteNews") === undefined ||
      localStorage.getItem("FavouriteNews") === "" ? null : (
        <Carousel
          opts={{
            dragFree: true,
          }}
          className=""
        >
          <h2 className="py-5 text-3xl font-bold">Aktualności</h2>
          <CarouselContent>
            {favourites.map((value, index) => (
              <CarouselItem className="max-w-96">
                <TemplateNews index={index} key={index} doc={value}>
                  {value.title}
                </TemplateNews>
              </CarouselItem>
            ))}{" "}
          </CarouselContent>{" "}
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      )}
      <div className="flex"></div>
    </div>
  );
};

export default page;
