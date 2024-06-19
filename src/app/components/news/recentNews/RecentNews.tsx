import { Button } from "@/components/ui/button";
import Link from "next/link";
import FetchRecentNews from "./FetchRecentNews";
type Props = {
  className?: string;
  repetation?: number;
};

const RecentNews = ({ className, repetation }: Props) => {
  return (
    <>
      <h2 className="scroll-m-20 space-y-10 bg-gradient-to-r from-primary from-40% via-foreground to-primary to-60% bg-clip-text pb-10 pt-10 text-center text-4xl font-extrabold uppercase text-transparent drop-shadow-[0_1.2px_1.2px_hsl(--primary)]">
        Aktualności
      </h2>
      <div className="flex flex-col justify-center px-2 pb-10">
        <div
          className={`mx-auto grid w-fit grid-cols-1 gap-5 pb-2 sm:grid-cols-2 md:grid-cols-3 [&>h2]:text-sm ${className}`}
        >
          <FetchRecentNews repetition={repetation ? 6 : 6} />
        </div>
        <Link href="/news">
          <Button className="mx-auto mt-10 flex items-center justify-center text-center">
            Zobacz Więcej
          </Button>
        </Link>
      </div>
    </>
  );
};

export default RecentNews;
