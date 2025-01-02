'use client'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { SheetClose } from '@/components/ui/sheet'
import Link from 'next/link'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import configPromise from '@/payload.config'
import { FetchUrlObject } from '@/lib/FetchUrlObject'
import { redirect, RedirectType } from 'next/navigation'
import Form from 'next/form'
import { useState } from 'react'
import { Slider } from '@nextui-org/slider'
import { useRouter } from 'next/navigation'
import { Tooltip } from '@/components/ui/tooltip'
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
      <h2 className="text-xl font-extrabold">Filtry</h2>

      <div className="flex flex-col gap-3">
        {newDate != lastData && (
          <div className="pl-1">
            <h3 className="text-lg font-semibold">Rok</h3>
            <div className="ml-3 flex flex-col flex-wrap gap-5 border-l py-3">
              <Slider
                classNames={{
                  track: 'border-2 border-gray-300  rounded-none',
                  base: 'max-w-md',
                  filler: 'bg-gradient-to-r from-primary-500 to-secondary-400',
                  labelWrapper: 'mb-2',
                  label: 'font-medium text-default-700 text-medium',
                  value: 'font-medium text-default-500 text-small',
                  thumb: [
                    'transition-size',
                    'text-background font-extrabold bg-primary border border-secondary shadow-lg shadow-primary rounded-full w-7 h-7',
                    'data-[dragging=true]:shadow-md data-[dragging=true]:cursor-grab data-[dragging=true]:shadow-primary data-[dragging=true]:rounded-lg',
                    'data-[dragging=true]:w-8 data-[dragging=true]:h-8 data-[dragging=true]:after:h-7 data-[dragging=true]:after:w-7',
                  ],
                  step: 'data-[in-range=true]:bg-black/30 dark:data-[in-range=true]:bg-white/50',
                }}
                formatOptions={{ style: 'decimal' }}
                label=" "
                maxValue={newDate}
                minValue={lastData}
                step={1}
                value={value}
                //@ts-ignore
                onChange={setValue}
                showOutline={true}
                showSteps={true}
                showTooltip={true}
                tooltipProps={{
                  offset: 10,
                  placement: 'bottom',
                  classNames: {
                    base: [
                      // arrow color
                      'before:bg-gradient-to-r before:from-secondary before:to-primary',
                    ],
                    content: [
                      'py-2 shadow-xl',
                      'text-background font-extrabold bg-primary border border-secondary shadow-lg shadow-primary rounded-lg',
                    ],
                  },
                }}
                tooltipValueFormatOptions={{
                  style: 'decimal',
                }}
              />
            </div>
          </div>
        )}
        <div className="ustify-center flex gap-5">
          <SheetClose
            onClick={() =>
              router.push(`${newDate != lastData ? `?year=${value}` : ''}`, { scroll: false })
            }
          >
            <Button type="submit" className="w-full py-5">
              Zastosuj
            </Button>{' '}
          </SheetClose>
          <Link href={'/news'} scroll={false} replace={true}>
            <SheetClose>
              <Button type="reset" className="py-5" variant={'destructive'}>
                Resetuj
              </Button>
            </SheetClose>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NewFilterComponentclient
