'use client'
import React, { useState, ChangeEvent } from 'react'

import { uploadFile } from '@/app/actions/uploadFile'
import { Button } from '@/components/ui/button'
import { deleteFile } from '@/app/actions/deleteFile'
import Image from 'next/image'
import { Input } from '@/components/ui/input'
import DeleteFiles from './DeleteFiles'

const Upload_and_Delete_Files = () => {
  const [fileSrc, setFilseSrc] = useState<String | null>(null)
  const [fileName, setFileName] = useState<[] | null>(null)
  const [fileNameNoEdited, setFileNameNoEdited] = useState<String | null>(null)
  const [imageSrc, setImageSrc] = useState<String | null>(null)
  const [uploadMassage, setUploadMassage] = useState([null])
  const [isPending, setIsPending] = useState<boolean>(false)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file: any = e.target.files?.[0]

    if (file) {
      setUploadMassage([null])
      const reader: any = new FileReader()
      reader.onload = () => {
        setFileNameNoEdited(file.name)
        setFileName(file.name.split('.'))
        if (reader.result) {
          setImageSrc(reader.result.split(',')[0] as string)
          setFilseSrc(reader.result.split(',')[1] as string)
        }
      }
      reader.readAsDataURL(file)
    }
  }

  const uploadFileHandler = async () => {
    setIsPending(true)
    const isUploaded: any = await uploadFile({ fileSrc: fileSrc, fileName: fileName })
    setUploadMassage([isUploaded.message, isUploaded.status])
    if (isUploaded.status === 200) {
      location.reload()
    }
    setIsPending(false)
  }

  return (
    <>
      <form className="flex flex-col gap-3 mx-auto max-w-4xl  mt-3">
        <Input type="file" name="fileUpload" id="fileUpload" onChange={handleChange} />
        {uploadMassage[1] === 200 ? (
          <h2 className="text-green-500 uppercase font-extrabold">{uploadMassage[0]}</h2>
        ) : uploadMassage[1] === null || uploadMassage[0] === null ? (
          <></>
        ) : (
          <h2 className="text-red-500"> Error: {uploadMassage[0]}</h2>
        )}
        {imageSrc && fileSrc && (
          <div className={`flex flex-col gap-3 ${isPending ? 'animate-pulse' : ''}`}>
            <div className=" h-fit max-h-96 w-fit ">
              {fileNameNoEdited &&
              fileNameNoEdited.match(/\.(jpg|jpeg|png|gif|bmp|tiff|webp|svg)$/i) ? (
                <>
                  <h2 className="text-3xl uppercase text-primary font-extrabold">
                    Preview Of Image!
                  </h2>
                  <Image
                    src={imageSrc + ',' + fileSrc}
                    alt={'Image'}
                    width={100}
                    height={100}
                    className="h-80 object-cover w-max-md w-fit rounded-lg"
                  />
                </>
              ) : (
                <>
                  {' '}
                  <h2 className="text-3xl uppercase text-primary font-extrabold">
                    No Preview For Files
                  </h2>
                  <div className="w-60 h-fit p-3 flex flex-col break-words">
                    <div className="flex flex-wrap  items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="size-10"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
                        />
                      </svg>
                      <span className="break-words font-bold">{fileName}</span>
                    </div>
                  </div>
                </>
              )}
            </div>
            <div>
              <Button type="submit" onClick={uploadFileHandler} disabled={isPending}>
                Dodaj
              </Button>
            </div>
          </div>
        )}
      </form>
    </>
  )
}

export default Upload_and_Delete_Files
