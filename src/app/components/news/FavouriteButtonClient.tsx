"use client";

import {
  favouriteDeleateOrAdd,
  fetchFavourites,
} from "@/app/actions/favouriteNewsAction";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

type Props = {
  id: string;
};

const FavouriteButtonClient = ({ id }: Props) => {
  const [isFavourite, setIsFavourite] = useState(false);
  const [loading, setLoading] = useState(false);
  const addFavouriteHandler = async (
    event: React.FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();

    setLoading(true);
    try {
      await favouriteDeleateOrAdd({ id: id });
      setIsFavourite(!isFavourite);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };
  useEffect(() => {
    const favourites = async () => {
      setIsFavourite(await fetchFavourites({ id: id }));
    };
    favourites();
  }, [id]);
  return (
    <form
      onSubmit={addFavouriteHandler}
      className={`absolute right-3 top-2 transition-all ${loading ? "opacity-0" : "opacity-100"}`}
    >
      <Button
        variant={"secondary"}
        type="submit"
        name="favourite"
        className="group rounded-xl px-4 py-5 text-primary transition-all hover:shadow-lg hover:shadow-primary hover:outline hover:outline-2 hover:outline-primary"
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
  );
};

export default FavouriteButtonClient;
