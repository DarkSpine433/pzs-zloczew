'use client'
import { unstable_noStore as noStore } from 'next/cache'

import { fetchFiles } from '@/app/actions/fetchFiles'
import Image from 'next/image'
import { use, useEffect, useState } from 'react'
import Upload_and_Delete_Files from '@/app/components/github_repo_action/Upload_and_Delete_Files'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import CardBlockClient from './CardBlockClient'
import dynamic from 'next/dynamic'
import { Card, CardContent, CardHeader } from '@/components/ui/card'

const PreviewDoc = dynamic(() => import('@/app/components/github_repo_action/preview/PreviewDoc'), {
  ssr: false,
})
const Page = () => {
  noStore()
  const [data, setData] = useState<any>([null])

  useEffect(() => {
    const fetchFileVar = async () => {
      const { data } = await fetchFiles()
      console.log(data, 123)
      setData(data)
    }
    fetchFileVar()
  }, [])
  if (!data) return <div>Loading...</div>
  return (
    <div className="flex flex-col">
      <Dialog>
        <DialogTrigger className="fixed bottom-10 right-10 z-20 rounded-2xl border border-primary bg-primary text-xl font-extrabold text-white shadow-sm shadow-primary transition-all hover:-translate-y-0.5 hover:bg-primary-foreground hover:text-primary hover:shadow-md hover:shadow-primary">
          <div className="p-5 uppercase">Dodaj plik</div>
        </DialogTrigger>
        <DialogContent className="h-5/6 w-full max-w-7xl">
          <DialogHeader>
            <DialogTitle className="uppercase">Dodaj plik</DialogTitle>
          </DialogHeader>
        </DialogContent>
      </Dialog>

      <div className="mx-auto flex min-h-[600px] w-full max-w-screen-xl flex-wrap justify-center gap-2 overflow-hidden rounded-xl px-3 py-5">
        {data[0] !== null &&
          data.map((item: any, index: number) => (
            <CardBlockClient
              key={item.id + index}
              sha={item.sha}
              path={item.path}
              fileType={item.filetype}
              download_url={item.download_url}
              id={item.id}
              fileName={item.filename}
              date={item.date}
            >
              <style>{`
              #header-bar {
                display: none;
                }`}</style>
              <Card className="h-fit w-full sm:w-96">
                <CardContent className="h-60 w-full">
                  <PreviewDoc
                    path={item.path as string}
                    fileSrc={item.download_url}
                    fileType={item.filetype as string}
                    fileName={' ' as string}
                  />
                </CardContent>
                {item.filename && <CardHeader className="break-words">{item.filename}</CardHeader>}
              </Card>
            </CardBlockClient>
          ))}
      </div>
    </div>
  )
}

export default Page
