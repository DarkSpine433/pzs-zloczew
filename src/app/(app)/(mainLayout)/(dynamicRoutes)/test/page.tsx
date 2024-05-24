'use client'
import React, { useState, ChangeEvent } from 'react'

const FileUpload: React.FC = () => {
  const [file, setFile] = useState<File | null>(null)
  const [message, setMessage] = useState<string>('')

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0])
    }
  }

  const handleUpload = async () => {
    if (!file) {
      setMessage('Please select a file first.')
      return
    }

    const reader = new FileReader()
    reader.onload = async () => {
      const content = (reader.result as string).split(',')[1] // Base64 encoded content
      const fileName = file.name

      try {
        const response = await fetch('/src/app/api/upload.ts', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ fileName, content }),
        })

        const data = await response.json()

        if (response.ok) {
          setMessage(`File uploaded successfully: ${data.url}`)
        } else {
          setMessage(`Error uploading file: ${data.message}`)
        }
      } catch (error: any) {
        setMessage(`Error uploading file: ${error.message}`)
      }
    }

    reader.readAsDataURL(file)
  }

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
      <p>{message}</p>
    </div>
  )
}

export default FileUpload
