type Props = {
  children?: React.ReactNode
  className?: string
  maxWidth?: string
}

const Section = ({ children, className, maxWidth }: Props) => {
  return (
    <section className={`w-full h-fit  ${className}`}>
      <div className={`${maxWidth} mx-auto relative`}>{children}</div>
    </section>
  )
}

export default Section
