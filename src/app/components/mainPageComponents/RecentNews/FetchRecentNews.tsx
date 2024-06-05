import { parseISO, format } from "date-fns";

import { unstable_noStore as noStore } from "next/cache";
import Image from "next/image";

import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";

type Props = {
  data: any;
};

const FetchRecentNews = async ({ data }: Props) => {
  noStore();

  return (
    <>
      {data.docs.map((doc: any, index: number) => (
        <Link
          key={index + doc.id}
          href={`/news/p/${doc.id}`}
          className="h-96 max-w-96"
        >
          <Card className="group overflow-hidden transition-all hover:-translate-y-1 hover:shadow-md hover:[&>img]:scale-105">
            <div className="h-full w-full overflow-hidden">
              <Image
                src={doc.thumbnail}
                alt="miniatura"
                width={300}
                height={300}
                className="aspect-square h-64 w-96 overflow-hidden rounded-lg object-cover transition-all"
              />
            </div>

            <CardContent className="mt-5">
              <CardTitle>
                <h2 className="pb-5 text-[1.08rem] font-bold transition-all group-hover:text-primary">
                  {doc.title}
                </h2>
              </CardTitle>
              <CardDescription>
                <h3 className="text-sm text-gray-900">
                  Data:&nbsp;
                  <time dateTime={doc.createdAt}>
                    {format(parseISO(doc.createdAt), "dd.MM.yyyy")}
                  </time>
                </h3>
              </CardDescription>
            </CardContent>
          </Card>
        </Link>
      ))}
    </>
  );
};

export default FetchRecentNews;
