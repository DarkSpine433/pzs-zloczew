import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
import DeleteFiles from "./DeleteFiles";

type Props = {
  sha: string;
  path: string;
  FileSrc: string;
};

const PreviewFile = ({ sha, path, FileSrc }: Props) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Preview</Button>
      </DialogTrigger>
      <DialogContent className="m-0 h-5/6 w-full max-w-7xl overflow-x-hidden rounded-xl border-0 p-0 outline-none sm:w-fit">
        <DialogHeader>
          <Image
            src={FileSrc}
            alt={FileSrc}
            width={900}
            height={900}
            quality={100}
            className="m-0 mx-auto h-full max-h-dvh w-full rounded-lg object-contain p-0"
          />
          <DialogTitle className="break-all px-2 text-left">
            <span className="inline-block text-primary">FIle Name:</span> &nbsp;
            <span className="mb-4 inline-block underline"> {path}</span>
            <div className="pb-3">
              <DeleteFiles sha={sha} path={path} />
            </div>
          </DialogTitle>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default PreviewFile;
