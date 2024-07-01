"use client";

import { Button } from "@/components/ui/button";

type Props = {
  className?: string;
};

const ShareButton = ({ className }: Props) => {
  return (
    <>
      {navigator.canShare({ url: window.location.href }) && (
        <Button
          variant={"default"}
          type="submit"
          name="favourite"
          className={`group rounded-xl px-4 py-6 text-primary shadow shadow-primary transition-all hover:shadow-lg hover:shadow-primary hover:outline hover:outline-2 hover:outline-primary ${className}`}
          onClick={() => navigator.share({ url: window.location.href })}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 stroke-background group-hover:stroke-primary"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z"
            />
          </svg>
        </Button>
      )}
    </>
  );
};

export default ShareButton;
