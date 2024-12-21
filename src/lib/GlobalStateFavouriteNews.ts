import { create } from "zustand";

type Store = {
  arrayOfFavouriteItems: string[];
  increasePopulation: () => void;
};
const useStore = create<Store>()((set) => ({
  arrayOfFavouriteItems:
    typeof window !== "undefined" &&
    typeof localStorage !== null &&
    typeof localStorage !== undefined &&
    localStorage.getItem("FavouriteNews") != undefined
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

export default useStore;
