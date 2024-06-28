import { parseISO, format } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";

import FavouriteButtonClient from "./FavouriteButtonClient";

type Props = {
  doc: any;
  index?: number;
};

const TemplateNews = async ({ doc, index }: Props) => {
  return (
    <div
      key={index + doc.id}
      className="group relative h-fit w-fit overflow-hidden rounded-lg"
    >
      <Link href={`/news/p/${doc.id}`}>
        <Card className="overflow-hidden transition-all hover:shadow-md">
          <div className="flex h-full w-full items-center justify-center overflow-hidden">
            {doc.thumbnail != undefined &&
            doc.thumbnail != "" &&
            doc.thumbnail.match(/\.(jpg|jpeg|png|gif|bmp|tiff|webp|svg)$/i) ? (
              <Image
                src={doc.thumbnail}
                alt="miniatura"
                width={300}
                height={300}
                className="aspect-square h-64 w-96 overflow-hidden rounded-lg object-cover transition-all duration-500 group-hover:scale-105"
              />
            ) : null}
          </div>

          <CardContent className="mt-5">
            <CardTitle className="pb-5 font-bold text-[/701.08rem] transition-all group-hover:text-primary">
              <div className="pr-2">{doc.title}</div>
            </CardTitle>
            <CardDescription className="text-sm text-gray-900">
              Data:&nbsp;
              <time dateTime={doc.createdAt} className="text-primary/70">
                {format(parseISO(doc.createdAt), "dd.MM.yyyy")}
              </time>
            </CardDescription>
          </CardContent>
        </Card>
      </Link>
      <FavouriteButtonClient id={doc.id} />
    </div>
  );
};

export default TemplateNews;
