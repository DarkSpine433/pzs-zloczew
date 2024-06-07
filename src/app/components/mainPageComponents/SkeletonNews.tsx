import { Skeleton } from "@/components/ui/skeleton";
type Props = {
  repeat?: number;
  className?: string;
};

const SkeletonNews = async ({ repeat, className }: Props) => {
  const skeletons = [...Array(repeat)].map(() => {
    return <Skeleton className={`rounded-xl ${className}`} />;
  });
  return skeletons;
};

export default SkeletonNews;
