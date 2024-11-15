import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import PreviewDoc from "./PreviewDoc";

type Props = {
  sha: String;
  fileName: String;
  path: String;
  FileSrc: any;
  fileType: String;
  id: String;
  children?: React.ReactNode;
  date?: String;
};

const PreviewFile = ({
  sha,
  fileName,
  path,
  FileSrc,
  fileType,
  children,
  id,
  date,
}: Props) => {
  //@ts-ignore
  const dt = new Date(date);
  const dateObj = `${dt.getDate()}.${dt.getMonth() + 1}.${dt.getFullYear()}`;
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-full max-w-96 uppercase">Preview</Button>
      </DialogTrigger>
      <DialogContent className="m-0 h-5/6 max-h-[700px] w-[98%] max-w-7xl overflow-x-hidden rounded-xl border-0 p-0 outline-none">
        <DialogHeader>
          <style>{`#header-bar {
display: block !important;
}`}</style>
          <PreviewDoc
            path={path as string}
            fileSrc={FileSrc}
            fileType={fileType as string}
            fileName={fileName as string}
          />
          <h2 className="p-3 uppercase">
            {" "}
            Uploaded At: <b className="text-primary">{dateObj}</b>
          </h2>
          <DialogTitle className="w-full break-all p-5 text-left">
            {children}
          </DialogTitle>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default PreviewFile;
