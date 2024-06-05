type Props = {
  children?: React.ReactNode;
  className?: string;
  maxWidth?: string;
};

const Section = ({ children, className, maxWidth }: Props) => {
  return (
    <section className={`h-fit w-full ${className}`}>
      <div className={`${maxWidth} relative mx-auto`}>{children}</div>
    </section>
  );
};

export default Section;
