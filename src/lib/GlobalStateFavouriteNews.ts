import { create } from 'zustand'

type Props = {
  favouriteItems: string[]
  updateFavouriteItems: () => void
}

const useGlobalState = ({ collection = 'News' }: { collection?: string }) => {
  const collectionName = `Favourite${collection[0].toUpperCase() + collection.slice(1)}`
  const useGlobalStateWithCollection = create<Props>((set) => ({
    favouriteItems:
      typeof window !== 'undefined' &&
      typeof localStorage !== 'undefined' &&
      localStorage.getItem(collectionName)
        ? (localStorage.getItem(collectionName)?.split(',') ?? [])
        : [],

    updateFavouriteItems: () =>
      set(() => ({
        favouriteItems:
          typeof window !== 'undefined' && typeof localStorage !== 'undefined'
            ? (localStorage.getItem(collectionName)?.split(',') ?? [])
            : [],
      })),
  }))

  return useGlobalStateWithCollection
}

export default useGlobalState
