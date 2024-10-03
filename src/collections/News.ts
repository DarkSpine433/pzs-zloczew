// @ts-nocheck
import type { CollectionConfig } from "payload/types";

import { ImageUrl } from "./blocks/ImageUrl";

import { RichTextBlock } from "./blocks/RichTextBlock";
import { Iframe } from "./blocks/Iframe";
import { GenerateWithOpenAiText } from "../components/collection/GenerateWithOpenAiText";
import { SocialMediaPosts } from "./blocks/SocialMediaPosts";
import { CustomCode } from "./blocks/CustomCode";
import { Paggination } from "./blocks/Paggination";

export const News: CollectionConfig = {
  slug: "news",
  labels: {
    singular: "Aktualności",
    plural: "Aktualności",
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
            {
              name: "test",
              type: "ui",
              admin: { components: { Field: GenerateWithOpenAiText } },
            },
            { name: "thumbnail", label: "Miniaturka Link", type: "text" },
          ],
        },
      ],
      required: true,
    },
    {
      name: "author",
      label: "Autor Postu",
      admin: {
        position: "sidebar",
      },
      type: "relationship",
      relationTo: "users",
    },
    {
      name: "createdYear",
      label: "Rok utworzenia",
      type: "number",
      required: true,
      admin: {
        position: "sidebar",
      },
      min: 2000,
      defaultValue: () => {
        return Number(new Date().getUTCFullYear().toString());
      },
      hooks: {
        beforeChange: [
          ({ siblingData, value }) => {
            if (siblingData._status === "published" || !value || value == "") {
              return Number(new Date().getUTCFullYear());
            }
            return value;
          },
        ],
      },
    },
  ],
};
