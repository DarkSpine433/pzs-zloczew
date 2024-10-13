"use client";
import { Button } from "@/components/ui/button";

import { deleteFile } from "@/app/actions/deleteFile";
import { useEffect, useState } from "react";
import Link from "next/link";
type Props = {
  sha: String;
  path: String;
  download_url?: String;
  id?: String;
};

const DeleteFiles = ({ sha, path, download_url, id }: Props) => {
  const [base64, setBase64] = useState("");
  const [loading, setLoading] = useState(false);
  const [isSet, setIsSet] = useState(false);
  const get64code = async (download_url: URL) => {
    if (isSet) return;
    try {
      setLoading(true);
      const response = await fetch(download_url); // Fetch the file from the URL
      const blob = await response.blob(); // Convert the response to a blob
      const reader = new FileReader();

      reader.onloadend = () => {
        if (reader.result !== null) {
          setBase64(reader.result as string); // Set the Base64 encoded string
        }
      };

      reader.readAsDataURL(blob); // Read the blob as a Data URL (Base64 format)
    } catch (error) {
      console.error("Error fetching or converting image to Base64:", error);
    }
    setLoading(false);
    setIsSet(true);
  };

  const [uploadMassage, setUploadMassage] = useState([null]);

  const deleteFileHandler = async () => {
    const isDeleted: any = await deleteFile({ sha: sha!, path: path! });
    setUploadMassage([isDeleted.message, isDeleted.status]);
    if (isDeleted.status === 200) {
      location.reload();
    }
  };
  return (
    <div
      className="flex h-fit w-full max-w-28 flex-col gap-3"
      onMouseEnter={() => get64code(download_url as any)}
    >
      {uploadMassage[0] && (
        <p className="w-full text-wrap bg-black font-bold uppercase text-green-500">
          {uploadMassage[0]}
        </p>
      )}
      {download_url && (
        //@ts-ignore
        <a
          href={base64}
          download={path}
          className={`${base64 ? "" : "pointer-events-none opacity-80"} h-full w-full`}
          aria-disabled={base64 ? true : false}
        >
          <Button className="w-full uppercase">
            {base64 ? (
              "download"
            ) : (
              <p className="w-full">
                Loading
                <br />
              </p>
            )}
          </Button>
        </a>
      )}{" "}
      <Button
        onClick={deleteFileHandler}
        variant={"destructive"}
        className="uppercase"
      >
        Delete
      </Button>
    </div>
  );
};

export default DeleteFiles;
