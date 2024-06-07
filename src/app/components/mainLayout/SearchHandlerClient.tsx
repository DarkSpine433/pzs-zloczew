"use client";
import { Input } from "@/components/ui/input";
import { searchNav } from "@/app/actions/searchNav";
import { useEffect, useState } from "react";

import SearchHandlerClientOutput from "./SearchHandlerClientOutput";
type Props = {
  children: React.ReactNode;
};

const SearchHandlerClient = ({ children }: Props) => {
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
    <div>
      <Input placeholder="Wyszukaj" onChange={handleChange} />
      <div className="-t mt-3 flex flex-col gap-3 p-3">
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
          <div>loading</div>
        )}
      </div>
    </div>
  );
};

export default SearchHandlerClient;
