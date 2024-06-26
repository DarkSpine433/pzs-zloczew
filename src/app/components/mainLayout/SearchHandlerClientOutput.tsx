import React from "react";
import Link from "next/link";
import { DialogClose } from "@radix-ui/react-dialog";

type Props = {
  object: [];
  linkPrefix: string;
  titleSection?: string;
};

const SearchHandlerClientOutput = ({
  object,
  linkPrefix,
  titleSection,
}: Props) => {
  return (
    <>
      {object && (
        <div className="p-3">
          <h3 className="pb-2 text-2xl font-bold lowercase first-letter:uppercase">
            {titleSection}
          </h3>
          <div className="flex flex-col flex-wrap gap-3 rounded-md border px-2 py-3">
            {object.length > 0 ? (
              <div className="flex flex-col gap-3">
                {object.map(
                  (page: { id: string; title: string }, index: number) => {
                    return (
                      <Link
                        key={page.id + index}
                        href={`/${linkPrefix}/${page.id}`}
                        className="h-max w-full transition-all hover:-translate-y-0.5 hover:bg-secondary hover:text-primary"
                      >
                        <DialogClose className="h-max w-full rounded-lg p-5 text-left lowercase shadow first-letter:uppercase">
                          {page.title}
                        </DialogClose>
                      </Link>
                    );
                  },
                )}
              </div>
            ) : (
              <div className="p-3">nie znaleziono</div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default SearchHandlerClientOutput;
