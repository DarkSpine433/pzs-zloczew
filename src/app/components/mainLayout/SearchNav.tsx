import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import SearchHandlerClient from "./SearchHandlerClient";
type Props = {};

const SearchNav = (props: Props) => {
  return (
    <Dialog>
      <DialogTrigger className="group flex w-12 justify-center rounded-full border border-gray-700 py-3 transition-all hover:border-primary hover:bg-foreground sm:py-2.5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="white"
          className="size-5 group-hover:stroke-white sm:size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
      </DialogTrigger>
      <DialogContent className="gap5 flex h-5/6 w-11/12 max-w-7xl flex-col p-0">
        <DialogHeader className="h-fit bg-gray-100 p-5">
          <DialogTitle>Zasady korzystania z pola wyszukiwania</DialogTitle>
          <DialogDescription>
            Sprawdź poprawność wpisywanych słów, aby uniknąć literówek i błędów
            ortograficznych. Wprowadzenie poprawnych fraz zwiększa szansę na
            znalezienie odpowiednich wyników.
          </DialogDescription>
        </DialogHeader>
        <div className="h-fit p-5">
          <div className="mx-auto max-w-sm">
            <SearchHandlerClient>w</SearchHandlerClient>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SearchNav;
