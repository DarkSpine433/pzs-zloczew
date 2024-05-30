import React, { useState, ChangeEvent, useEffect } from 'react'

import { uploadFile } from '@/app/actions/uploadFile'
import { Button } from '@/components/ui/button'
import { deleteFile } from '@/app/actions/deleteFile'
import { fetchFiles } from '@/app/actions/fetchFiles'

const page = async () => {
  const files = await fetchFiles()

  console.log(files)
  return (
    <>
      <div></div>
    </>
  )
}

export default page
