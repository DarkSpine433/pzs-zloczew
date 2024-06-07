import dynamic from "next/dynamic";
import Image from "next/image";

//Other Ui Components Import
import { Button } from "@/components/ui/button";
import Link from "next/link";
import SearchNav from "./SearchNav";
//menu imports
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { StaticNavLinks } from "./StaticNavLinks";

const FetchNavContent = dynamic(() => import("./FetchNavContent"));
type Props = {};

const ShowMenu = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="px-5 sm:p-5 sm:px-7">Menu</Button>
      </SheetTrigger>
      <SheetContent side="left" className="overflow-y-auto">
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
          <SheetDescription>Tu znajdziesz czego szukasz.</SheetDescription>
        </SheetHeader>

        <FetchNavContent />

        <SheetFooter>
          <div className="py-5 text-center">
            Wykonana z ❤️ Przez{" "}
            <Link
              href="https://bit.ly/ds-craft"
              className="underline"
              target="_blank"
            >
              DS-Craft
            </Link>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

const Nav = (props: Props) => {
  return (
    <div className="flex w-full items-center gap-2 py-1 sm:py-0.5">
      <Link
        href="/"
        className="hidden flex-1 items-center self-center justify-self-center sm:flex"
      >
        <Image
          src="/logo.png"
          alt="logo"
          width={50}
          height={50}
          className="size-16"
        />
        <h2 className="hidden text-2xl font-bold uppercase text-primary lg:block">
          pzs ZŁoczew
        </h2>
      </Link>
      <div className="hidden justify-end gap-5 font-semibold text-gray-500 md:flex">
        {StaticNavLinks.map((link, index) => (
          <>
            {index > 0 && (
              <Link
                key={link.title}
                href={link.url}
                className="rounded-lg px-3 py-1 transition-all hover:bg-secondary hover:text-primary"
              >
                {link.title}
              </Link>
            )}
          </>
        ))}
      </div>

      <div className="flex flex-1 items-center justify-between gap-5 sm:justify-end">
        <div className="order-2 sm:order-1">
          <SearchNav />
        </div>
        <div className="order-1">
          <ShowMenu />
        </div>
      </div>
    </div>
  );
};

export default Nav;
