import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import Link from "next/link";

type Props = {};

const Socials = (props: Props) => {
  return (
    <>
      <Link
        href="https://www.facebook.com/people/PZS-Z%C5%82oczew/61551036213821/"
        target="_blanks"
        title="Facebook"
      >
        <Button className="py-5 shadow-md shadow-primary/60" title="Facebook">
          <FaFacebook size={20} />
        </Button>
      </Link>
      <Link
        href="https://www.youtube.com/channel/UCUub2QdjjKFoww2u2ZeVpKA"
        target="_blanks"
        title="YouTube"
      >
        <Button
          className="bg-red-600 py-5 shadow-md shadow-red-600/60"
          title="YouTube"
        >
          <FaYoutube size={20} />
        </Button>
      </Link>
    </>
  );
};

export default Socials;
