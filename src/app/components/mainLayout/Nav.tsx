import dynamic from "next/dynamic";
import Image from "next/image";

//Other Ui Components Import
import { Button } from "@/components/ui/button";
import Link from "next/link";

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
import { Input } from "@/components/ui/input";
const FetchNavContent = dynamic(() => import("./FetchNavContent"));
type Props = {};

const ShowMenu = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="p-5 px-7">Menu</Button>
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
    <div className="flex w-full items-center justify-between gap-5 py-0.5">
      <div className="flex items-center gap-6">
        <Link href="/" className="flex items-center">
          <Image src="/logo.png" alt="logo" width={50} height={50} />
          <h2 className="text-2xl font-bold uppercase text-primary">
            pzs ZŁoczew
          </h2>
        </Link>

        <div className="flex self-center font-semibold text-gray-500">
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
      </div>

      <div className="flex gap-5">
        <Input type="text" placeholder="Szukaj" />
        <ShowMenu />
      </div>
    </div>
  );
};

export default Nav;
