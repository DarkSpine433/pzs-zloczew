'use client'
import { Button } from '@/components/ui/button'

import { deleteFile } from '@/app/actions/deleteFile'
import { useState } from 'react'
import Link from 'next/link'
type Props = {
  sha: String
  path: String
  download_url?: String
}

const DeleteFiles = ({ sha, path, download_url }: Props) => {
  const [uploadMassage, setUploadMassage] = useState([null])
  const deleteFileHandler = async () => {
    const isDeleted: any = await deleteFile({ sha: sha!, path: path! })
    setUploadMassage([isDeleted.message, isDeleted.status])
    if (isDeleted.status === 200) {
      location.reload()
    }
  }
  return (
    <div className="flex flex-col gap-3">
      {uploadMassage[0] && <p className="text-wrap ">{uploadMassage[0]}</p>}
      {download_url && (
        //@ts-ignore
        <Link href={download_url}>
          <Button className="uppercase">Download</Button>
        </Link>
      )}
      <Button onClick={deleteFileHandler} variant={'destructive'} className="uppercase">
        Delete
      </Button>
    </div>
  )
}

export default DeleteFiles
