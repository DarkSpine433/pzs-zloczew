"use client";
import { Input } from "@/components/ui/input";
import { searchNav } from "@/app/actions/searchNav";
import { use, useEffect, useState } from "react";
import Link from "next/link";
import { DialogClose } from "@radix-ui/react-dialog";
type Props = {
  children: React.ReactNode;
};

const SearchHandlerClient = ({ children }: Props) => {
  const [value, setValue] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [data, setData] = useState([]);

  const handleChange = (e: any) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    const timeOut = setTimeout(async () => {
      setShowSearch(true);
      const data: any = await searchNav({ title: value });
      setData(data);
    }, 1000);

    value.length < 1 && clearTimeout(timeOut), setShowSearch(false);

    return () => {
      clearTimeout(timeOut);
      setShowSearch(false);
    };
  }, [value]);
  return (
    <div>
      <Input placeholder="Wyszukaj" onChange={handleChange} />
      <div className="flex flex-col gap-3">
        {data.map((data: any, index: number) => (
          <Link href={"/p/" + data.id} key={index + data.title}>
            <DialogClose>{data.title}</DialogClose>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SearchHandlerClient;
