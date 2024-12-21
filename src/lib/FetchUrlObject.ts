'use server'

import { redirect, RedirectType } from 'next/navigation'

export const FetchUrlObject = async ({
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

export const redirectToFetcheUrlObject = async ({
  leftJoinPrefix,
  rightJoinPrefix,
  searchParams,
  formData,
}: {
  leftJoinPrefix?: string
  rightJoinPrefix?: string
  searchParams?: any
  formData?: any
}) => {
  return redirect(
    `/news/${FetchUrlObject({
      keyData: ['page', 'year'],
      valueData: ['1', formData.getAll('year').join(',')],
      searchParamsObject: searchParams,
    })}&scrollToTop=true`,
    RedirectType.replace,
  )
}
