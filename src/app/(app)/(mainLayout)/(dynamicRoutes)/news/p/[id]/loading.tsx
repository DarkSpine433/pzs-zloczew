import SpinerLoader from "@/app/components/SpinerLoader";
import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

type Props = {};

const loading = (props: Props) => {
  return (
    <div className="flex w-full flex-col gap-5">
      <div className="h-52 w-full bg-foreground">
        <div className="mx-auto flex h-full max-w-2xl flex-col justify-center gap-14">
          <Skeleton className="h-10 w-full self-center" />
          <Skeleton className="h-5 w-1/2" />
        </div>
      </div>
      <div className="mx-auto flex h-[600px] max-w-6xl flex-col gap-5 py-5">
        <SpinerLoader />
      </div>
    </div>
  );
};

export default loading;
