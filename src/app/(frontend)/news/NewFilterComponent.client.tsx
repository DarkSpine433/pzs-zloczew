'use client '
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { SheetClose } from '@/components/ui/sheet'
import Link from 'next/link'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import configPromise from '@/payload.config'
import { FetchUrlObject } from '@/lib/FetchUrlObject'
import { redirect, RedirectType } from 'next/navigation'
import Form from 'next/form'
type Props = {
  searchParams: any
  newDate: number
  lastData: number
}

const NewFilterComponentclient = ({ searchParams, newDate, lastData }: Props) => {
  return (
    <div className="flex flex-col gap-5 py-5">
      <h2 className="text-xl font-extrabold">Filtry</h2>

      <form className="flex flex-col gap-3">
        <div className="pl-1">
          <h3 className="text-lg font-semibold">Rok</h3>
          <div className="ml-3 flex flex-col flex-wrap gap-5 border-l py-3">
            {[...Array(newDate - lastData + 1)].map((_, i) => (
              <div className="flex h-fit w-fit items-center border-b pl-3" key={i}>
                <Checkbox
                  value={lastData + i}
                  defaultChecked={
                    searchParams.year?.includes((lastData + i).toString()) ? true : false
                  }
                  id={`terms-${i}`}
                  name="year"
                  className="size-6"
                />
                <label
                  htmlFor={`terms-${i}`}
                  className="pl-2 text-lg leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {lastData + i}
                </label>
              </div>
            ))}
          </div>
        </div>
        <div className="ustify-center flex gap-5">
          <SheetClose>
            <Button type="submit" className="w-full py-5">
              Zastosuj
            </Button>{' '}
          </SheetClose>
          <Link href={'/news'}>
            <SheetClose>
              <Button type="reset" className="py-5" variant={'destructive'}>
                Resetuj
              </Button>
            </SheetClose>
          </Link>
        </div>
      </form>
    </div>
  )
}

export default NewFilterComponentclient
