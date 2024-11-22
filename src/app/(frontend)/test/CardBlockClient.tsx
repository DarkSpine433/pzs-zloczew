//@ts-nocheck
"use client";

import DeleteFiles from "@/app/components/github_repo_action/DeleteFiles";
import { getBase64 } from "@/app/components/github_repo_action/getBase64";
import PreviewFile from "@/app/components/github_repo_action/preview/PreviewFile";
import { Checkbox } from "@/components/ui/checkbox";
import { useEffect, useState } from "react";

type Props = {
  children: React.ReactNode;
  fileType: String;
  sha: String;
  id: String;
  path: String;
  download_url?: URL;
  otherButtonComponents?: React.ReactNode;
  date?: String;
  fileName?: String;
};

const CardBlockClient = ({
  children,
  sha,
  id,
  path,
  download_url,
  otherButtonComponents,
  fileType,
  date,
  fileName,
}: Props) => {
  const [base64, setBase64] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);
  const [isChecked, setChecked] = useState(false);
  if (isChecked) {
    localStorage.setItem("fileInfo", `[${JSON.stringify({ path, sha })}]`);
  }

  useEffect(() => {
    if (typeof localStorage !== "undefined") {
      if (localStorage.getItem("fileInfo")) {
        const shaInfo = JSON.parse(
          localStorage
            .getItem("fileInfo")
            ?.toString()
            ?.slice(1, localStorage.getItem("fileInfo").length - 1),
        ).sha;
        console.log(shaInfo);
        if (shaInfo === sha) {
          setChecked(true);
        }
      } else {
      }
    }
  }, []);

  return (
    <div
      className="group relative flex h-fit w-full flex-col rounded-xl bg-background shadow-md sm:w-auto"
      onMouseEnter={async () => {
        if (!isLoaded && download_url) {
          setIsLoaded(true);
          const bs64 = await getBase64(download_url as URL);
          if (!bs64) {
            setIsLoaded(true);
            setBase64("");
            return;
          }

          setBase64(bs64);
        }
      }}
    >
      {children}
      <div className="absolute flex h-full w-full flex-col items-center justify-center gap-3 rounded-lg px-5 opacity-0 transition-all group-hover:bg-black/60 group-hover:opacity-100 group-hover:backdrop-blur">
        {otherButtonComponents}
        <PreviewFile
          sha={sha}
          path={path}
          FileSrc={download_url!}
          fileType={fileType!}
          id={id}
          fileName={fileName!}
          date={date}
        >
          <DeleteFiles
            sha={sha}
            path={path}
            fileName={fileName!}
            download_url={download_url}
            fileType={fileType!}
            base64={base64}
            isRow
          />
        </PreviewFile>
        <Checkbox
          onCheckedChange={(e) => {
            setChecked(e);
          }}
          checked={isChecked}
        />
        <DeleteFiles
          sha={sha}
          path={path}
          fileName={fileName!}
          download_url={download_url}
          fileType={fileType!}
          base64={base64}
        />
      </div>
    </div>
  );
};

export default CardBlockClient;
