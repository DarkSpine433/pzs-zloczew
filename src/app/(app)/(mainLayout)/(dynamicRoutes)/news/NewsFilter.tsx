"use client";

import { useState, useLayoutEffect } from "react";
import { Button } from "@/components/ui/button";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import NewFilterComponent from "./NewFilterComponent";

type Props = {};

const NewsFilter = (props: Props) => {
  const [windowWidth, setWindowWidth] = useState<number>(1400);

  useLayoutEffect(() => {
    const asideLayoutListener = () => {
      setWindowWidth(window.innerWidth);
      console.log(windowWidth);
    };
    asideLayoutListener();
    window.addEventListener("resize", asideLayoutListener);

    return () => {
      window.removeEventListener("resize", asideLayoutListener);
    };
  }, []);

  return (
    <>
      {windowWidth >= 1024 ? (
        <aside
          className={`sticky left-0 top-20 z-10 flex h-4/5 w-96 min-w-52 flex-col justify-center rounded-md border border-primary/20 bg-secondary/20 p-10 transition-all`}
        >
          <NewFilterComponent isSheet={false} />
        </aside>
      ) : (
        <Sheet>
          <SheetTrigger>
            {" "}
            <Button
              variant={"secondary"}
              className="fixed bottom-5 left-5 z-10 rounded-full p-4 py-6"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z"
                />
              </svg>
            </Button>
          </SheetTrigger>
          <SheetContent
            className={`max-h-[100dvh] overflow-y-auto ${
              windowWidth > 640 ? "flex h-fit w-96 items-end" : "h-fit w-full"
            }`}
            side={"bottom"}
          >
            <NewFilterComponent isSheet />
          </SheetContent>
        </Sheet>
      )}
    </>
  );
};

export default NewsFilter;
