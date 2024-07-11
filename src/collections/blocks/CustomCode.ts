// @ts-nocheck
import type { CollectionConfig } from "payload/types";

import {
  HTMLConverterFeature,
  lexicalEditor,
  lexicalHTML,
} from "@payloadcms/richtext-lexical";

import { Block } from "payload/types";

export const CustomCode: Block = {
  slug: "customcode", // required
  labels: {
    singular: "Twój Własny Kod",
    plural: "Twój Własny Kod",
  },
  fields: [
    // required
    {
      name: "code",
      label: "Wpisz Kod w HTML/CSS/JS",
      type: "textarea",
      required: true,
    },
  ],
};
