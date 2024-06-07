"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { SheetClose } from "@/components/ui/sheet";
import Link from "next/link";
import { useRouter } from "next/navigation";

type Props = {
  isSheet?: boolean;
};

const NewFilterComponent = ({ isSheet }: Props) => {
  const router = useRouter();
  const handleFiltring = () => {
    router.push(`?text`, {
      scroll: false,
    });
  };
  const newDate = 2020;
  const lastData = 2013;
  return (
    <div className="flex flex-col gap-5 py-5">
      <h2 className="font-bold">Filtry</h2>
      <div className="flex flex-col gap-5">
        {[...Array(newDate - lastData)].map((_, i) => (
          <div className="flex h-fit w-fit items-center" key={i}>
            <Checkbox id={`terms-${i}`} className="mr-3" />
            <label
              htmlFor={`terms-${i}`}
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              {lastData + i}
            </label>
          </div>
        ))}
      </div>
      <div
        className={`flex gap-5 ${isSheet ? "justify-start" : "justify-center"}`}
      >
        {isSheet ? (
          <>
            <SheetClose asChild>
              <Button className="w-full max-w-52 py-5" onClick={handleFiltring}>
                Zastosuj
              </Button>
            </SheetClose>
            <Link href="/news">
              <SheetClose asChild>
                <Button className="py-5" variant={"destructive"}>
                  Resetuj
                </Button>
              </SheetClose>
            </Link>
          </>
        ) : (
          <>
            <Button className="w-full py-5" onClick={handleFiltring}>
              Zastosuj
            </Button>

            <Link href="/news">
              <Button className="py-5" variant={"destructive"}>
                Resetuj
              </Button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default NewFilterComponent;
