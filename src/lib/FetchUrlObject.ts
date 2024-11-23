export const FetchUrlObject = ({
  keyData,
  valueData,
  searchParamsObject,
}: {
  keyData?: string[]
  valueData?: string[]
  searchParamsObject: any
}) => {
  var urlSearchString = `?`
  keyData &&
    valueData &&
    keyData?.map((key, i) => {
      urlSearchString += (i > 0 ? '&' : '') + new URLSearchParams({ [key]: valueData[i] })
    })

  Object.keys(searchParamsObject).forEach((key) => {
    if (key === 'page' || key === 'year') {
      if (!urlSearchString.includes(key)) {
        urlSearchString +=
          (urlSearchString.length > 1 ? `&` : '') +
          `${new URLSearchParams({ [key]: searchParamsObject[key] })}`
      }
    }
  })

  return urlSearchString
}
