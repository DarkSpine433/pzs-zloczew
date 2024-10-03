import { unstable_noStore as noStore } from "next/cache";

import { fetchFiles } from "@/app/actions/fetchFiles";
import Image from "next/image";
import DeleteFiles from "@/app/components/github_repo_action/DeleteFiles";
import Upload_and_Delete_Files from "@/app/components/github_repo_action/Upload_and_Delete_Files";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import PreviewFile from "@/app/components/github_repo_action/PreviewFile";

const page = async () => {
  noStore();
  const { download_url, sha, name }: any = await fetchFiles();
  return (
    <div className="flex flex-col">
      <Dialog>
        <DialogTrigger className="fixed bottom-10 right-10 z-20 rounded-2xl border border-primary bg-primary text-xl font-extrabold text-white shadow-sm shadow-primary transition-all hover:-translate-y-0.5 hover:bg-primary-foreground hover:text-primary hover:shadow-md hover:shadow-primary">
          <div className="p-5 uppercase">Dodaj plik</div>
        </DialogTrigger>
        <DialogContent className="h-5/6 max-w-7xl">
          <DialogHeader>
            <DialogTitle className="uppercase">Dodaj plik</DialogTitle>
            <Upload_and_Delete_Files />
          </DialogHeader>
        </DialogContent>
      </Dialog>

      <div className="mx-auto flex min-h-[600px] max-w-screen-xl flex-wrap justify-center gap-0.5 overflow-hidden rounded-xl px-3 py-5">
        {download_url.map((item: string, index: number) => (
          <div
            key={item + index}
            className="group relative flex h-60 w-fit max-w-md flex-col gap-5 rounded-xl bg-background"
          >
            {name[index].match(/\.(jpg|jpeg|png|gif|bmp|tiff|webp|svg)$/i) ? (
              <>
                <Image
                  src={item}
                  key={item + index}
                  alt={item}
                  width={300}
                  height={300}
                  className="h-full w-fit rounded-lg"
                />
                <div className="absolute flex h-full w-full flex-col items-center justify-center gap-3 rounded-lg opacity-0 transition-all group-hover:bg-black/60 group-hover:opacity-100">
                  <PreviewFile
                    sha={sha[index]}
                    path={name[index]}
                    FileSrc={item}
                  />
                  <DeleteFiles sha={sha[index]} path={name[index]} />
                </div>
              </>
            ) : (
              <>
                <div className="flex size-60 flex-col justify-center break-words p-3">
                  <div className="flex flex-wrap items-center justify-center">
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
                <div className="absolute flex h-full w-full items-center justify-center rounded-lg opacity-0 transition-all group-hover:bg-black/60 group-hover:opacity-100">
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
  );
};

export default page;
