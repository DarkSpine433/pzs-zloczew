import { create } from 'zustand'

type Store = {
  favouriteItems: string[]
  updateFavouriteItems: () => void
}

const useGlobalState = create<Store>((set) => ({
  favouriteItems:
    typeof window !== 'undefined' &&
    typeof localStorage !== 'undefined' &&
    localStorage.getItem('FavouriteNews')
      ? (localStorage.getItem('FavouriteNews')?.split(',') ?? [])
      : [],

  updateFavouriteItems: () =>
    set(() => ({
      favouriteItems:
        typeof window !== 'undefined' && typeof localStorage !== 'undefined'
          ? (localStorage.getItem('FavouriteNews')?.split(',') ?? [])
          : [],
    })),
}))

export default useGlobalState
