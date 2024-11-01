import Image from "next/image";

type Props = {
  FileSrc: string;
};

const PreviewImage = ({ FileSrc }: Props) => {
  return (
    <Image
      src={FileSrc}
      alt={FileSrc}
      width={900}
      height={900}
      quality={100}
      className="m-0 mx-auto h-full max-h-dvh w-full rounded-lg object-contain p-0"
    />
  );
};

export default PreviewImage;
