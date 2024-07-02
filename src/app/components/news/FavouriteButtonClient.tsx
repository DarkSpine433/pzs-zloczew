"use client";

import { favouriteDeleateOrAdd } from "@/app/actions/favouriteNewsAction";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { create } from "zustand";

type Props = {
  id: string;
  isBlock?: boolean;
  className?: string;
};
type Store = {
  arrayOfFavouriteItems: string[];
  increasePopulation: () => void;
};
const useStore = create<Store>()((set) => ({
  arrayOfFavouriteItems:
    typeof window !== "undefined" &&
    typeof localStorage !== null &&
    typeof localStorage !== undefined
      ? localStorage.getItem("FavouriteNews")?.split(",")!
      : [],

  increasePopulation: () =>
    set(() => ({
      arrayOfFavouriteItems:
        typeof window !== "undefined" &&
        typeof localStorage !== null &&
        typeof localStorage !== undefined
          ? localStorage.getItem("FavouriteNews")?.split(",")
          : [],
    })),
}));
const FavouriteButtonClient = ({ id, isBlock, className }: Props) => {
  const arrayOfFavouriteItems = useStore(
    (state) => state.arrayOfFavouriteItems,
  );
  const test2 = useStore((state) => state.increasePopulation);
  console.log(arrayOfFavouriteItems);

  const [isDialogFavouriteAccept, setIsDialogFavouriteAccept] = useState(false);
  const addFavouriteHandler = () => {
    if (
      typeof window !== "undefined" &&
      typeof localStorage !== null &&
      typeof localStorage !== undefined
    ) {
      localStorage.getItem("isDialogFavouriteAccept")
        ? setIsDialogFavouriteAccept(true)
        : setIsDialogFavouriteAccept(false);

      try {
        favouriteDeleateOrAdd({ id: id });
        test2();
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      typeof localStorage !== null &&
      typeof localStorage !== undefined
    ) {
      localStorage.getItem("isDialogFavouriteAccept")
        ? setIsDialogFavouriteAccept(true)
        : setIsDialogFavouriteAccept(false);
    }
  }, []);

  return (
    <>
      {isDialogFavouriteAccept ? (
        <div
          onClick={addFavouriteHandler}
          className={`${isBlock ? "" : "absolute right-5 top-2"} transition-all`}
        >
          <Button
            variant={"secondary"}
            type="submit"
            name="favourite"
            className={`group rounded-xl px-4 py-6 text-primary shadow shadow-primary transition-all hover:shadow-lg hover:shadow-primary hover:outline hover:outline-2 hover:outline-primary ${className}`}
          >
            {arrayOfFavouriteItems !== undefined &&
            arrayOfFavouriteItems.includes(id) ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className={`size-6 ${arrayOfFavouriteItems !== undefined && arrayOfFavouriteItems.includes(id) ? "fill-primary" : ""}`}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m3 3 1.664 1.664M21 21l-1.5-1.5m-5.485-1.242L12 17.25 4.5 21V8.742m.164-4.078a2.15 2.15 0 0 1 1.743-1.342 48.507 48.507 0 0 1 11.186 0c1.1.128 1.907 1.077 1.907 2.185V19.5M4.664 4.664 19.5 19.5"
                />
              </svg>
            )}
          </Button>
        </div>
      ) : (
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <div
              onClick={addFavouriteHandler}
              className={`${isBlock ? "" : "absolute right-5 top-2"} transition-all`}
            >
              <Button
                variant={"secondary"}
                type="submit"
                name="favourite"
                className={`group rounded-xl px-4 py-6 text-primary shadow shadow-primary transition-all hover:shadow-lg hover:shadow-primary hover:outline hover:outline-2 hover:outline-primary ${className}`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className={`size-6 ${arrayOfFavouriteItems !== undefined && arrayOfFavouriteItems.includes(id) ? "fill-primary" : ""}`}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
                  />
                </svg>
              </Button>
            </div>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle className="text-xl font-extrabold uppercase tracking-wide text-red-400 underline">
                Uwaga!
              </AlertDialogTitle>
              <AlertDialogDescription className="space-y-2 text-lg">
                <p>
                  Nasza strona internetowa ceni prywatność użytkowników, dlatego
                  nie zbieramy ani nie przechowujemy danych osobowych na naszych
                  serwerach. Wszystkie informacje są przechowywane bezpośrednio
                  na urządzeniu użytkownika.
                </p>

                <p>
                  Oznacza to, że w przypadku usunięcia danych przez użytkownika,
                  wszystkie informacje zostaną trwale usunięte i nie będzie
                  możliwości ich odzyskania. Ponadto, dane te nie są dostępne na
                  innych urządzeniach użytkownika. Dzięki temu zapewniamy
                  maksymalny poziom prywatności i bezpieczeństwa danych naszych
                  użytkowników.
                </p>
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel
                onClick={() => {
                  localStorage.setItem("isDialogFavouriteAccept", "true");
                }}
              >
                Rozumiem
              </AlertDialogCancel>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      )}
    </>
  );
};

export default FavouriteButtonClient;
