import CircularProgress from "@mui/material/CircularProgress";
type Props = {
  className?: string;
};

const SpinerLoader = ({ className }: Props) => {
  return (
    <div className={` ${className} flex h-full items-center justify-center`}>
      <CircularProgress />
    </div>
  );
};

export default SpinerLoader;
