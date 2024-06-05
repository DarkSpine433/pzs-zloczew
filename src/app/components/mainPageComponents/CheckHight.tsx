"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

type Props = {
  children: React.ReactNode;
};

const CheckHight = ({ children }: Props) => {
  const heighToCheck = 599;
  const ref = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(heighToCheck);

  useLayoutEffect(() => {
    if (typeof ref.current?.offsetHeight === "number") {
      setHeight(ref.current?.offsetHeight);
    }
  }, []);
  return (
    <div
      className="relative h-fit max-h-[600px] w-full overflow-hidden rounded-lg border-2 border-blue-700 bg-secondary-foreground px-2 text-background shadow-md shadow-blue-200 transition-all [&>h2]:text-9xl"
      ref={ref}
    >
      {height >= heighToCheck ? (
        <>
          <div className="pointer-events-none absolute left-0 top-0 z-20 flex h-full w-full items-end justify-center bg-gradient-to-t from-secondary-foreground to-transparent pb-20 text-background">
            Czytaj Więcej
          </div>

          <Dialog>
            <DialogTrigger>
              <div className={`h-max w-full py-5 md:p-10`}>
                {" "}
                <div className="pointer-events-none">{children}</div>
              </div>
            </DialogTrigger>
            <DialogContent className="flex max-h-[850px] max-w-[1000px] flex-col items-center py-10">
              {children}
            </DialogContent>
          </Dialog>
        </>
      ) : (
        <div
          className={`relative h-fit max-h-[600px] w-full overflow-hidden bg-secondary-foreground py-5 text-background shadow-md transition-all md:p-10`}
        >
          {children}
        </div>
      )}
    </div>
  );
};

export default CheckHight;
