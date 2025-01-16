'use client'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { SheetClose, SheetTitle } from '@/components/ui/sheet'
import Link from 'next/link'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import configPromise from '@/payload.config'
import { FetchUrlObject } from '@/lib/FetchUrlObject'
import { redirect, RedirectType } from 'next/navigation'
import Form from 'next/form'
import { useState } from 'react'

import { useRouter } from 'next/navigation'
import { Tooltip } from '@nextui-org/tooltip'
import { cn } from '@/lib/utils'
import { Slider } from '@/components/ui/slider'

type SliderProps = React.ComponentProps<typeof Slider>
type Props = {
  searchParams: any
  newDate: number
  lastData: number
}

const NewFilterComponentclient = ({ searchParams, newDate, lastData }: Props) => {
  const searchParamsYearLastDate = Number(searchParams.year?.split(',')[0])
  const searchParamsYearnNewDate = Number(searchParams.year?.split(',')[1])

  const [value, setValue] = useState([
    searchParamsYearLastDate >= Number(lastData) && searchParamsYearLastDate <= Number(newDate)
      ? searchParamsYearLastDate
      : lastData,
    searchParamsYearnNewDate >= Number(lastData) && searchParamsYearnNewDate <= Number(newDate)
      ? searchParamsYearnNewDate
      : newDate,
  ])

  const router = useRouter()
  console.log(value, searchParams.year?.split(','), newDate, lastData)

  return (
    <div className="flex flex-col gap-5 py-5">
      <SheetTitle className="text-xl font-extrabold">Filtry</SheetTitle>
      <div className="flex flex-col gap-3">
        {newDate != lastData && (
          <div className="pl-1">
            <h3 className="text-lg font-semibold">Rok</h3>
            <div className="ml-3 flex flex-col flex-wrap gap-5 border-l py-3">
              <Slider
                defaultValue={[value[0], value[1]]}
                max={Number(newDate)}
                min={Number(lastData)}
                value={value}
                onValueChange={(value) => setValue(value)}
                step={1}
                name="year"
              />
            </div>
          </div>
        )}
        <div className="ustify-center flex gap-2">
          <SheetClose
            onClick={() =>
              router.push(`${newDate != lastData ? `?year=${value}` : ''}`, { scroll: false })
            }
            type="submit"
            className="w-full py-2 bg-primary  text-center text-white hover:bg-primary/20 hover:text-primary hover:shadow-sm hover:shadow-primary/60 shadow-md shadow-primary/60 transition-all hover:translate-y-0.5"
          >
            Zastosuj
          </SheetClose>
          <Link
            href={'/news'}
            scroll={false}
            replace={true}
            className="py-2 w-full  bg-destructive text-center text-white hover:bg-destructive/20 hover:text-destructive hover:shadow-sm hover:shadow-destructive/60 shadow-md shadow-destructive/60 transition-all hover:translate-y-0.5"
          >
            <SheetClose type="reset">Resetuj</SheetClose>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NewFilterComponentclient
