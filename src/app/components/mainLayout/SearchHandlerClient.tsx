"use client";
import { Input } from "@/components/ui/input";
import { searchNav } from "@/app/actions/searchNav";
import { useEffect, useState } from "react";

import SearchHandlerClientOutput from "./SearchHandlerClientOutput";
import { ScrollArea } from "@/components/ui/scroll-area";
import { DialogClose } from "@radix-ui/react-dialog";
type Props = {};

const SearchHandlerClient = ({}: Props) => {
  const [value, setValue] = useState("");
  const [data, setData] = useState<any>({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e: any) => {
    setValue(e.target.value.trim());

    (value.length < 1 || value === "") && setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    const timeOut = setTimeout(async () => {
      setLoading(true);
      const data = await searchNav({ title: value });
      setLoading(false);
      setData(data);
    }, 500);
    const val = value.toString().trim();
    (val.length < 1 || val === "") && clearTimeout(timeOut), setData({});
    (val.length < 1 || val === "") && setLoading(false);
    return () => {
      clearTimeout(timeOut);
      setLoading(false);
    };
  }, [value]);
  return (
    <ScrollArea className="h-96 w-[600px] max-w-3xl rounded-md border p-4">
      <div className="sticky top-0 z-50 mx-auto h-fit w-full">
        <Input
          placeholder="Wyszukaj"
          onChange={handleChange}
          className="roul-xl border-0 bg-background py-7 pl-8 text-xl shadow shadow-primary sm:text-2xl"
        />
        <DialogClose className="absolute right-3 top-2 z-50 size-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </DialogClose>
      </div>
      <div
        className={`${loading ? "opacity-0" : "opacity-100"} flex h-fit flex-col gap-5 bg-background transition-all`}
      >
        <>
          <SearchHandlerClientOutput
            object={data.pages}
            titleSection="Strony"
            linkPrefix="p"
          />
          <SearchHandlerClientOutput
            object={data.news}
            titleSection="Aktualności"
            linkPrefix="news/p"
          />
        </>
      </div>
    </ScrollArea>
  );
};

export default SearchHandlerClient;
