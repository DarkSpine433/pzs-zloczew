import Link from "next/link";

type Props = {
  className?: string;
  size?: string;
};

const ContactButton = ({ className, size }: Props) => {
  return (
    <Link
      href={"/contact?_"}
      className={`flex h-4 w-fit items-center rounded-md border-2 border-primary bg-background/10 p-5 text-sm transition-all hover:bg-primary/10 ${className} `}
    >
      <div>Kontakt</div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="black"
        className={`ml-2 size-5 ${size}`}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M20.25 3.75v4.5m0-4.5h-4.5m4.5 0-6 6m3 12c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 0 1 4.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 0 0-.38 1.21 12.035 12.035 0 0 0 7.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 0 1 1.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 0 1-2.25 2.25h-2.25Z"
        />
      </svg>
    </Link>
  );
};

export default ContactButton;
