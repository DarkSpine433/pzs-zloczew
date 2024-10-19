import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
import DeleteFiles from "../DeleteFiles";
import PreviewDoc from "./PreviewDoc";
import PreviewImage from "./PreviewImage";

type Props = {
  sha: String;
  path: String;
  FileSrc: any;
  fileType: String;
  id: String;
  children?: React.ReactNode;
};

const PreviewFile = ({ sha, path, FileSrc, fileType, children, id }: Props) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-full max-w-28 uppercase">Preview</Button>
      </DialogTrigger>
      <DialogContent className="m-0 h-5/6 w-[98%] max-w-7xl overflow-x-hidden rounded-xl border-0 p-0 outline-none">
        <DialogHeader>
          <PreviewDoc
            path={path as string}
            fileSrc={sha}
            fileType={fileType as string}
            id={id}
          />
          <DialogTitle className="break-all px-2 text-left">
            <div className="pb-3">{children}</div>
          </DialogTitle>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default PreviewFile;
