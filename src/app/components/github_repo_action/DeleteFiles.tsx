"use client";
import { Button } from "@/components/ui/button";
import { deleteFileHandler } from "./getBase64";

type Props = {
  sha: String;
  path: String;
  download_url?: URL;
  fileName?: String;
  id?: String;
  className?: String;
  fileType: String;
  isRow?: Boolean;
  isOnLoad?: Boolean;
  base64?: String;
};

const DeleteFiles = ({
  sha,
  path,
  download_url,
  fileName,
  id,
  className,
  fileType,
  isRow,
  isOnLoad,
  base64,
}: Props) => {
  return (
    <div
      className={`mx-auto flex h-fit w-full max-w-96 items-center justify-center gap-3 ${className} ${isRow ? "flex-row" : "flex-col"}`}
    >
      {download_url && fileName && (
        //@ts-ignore
        <a
          href={base64! as string}
          download={fileName}
          className={`${base64 !== "" ? "" : "pointer-events-none opacity-80"} h-full w-full`}
          aria-disabled={base64 !== "" ? true : false}
        >
          <Button className="w-full uppercase">
            {base64 !== "" ? (
              "download"
            ) : (
              <p className="w-full">
                Loading
                <br />
              </p>
            )}
          </Button>
        </a>
      )}
      <Button
        onClick={() => deleteFileHandler(sha, path)}
        variant={"destructive"}
        className="w-full uppercase"
      >
        Delete
      </Button>
    </div>
  );
};

export default DeleteFiles;
