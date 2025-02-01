'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { FetchUrlObject } from '@/lib/FetchUrlObject'
import Link from 'next/link'
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { Card } from '../ui/card'

type PaginationInputProps = {
  data: any
  searchParams: { [key: string]: string | string[] | undefined }
}

const PaginationInputClient = ({ data, searchParams }: PaginationInputProps) => {
  const [currentPage, setCurrentPage] = useState<number | undefined>(
    Number(searchParams['page']) || undefined,
  )
  const [isOutOfRange, setIsOutOfRange] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  useLayoutEffect(() => {
    if (inputRef.current) {
      inputRef.current.value = String(searchParams['page'] || '')
    }
    setCurrentPage(Number(searchParams['page']) || undefined)
  }, [searchParams['page']])
  useEffect(() => {
    Number(currentPage) == Number(searchParams['page'])
      ? setIsOutOfRange(true)
      : setIsOutOfRange(false)
  })
  return (
    <div className="flex w-fit max-w-60 flex-row items-center justify-center gap-2">
      <style>{`
      /* Chrome, Safari, Edge, Opera */
      input::-webkit-outer-spin-button,
      input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }

      /* Firefox */
      input[type=number] {
        -moz-appearance: textfield;
      }
      `}</style>
      <Input
        className={`w-10 min-w-10 border-primary px-2 text-center invalid:border-red-500 focus-within:border-primary/50`}
        name="page"
        type="number"
        min={1}
        max={data.totalPages}
        ref={inputRef}
        onChange={(e) => {
          const value = e.target.valueAsNumber
          setCurrentPage(value)
          if (value < 1 || value > data.totalPages) {
            setIsOutOfRange(true)
          } else {
            setIsOutOfRange(false)
          }
        }}
        placeholder="..."
      />
      <span className="text-gray-500">z&nbsp;{data.totalPages}</span>
      <Link
        href={{
          query: { ...searchParams, page: currentPage },
        }}
        scroll={false}
        className={`w-full md:w-3/6 ${isOutOfRange ? 'pointer-events-none opacity-80' : ''}`}
      >
        <Button className="w-full max-w-14">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-6"
          >
            <path d="M8.25 10.875a2.625 2.625 0 1 1 5.25 0 2.625 2.625 0 0 1-5.25 0Z" />
            <path
              fillRule="evenodd"
              d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.125 4.5a4.125 4.125 0 1 0 2.338 7.524l2.007 2.006a.75.75 0 1 0 1.06-1.06l-2.006-2.007a4.125 4.125 0 0 0-3.399-6.463Z"
              clipRule="evenodd"
            />
          </svg>
        </Button>
      </Link>
    </div>
  )
}

export default PaginationInputClient
