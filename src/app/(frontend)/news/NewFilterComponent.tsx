import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { SheetClose } from '@/components/ui/sheet'
import Link from 'next/link'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import configPromise from '@/payload.config'
import { FetchUrlObject } from '@/lib/FetchUrlObject'
import { permanentRedirect } from 'next/navigation'
type Props = {
  searchParams: { [key: string]: string | string[] | undefined }
}

const NewFilterComponent = async ({ searchParams }: Props) => {
  const payload = await getPayloadHMR({ config: configPromise })
  const { docs } = await payload.find({
    collection: 'news',
    limit: 1,
    sort: '-createdYear',
  })
  const newDate = Number(docs[0].createdYear)

  const data = await payload.find({
    collection: 'news',
    limit: 1,
    sort: 'createdYear',
  })

  const lastData = Number(data.docs[0].createdYear)

  const filterHandler = async (formData: FormData) => {
    'use server'

    return permanentRedirect(
      '/news/' +
        FetchUrlObject({
          keyData: ['page', 'year'],
          valueData: ['1', formData.getAll('year').join(',')],
          searchParamsObject: searchParams,
        }),
    )
  }

  return (
    <div className="flex flex-col gap-5 py-5">
      <h2 className="text-xl font-extrabold">Filtry</h2>

      <form action={filterHandler} className="flex flex-col gap-3">
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

export default NewFilterComponent
