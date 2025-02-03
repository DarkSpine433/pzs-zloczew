//@ts-nocheck

'use client'
import React, { useState, ChangeEvent, useEffect } from 'react'
import { getShaInfoToCheckIfFileAlreadyExists, uploadFile } from '@/app/actions/uploadFile'
import DocViewer, { DocViewerRenderers } from '@cyntler/react-doc-viewer'
import '@cyntler/react-doc-viewer/dist/index.css'
import './style.css'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { sha1 } from 'crypto-hash'
import { set } from 'date-fns'
import globalStateUpdateUiAfterUpload from '@/lib/GlobalStateUpdateUiAfterUpload'
const crypto = require('crypto')
const Upload_and_Delete_Files = () => {
  const GlobalStateUpdateUiAfterUploadUpdateData = globalStateUpdateUiAfterUpload(
    (state) => state.updateUiAfterUpload,
  )
  const [statusOfUpload, setStatusOfUpload] = useState<[]>([])
  const [statusMessage, setStatusMessage] = useState<[]>([])
  const [selectedDocs, segetFileInfoelectedDocs] = useState<File[]>([])

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file: any = e.target.files?.[0]

    if (file) {
      e.target.files?.length && segetFileInfoelectedDocs(Array.from(e.target.files))
    }
  }

  const uploadFileHandler = async () => {
    const promiseFunctionToGetInfoAboutFile = (file: any) => {
      return new Promise((resolve, reject) => {
        const reader: any = new FileReader()
        reader.onerror = () => {
          reader.abort()
          reject(new Error('Problem parsing input file.'))
        }
        reader.onload = () => {
          resolve({
            fileSrc: reader.result.split(',')[1] as string,
            fileName: file.name,
            fileType: file.type,
          })
        }
        reader.readAsDataURL(file)
      })
    }
    const setMessageAndStatus = (message: string, status: number) => {
      setStatusOfUpload((prevItems) => [...prevItems, status])
      setStatusMessage((prevItems) => [...prevItems, message])
    }
    const getGitHubSHA = async (base64: String) => {
      const content = Buffer.from(base64, 'base64')

      // Create Git blob header (blob <size>\0)
      const size = content.length
      const header = `blob ${size}\0`

      // Concatenate the header and content
      const store = Buffer.concat([Buffer.from(header, 'utf8'), content])

      // Generate SHA-1 hash
      const sha1 = crypto.createHash('sha1')
      sha1.update(store)

      // Return the hash in hex format
      return sha1.digest('hex')
    }

    selectedDocs.forEach(async (file, index) => {
      try {
        const getFileInfo: any = await promiseFunctionToGetInfoAboutFile(file)
        const gitHubSha = await getGitHubSHA(getFileInfo.fileSrc)
        const checkIfFileExists = await getShaInfoToCheckIfFileAlreadyExists(gitHubSha)

        if (checkIfFileExists) {
          return setMessageAndStatus('Already uploaded', 409)
        } else {
          const isUploaded: any = await uploadFile({
            fileSrc: getFileInfo.fileSrc,
            fileName: getFileInfo.fileName,
            fileType: getFileInfo.fileType,
          })
          console.log(getGitHubSHA(getFileInfo.fileSrc), '-', isUploaded.sha)
          //@ts-ignore

          if (selectedDocs.length - 1 === index) {
            return [
              setMessageAndStatus(isUploaded.message, isUploaded.status),
              GlobalStateUpdateUiAfterUploadUpdateData(),
            ]
          }
          return setMessageAndStatus(isUploaded.message, isUploaded.status)
        }
      } catch (err) {
        console.log(err, 12)
      }
    })
  }

  return (
    <>
      <div className="mx-auto mt-3 flex w-fit flex-col gap-3">
        <Input multiple type="file" name="fileUpload" id="fileUpload" onChange={handleChange} />

        <DocViewer
          documents={selectedDocs.map((file) => ({
            uri: window.URL.createObjectURL(file),
            fileName: file.name,
          }))}
          style={{ width: '100%', height: 'fit-content' }}
          pluginRenderers={DocViewerRenderers}
        />
        {selectedDocs.length > 0 && (
          <div>
            <h3 className="">Uploaded Files</h3>
            <ol className="list-inside list-decimal border-l border-black">
              {selectedDocs.map((file, index) => {
                return (
                  <li
                    key={file.name + index.toString()}
                    className={`border-2 ${
                      statusOfUpload[index] !== 200 && statusOfUpload[index] > 0
                        ? 'border-destructive '
                        : statusOfUpload[index] === 200
                          ? 'border-green-500'
                          : ' w-fit border-b border-b-black px-3'
                    } `}
                  >
                    {file.name}
                    {statusOfUpload[index] > 0 && statusMessage[index].length > 0 && (
                      <>
                        &nbsp;
                        <span
                          className={`underline ${
                            statusOfUpload[index] !== 200 && statusOfUpload[index] > 0
                              ? ' text-destructive '
                              : statusOfUpload[index] === 200 && 'text-green-500'
                          } `}
                        >
                          {statusMessage[index]}
                        </span>
                        &nbsp; Status:
                        <span className="font-semibold">{statusOfUpload[index]}</span>
                      </>
                    )}
                  </li>
                )
              })}
            </ol>
          </div>
        )}
        {selectedDocs.length > 0 && (
          <Button type="submit" onClick={uploadFileHandler} className="w-full">
            Upload
          </Button>
        )}
      </div>
    </>
  )
}

export default Upload_and_Delete_Files
