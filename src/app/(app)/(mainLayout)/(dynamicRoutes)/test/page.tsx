import { unstable_noStore as noStore } from "next/cache";

import { fetchFiles } from "@/app/actions/fetchFiles";
import Image from "next/image";

import Upload_and_Delete_Files from "@/app/components/github_repo_action/Upload_and_Delete_Files";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import CardBlockClient from "./CardBlockClient";
const page = async () => {
  noStore();
  const { data } = await fetchFiles();

  return (
    <div className="flex flex-col">
      <Dialog>
        <DialogTrigger className="fixed bottom-10 right-10 z-20 rounded-2xl border border-primary bg-primary text-xl font-extrabold text-white shadow-sm shadow-primary transition-all hover:-translate-y-0.5 hover:bg-primary-foreground hover:text-primary hover:shadow-md hover:shadow-primary">
          <div className="p-5 uppercase">Dodaj plik</div>
        </DialogTrigger>
        <DialogContent className="h-5/6 w-full max-w-7xl">
          <DialogHeader>
            <DialogTitle className="uppercase">Dodaj plik</DialogTitle>
            <Upload_and_Delete_Files />
          </DialogHeader>
        </DialogContent>
      </Dialog>

      <div className="mx-auto flex min-h-[600px] max-w-screen-xl flex-wrap justify-center gap-0.5 overflow-hidden rounded-xl px-3 py-5">
        {data &&
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
              {/(jpeg|png|jpg|gif|bmp|webp|tiff|svg\+xml|x-icon|heic|heif|jp2|avif|vnd\.adobe\.photoshop)$/i.test(
                item.filetype,
              ) ? (
                <>
                  <Image
                    src={item.download_url}
                    key={item.download_url + index}
                    alt={item.download_url}
                    width={300}
                    height={300}
                    className="h-full w-fit rounded-lg"
                  />
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
                    <div className="break-words">{item.filename}</div>
                  </div>
                </>
              )}
            </CardBlockClient>
          ))}
      </div>
    </div>
  );
};

export default page;
