"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import React, { useState } from "react";

type Props = {
  data: any;
  whereToGOId: string;
};

const PagginationInputClient = ({ data, whereToGOId }: Props) => {
  const [page, setPage] = useState("");
  const [isOverRange, setIsOverRange] = useState(false);
  return (
    <div className="mx-auto flex w-full max-w-60 flex-col items-center justify-center gap-2 md:flex-row">
      <Input
        className={`border-primary invalid:border-red-500 focus-within:border-primary/50`}
        name="page"
        type="number"
        min={1}
        max={data.totalPages}
        onChange={(e) => {
          const value = e.target.value.trim();
          setPage(value);
          value > data.totalPages
            ? setIsOverRange(true)
            : setIsOverRange(false);
        }}
        placeholder="Wpisz"
      />

      <Link
        href={
          page != ""
            ? `?${new URLSearchParams({ page: page.toString() })}${whereToGOId}`
            : "#"
        }
        className={`w-full md:w-3/6 ${
          page === "" || isOverRange ? "pointer-events-none opacity-80" : ""
        }`}
      >
        <Button className="w-full">Szukaj</Button>
      </Link>
    </div>
  );
};

export default PagginationInputClient;
