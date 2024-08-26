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
    <ScrollArea className={`h-full w-full rounded-md border`}>
      <div className="fixed bottom-0 left-0 z-50 mx-auto h-fit w-full">
        <Input
          placeholder="Wyszukaj"
          onChange={handleChange}
          className="roul-xl border border-primary bg-background py-7 pl-8 text-xl shadow shadow-primary outline-none sm:text-2xl"
        />
      </div>
      <div className={`flex h-fit flex-col gap-5 bg-background transition-all`}>
        <div
          className={`${loading ? "opacity-100 blur-none" : "opacity-0 blur-sm"} pointer-events-none absolute left-1/2 top-1/2 mx-auto flex w-fit -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center text-center transition-all`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            className="size-10 animate-bounce stroke-primary"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
          <div className="font-semibold uppercase motion-reduce:animate-pulse">
            <p>Wyszukiwanie...</p>
          </div>
        </div>
        <div
          className={`${loading ? "scale-105 opacity-0" : "scale-100 opacity-100"} mb-20 transition-all`}
        >
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
        </div>
      </div>
    </ScrollArea>
  );
};

export default SearchHandlerClient;
