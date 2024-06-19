type Props = {
  data: any;
  showText?: boolean;
  CustomText?: string;
  customComponents?: React.ReactNode;
  stopAnimation?: boolean;
  children?: React.ReactNode;
};

const PayLoadErrorHandling = ({
  data,
  showText,
  CustomText,
  customComponents,
  stopAnimation,
  children,
}: Props) => {
  if (!data || data.length === 0 || data === undefined || data === null) {
    return (
      <>
        {showText && (
          <div
            className={`flex min-h-96 ${stopAnimation ? "" : "animate-pulse"} w-full flex-col items-center justify-center text-center text-4xl font-extrabold`}
          >
            {CustomText ? CustomText : "Czeka na dodanie przez administratora"}
            {customComponents}
          </div>
        )}
      </>
    );
  }
  return <>{children}</>;
};

export default PayLoadErrorHandling;
