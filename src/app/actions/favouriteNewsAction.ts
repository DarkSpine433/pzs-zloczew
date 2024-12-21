type Props = {
  id: string
  collection?: string
}

export const favouriteDeleateOrAdd = ({ id, collection = 'News' }: Props) => {
  const collectionName = `Favourite${collection[0].toUpperCase() + collection.slice(1)}`
  if (typeof localStorage !== 'undefined') {
    if (localStorage.getItem(collectionName)?.split(',').includes(id)) {
      const storage = localStorage
        .getItem(collectionName)
        ?.split(',')
        .filter((v) => v.length > 0)!

      storage?.splice(storage?.indexOf(id), 1)
      localStorage.removeItem(collectionName)
      localStorage.setItem(collectionName, storage.join(','))
    } else {
      const storage =
        localStorage.getItem(collectionName) !== null &&
        localStorage.getItem(collectionName) !== undefined &&
        localStorage.getItem(collectionName) !== ''
          ? localStorage.getItem(collectionName) + ','
          : ''

      localStorage.setItem(collectionName, storage + id)
    }
  }
}

// export const fetchFavourites = () => {
//   return localStorage.getItem(collectionName)
// }
