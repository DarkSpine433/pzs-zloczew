import type { CollectionConfig } from "payload/types";

export const Users: CollectionConfig = {
  slug: "users",
  labels: {
    singular: "Użytkownik",
    plural: "Użytkownicy",
  },
  admin: {
    defaultColumns: ["name", "email"],
    useAsTitle: "name",
  },
  auth: true,
  fields: [
    {
      name: "name",
      type: "text",
    },
  ],
};
