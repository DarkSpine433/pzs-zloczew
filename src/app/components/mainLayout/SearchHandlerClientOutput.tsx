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
        <div>
          <h3 className="border-b text-2xl font-bold lowercase first-letter:uppercase">
            {titleSection}
          </h3>
          <div className="mt-3 flex flex-col gap-3">
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
              <>nie znaleziono</>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default SearchHandlerClientOutput;
