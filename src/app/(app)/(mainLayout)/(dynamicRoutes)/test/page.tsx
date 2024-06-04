import { fetchFiles } from '@/app/actions/fetchFiles'
import Image from 'next/image'
import DeleteFiles from '@/app/components/github_repo_action/DeleteFiles'
import Upload_and_Delete_Files from '@/app/components/github_repo_action/Upload_and_Delete_Files'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

const page = async () => {
  const { download_url, sha, name }: any = await fetchFiles()
  return (
    <div className="flex flex-col">
      <Dialog>
        <DialogTrigger className="fixed bottom-10 right-10 bg-primary rounded-2xl shadow-primary shadow-sm hover:shadow-md hover:shadow-primary hover:-translate-y-0.5 transition-all  text-xl font-extrabold text-white hover:text-primary hover:bg-primary-foreground border border-primary">
          <div className="uppercase p-5 ">Dodaj plik</div>
        </DialogTrigger>
        <DialogContent className=" max-w-7xl h-5/6">
          <DialogHeader>
            <DialogTitle className=" uppercase">Dodaj plik</DialogTitle>
            <Upload_and_Delete_Files />
          </DialogHeader>
        </DialogContent>
      </Dialog>

      <div className=" flex flex-wrap gap-0.5 justify-center  max-w-screen-xl mx-auto py-5 px-3 overflow-hidden rounded-xl">
        {download_url.map((item: string, index: number) => (
          <div
            key={item + index}
            className="flex flex-col gap-5 w-fit h-60  bg-background rounded-xl max-w-md relative group  "
          >
            {name[index].match(/\.(jpg|jpeg|png|gif|bmp|tiff|webp|svg)$/i) ? (
              <>
                <Image
                  src={item}
                  key={item + index}
                  alt={item}
                  width={300}
                  height={300}
                  className="h-full w-fit rounded-lg  "
                />
                <div className=" absolute flex justify-center items-center opacity-0 group-hover:opacity-100 transition-all w-full h-full group-hover:bg-black/60 rounded-lg">
                  <DeleteFiles sha={sha[index]} path={name[index]} />
                </div>
              </>
            ) : (
              <>
                <div className="size-60 p-3 flex flex-col justify-center  break-words">
                  <div className="flex flex-wrap justify-center items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-10"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
                      />
                    </svg>
                    <span className="font-extrabold uppercase">FIlLE</span>
                  </div>
                  <div className="break-words">{name[index]}</div>
                </div>
                <div className=" absolute flex justify-center items-center opacity-0 group-hover:opacity-100 transition-all w-full h-full group-hover:bg-black/60 rounded-lg">
                  <DeleteFiles
                    sha={sha[index]}
                    path={name[index]}
                    download_url={download_url[index]}
                  />
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default page
