import SpinerLoader from "@/app/components/SpinerLoader";

const loading = () => {
  return (
    <div className="flex h-[600px] w-full items-center justify-center">
      <SpinerLoader />
    </div>
  );
};

export default loading;
