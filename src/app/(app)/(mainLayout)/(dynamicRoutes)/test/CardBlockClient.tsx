"use client";

import DeleteFiles from "@/app/components/github_repo_action/DeleteFiles";
import { getBase64 } from "@/app/components/github_repo_action/getBase64";
import PreviewFile from "@/app/components/github_repo_action/preview/PreviewFile";
import { useState } from "react";

type Props = {
  children: React.ReactNode;
  fileType: String;
  sha: String;
  id: String;
  path: String;
  download_url?: URL;
  otherButtonComponents?: React.ReactNode;
};

const CardBlockClient = ({
  children,
  sha,
  id,
  path,
  download_url,
  otherButtonComponents,
  fileType,
}: Props) => {
  const [base64, setBase64] = useState("");

  return (
    <div
      className="group relative flex h-60 w-fit max-w-md flex-col gap-5 rounded-xl bg-background shadow-md"
      onMouseEnter={async () => {
        const bs64 = await getBase64(download_url as URL);
        if (!download_url || !bs64) return setBase64("");
        setBase64(bs64);
        console.log(fileType, download_url, path);
      }}
    >
      {children}
      <div className="absolute flex h-full w-full flex-col items-center justify-center gap-3 rounded-lg opacity-0 transition-all group-hover:bg-black/60 group-hover:opacity-100 group-hover:backdrop-blur">
        {otherButtonComponents}
        <PreviewFile
          sha={base64}
          path={path}
          FileSrc={download_url!}
          fileType={fileType!}
          id={id}
        >
          <DeleteFiles
            sha={sha}
            path={path}
            download_url={download_url}
            fileType={fileType!}
            base64={base64}
          />
        </PreviewFile>
        <DeleteFiles
          sha={sha}
          path={path}
          download_url={download_url}
          fileType={fileType!}
          base64={base64}
        />
      </div>
    </div>
  );
};

export default CardBlockClient;
