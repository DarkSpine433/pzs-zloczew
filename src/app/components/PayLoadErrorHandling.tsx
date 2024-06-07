type Props = {
  data: any;
  showText?: boolean;
  CustomText?: string;
  children?: React.ReactNode;
};

const PayLoadErrorHandling = ({
  data,
  showText,
  CustomText,
  children,
}: Props) => {
  if (!data || data.length === 0 || data === undefined) {
    return (
      <>
        {showText && (
          <div className="flex min-h-96 animate-pulse items-center justify-center text-center text-4xl font-extrabold">
            {CustomText ? CustomText : "Czeka na dodanie przez administratora"}
          </div>
        )}
      </>
    );
  }
  return <>{children}</>;
};

export default PayLoadErrorHandling;
