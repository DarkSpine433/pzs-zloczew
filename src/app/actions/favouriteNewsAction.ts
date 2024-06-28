"use server";
import { cookies } from "next/headers";

type Props = {
  id: string;
};

export const favouriteDeleateOrAdd = ({ id }: Props) => {
  if (cookies().has(id?.toString())) {
    cookies().delete(id?.toString());
  } else {
    cookies().set(id, id);
  }
};

export const fetchFavourites = ({ id }: Props) => {
  return cookies().has(id?.toString());
};
