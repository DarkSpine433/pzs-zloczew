type Props = {
  id: string;
};

export const favouriteDeleateOrAdd = ({ id }: Props) => {
  if (typeof localStorage !== "undefined") {
    if (localStorage.getItem("FavouriteNews")?.split(",").includes(id)) {
      const storage = localStorage
        .getItem("FavouriteNews")
        ?.split(",")
        .filter((v) => v.length > 0)!;

      storage?.splice(storage?.indexOf(id), 1);
      localStorage.removeItem("FavouriteNews");
      localStorage.setItem("FavouriteNews", storage.join(","));
    } else {
      const storage =
        localStorage.getItem("FavouriteNews") !== null &&
        localStorage.getItem("FavouriteNews") !== undefined &&
        localStorage.getItem("FavouriteNews") !== ""
          ? localStorage.getItem("FavouriteNews") + ","
          : "";

      localStorage.setItem("FavouriteNews", storage + id);
    }
  }
};

export const fetchFavourites = ({ id }: Props) => {
  return localStorage.getItem("FavouriteNews")?.includes(id);
};
