import ContactButton from "../ui/ContactButton";

type Props = {};

const Cta = (props: Props) => {
  return (
    <div className="flex justify-center">
      <ContactButton
        className="p-7 text-xl font-bold text-gray-800 shadow-2xl shadow-primary"
        size="size-6 stroke-primary "
      />
    </div>
  );
};

export default Cta;
