"use client";
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
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";
import "@cyntler/react-doc-viewer/dist/index.css";
import "./style.css";
type Props = {
  sha: string;
  path: string;
  fileSrc: string;
  fileType: string;
};

const PreviewOther = ({ sha, path, fileSrc, fileType }: Props) => {
  const docs = [
    {
      uri: fileSrc.toString(),
      fileType: fileType,
      fileName: `${path}.${fileType}`,
    },
  ];
  console.log(fileSrc, fileType);
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-full max-w-28 uppercase">Preview</Button>
      </DialogTrigger>
      <DialogContent className="m-0 h-5/6 w-full max-w-7xl overflow-x-hidden rounded-xl border-0 p-0 outline-none">
        <DialogHeader>
          <DocViewer
            documents={docs}
            initialActiveDocument={docs[0]}
            pluginRenderers={DocViewerRenderers}
            style={{ width: "100%", height: "100%" }}
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

export default PreviewOther;
