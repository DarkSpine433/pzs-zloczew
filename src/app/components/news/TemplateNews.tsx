import { parseISO, format } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";

type Props = {
  data: [];
};

const TemplateNews = ({ data }: Props) => {
  return (
    <>
      {data.map((doc: any, index: number) => {
        return (
          <Link
            key={index + doc.id}
            href={`/news/p/${doc.id}`}
            className="h-96 max-w-96"
          >
            <Card className="group overflow-hidden transition-all hover:-translate-y-1 hover:shadow-md hover:[&>img]:scale-105">
              <div className="flex h-full w-full items-center justify-center overflow-hidden">
                {doc.thumbnail.match(
                  /\.(jpg|jpeg|png|gif|bmp|tiff|webp|svg)$/i,
                ) ? (
                  <Image
                    src={doc.thumbnail}
                    alt="miniatura"
                    width={300}
                    height={300}
                    className="aspect-square h-64 w-96 overflow-hidden rounded-lg object-cover transition-all"
                  />
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="0.2"
                    stroke="currentColor"
                    className="h-full w-full"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                    />
                  </svg>
                )}
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
        );
      })}
    </>
  );
};

export default TemplateNews;
