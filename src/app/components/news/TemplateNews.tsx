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
  doc: any;
  index?: number;
};

const TemplateNews = async ({ doc, index }: Props) => {
  return (
    <>
      <Link
        key={index + doc.id}
        href={`/news/p/${doc.id}`}
        className="h-fit max-w-96"
      >
        <Card className="group overflow-hidden transition-all hover:-translate-y-1 hover:shadow-md hover:[&>img]:scale-105">
          <div className="flex h-full w-full items-center justify-center overflow-hidden">
            {doc.thumbnail != undefined &&
            doc.thumbnail != "" &&
            doc.thumbnail.match(/\.(jpg|jpeg|png|gif|bmp|tiff|webp|svg)$/i) ? (
              <Image
                src={doc.thumbnail}
                alt="miniatura"
                width={300}
                height={300}
                className="aspect-square h-64 w-96 overflow-hidden rounded-lg object-cover transition-all"
              />
            ) : null}
          </div>

          <CardContent className="mt-5">
            <CardTitle className="pb-5 text-[1.08rem] font-bold transition-all group-hover:text-primary">
              {doc.title}
            </CardTitle>
            <CardDescription className="text-sm text-gray-900">
              Data:&nbsp;
              <time dateTime={doc.createdAt}>
                {format(parseISO(doc.createdAt), "dd.MM.yyyy")}
              </time>
            </CardDescription>
          </CardContent>
        </Card>
      </Link>
    </>
  );
};

export default TemplateNews;
