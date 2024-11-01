"use client";
import React, { useState, ChangeEvent } from "react";

import { uploadFile } from "@/app/actions/uploadFile";
import { Button } from "@/components/ui/button";
import { deleteFile } from "@/app/actions/deleteFile";

type Props = {};
export const UploadFile: React.FC = (props: Props) => {
  const [fileSrc, setFilseSrc] = useState<String | null>(null);
  const [fileName, setFileName] = useState<[] | null>(null);
  const [imageSrc, setImageSrc] = useState<String | null>(null);
  const [uploadMassage, setUploadMassage] = useState([null]);
  const [isPending, setIsPending] = useState<boolean>(false);
  const [sha, setSha] = useState<String | null>(null);
  const [path, setPath] = useState<String | null>(null);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file: any = e.target.files?.[0];

    if (file) {
      setUploadMassage([null]);
      const reader: any = new FileReader();
      reader.onload = () => {
        setFileName(file.name.split("."));
        if (reader.result) {
          setImageSrc(reader.result.split(",")[0] as string);
          setFilseSrc(reader.result.split(",")[1] as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const uploadFileHandler = async () => {
    setIsPending(true);
    const isUploaded: any = await uploadFile({
      fileType: "SET TYPE TO VARIEBLE TO HANDLE IT.",
      fileSrc: fileSrc,
      fileName: fileName,
    });
    setUploadMassage([isUploaded.message, isUploaded.status]);
    if (isUploaded.status === 200) {
      setSha(isUploaded.sha);
      setPath(isUploaded.path);
    }
    setIsPending(false);
  };

  const deleteFileHandler = async () => {
    setIsPending(true);
    if (fileSrc && fileName && sha && path) {
      const isUploaded: any = await deleteFile({ sha: sha!, path: path! });
      setUploadMassage([isUploaded.message, isUploaded.status]);
    }
    setFilseSrc(null);
    setFileName(null);
    setImageSrc(null);

    setIsPending(false);
    setSha(null);
    setPath(null);

    setIsPending(false);
  };

  return (
    <React.Fragment>
      <form className="mx-auto mt-3 flex max-w-4xl flex-col gap-3">
        <input
          type="file"
          name="fileUpload"
          id="fileUpload"
          onChange={handleChange}
        />
        {uploadMassage[1] === 200 ? (
          <h2 className="font-extrabold uppercase text-green-500">
            {uploadMassage[0]}
          </h2>
        ) : uploadMassage[1] === null || uploadMassage[0] === null ? (
          <>
            <div className="first-letter:uppercase first-letter:text-primary">
              Wybierz Plki
            </div>
            <div className="first-letter:uppercase first-letter:text-primary">
              Po wybraniu pliku kliknij zapisz żeby zapisać lub usuń żeby usunąć
              plik
            </div>
          </>
        ) : (
          <h2 className="text-red-500"> Error: {uploadMassage[0]}</h2>
        )}
        {imageSrc && fileSrc && (
          <div
            className={`flex flex-col gap-3 ${isPending ? "animate-pulse" : ""}`}
          >
            <div>
              <h2 className="text-3xl font-bold uppercase text-primary">
                Preview Of File!
              </h2>
              <img
                className="max-h-96 max-w-96"
                src={imageSrc + "," + fileSrc}
              />
            </div>
            <div className="flex gap-3">
              <Button
                type="submit"
                onClick={uploadFileHandler}
                disabled={isPending}
              >
                Zapisz
              </Button>
              <Button
                type="reset"
                disabled={isPending}
                variant={"destructive"}
                onClick={deleteFileHandler}
              >
                Usuń
              </Button>
            </div>
          </div>
        )}
      </form>
    </React.Fragment>
  );
};
