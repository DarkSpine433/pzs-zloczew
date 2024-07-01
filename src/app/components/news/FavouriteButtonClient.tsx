"use client";

import {
  favouriteDeleateOrAdd,
  fetchFavourites,
} from "@/app/actions/favouriteNewsAction";
import { Button } from "@/components/ui/button";
import { useState, useLayoutEffect } from "react";
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

type Props = {
  id: string;
  isBlock?: boolean;
  className?: string;
};

const FavouriteButtonClient = ({ id, isBlock, className }: Props) => {
  const [isFavourite, setIsFavourite] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isDialogFavouriteAccept, setIsDialogFavouriteAccept] = useState(false);
  const addFavouriteHandler = async (
    event: React.FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();
    localStorage.getItem("isDialogFavouriteAccept")
      ? setIsDialogFavouriteAccept(true)
      : setIsDialogFavouriteAccept(false);
    setLoading(true);
    try {
      await favouriteDeleateOrAdd({ id: id });

      setIsFavourite(!isFavourite);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };
  useLayoutEffect(() => {
    localStorage.getItem("isDialogFavouriteAccept")
      ? setIsDialogFavouriteAccept(true)
      : setIsDialogFavouriteAccept(false);
  }, [
    localStorage.getItem("isDialogFavouriteAccept"),
    isDialogFavouriteAccept,
  ]);

  useLayoutEffect(() => {
    setIsFavourite(fetchFavourites({ id: id })!);
  }, [id]);
  return (
    <>
      {isDialogFavouriteAccept ? (
        <form
          onSubmit={addFavouriteHandler}
          className={`${isBlock ? "" : "absolute right-5 top-2"} transition-all ${loading ? "opacity-0" : "opacity-100"}`}
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
              strokeWidth={1.5}
              stroke="currentColor"
              className={`size-6 ${isFavourite ? "fill-primary" : ""}`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
              />
            </svg>
          </Button>
        </form>
      ) : (
        <AlertDialog>
          <AlertDialogTrigger>
            <form
              onSubmit={addFavouriteHandler}
              className={`${isBlock ? "" : "absolute right-5 top-2"} transition-all ${loading ? "opacity-0" : "opacity-100"}`}
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
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className={`size-6 ${isFavourite ? "fill-primary" : ""}`}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                  />
                </svg>
              </Button>
            </form>
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
