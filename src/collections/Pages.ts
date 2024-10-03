// @ts-nocheck
import type { CollectionConfig } from "payload/types";

import { ImageUrl } from "./blocks/ImageUrl";
import { RichTextBlock } from "./blocks/RichTextBlock";
import { Iframe } from "./blocks/Iframe";
import { Paggination } from "./blocks/Paggination";

export const Pages: CollectionConfig = {
  slug: "pages",
  labels: {
    singular: "Podstrony",
    plural: "Podstrony",
  },
  admin: {
    useAsTitle: "title",
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      type: "tabs",
      tabs: [
        {
          label: "Kontent Strony",
          description: "Kontent Strony",

          fields: [
            {
              name: "Content",
              label: "Wstaw kontent dla strony",
              type: "blocks",
              blocks: [ImageUrl, RichTextBlock, Iframe, Paggination],
            },
          ],
        },

        {
          label: "Meta Dane",
          description: "Meta Dane",
          fields: [
            {
              name: "title",
              label: "Tytuł",
              type: "text",
              required: true,
              maxLength: 90,
            },
            {
              name: "description",
              label: "Opis",
              type: "textarea",
              required: true,
              maxLength: 160,
            },
            {
              name: "keywords",
              label: "Key Words",
              type: "text",
              required: true,
              maxLength: 160,
            },
          ],
        },
      ],
      required: true,
    },
  ],
};
