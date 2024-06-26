"use client";
import { Input } from "@/components/ui/input";
import { searchNav } from "@/app/actions/searchNav";
import { useEffect, useState } from "react";

import SearchHandlerClientOutput from "./SearchHandlerClientOutput";
import SpinerLoader from "../SpinerLoader";
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
    <>
      {" "}
      <Input
        placeholder="Wyszukaj"
        onChange={handleChange}
        className="mx-auto w-full border-0 bg-background shadow shadow-primary"
      />
      <div className="flex h-96 w-full flex-col gap-5 overflow-y-scroll bg-background p-3">
        {!loading ? (
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
        ) : (
          <>
            <SpinerLoader />
          </>
        )}
      </div>
    </>
  );
};

export default SearchHandlerClient;
