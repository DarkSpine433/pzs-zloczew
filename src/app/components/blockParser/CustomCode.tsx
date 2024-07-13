"use client";
import parse from "html-react-parser";
import { ScrollArea } from "@/components/ui/scroll-area";

type Props = {
  block: any;
};

const CustomCode = ({ block }: Props) => {
  return (
    <div className="flex size-full flex-col items-center justify-center">
      {parse(block.code)}
    </div>
  );
};

export default CustomCode;
