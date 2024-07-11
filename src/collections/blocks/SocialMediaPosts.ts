// @ts-nocheck
import type { CollectionConfig } from "payload/types";

import {
  HTMLConverterFeature,
  lexicalEditor,
  lexicalHTML,
} from "@payloadcms/richtext-lexical";

import { Block } from "payload/types";

export const SocialMediaPosts: Block = {
  slug: "socialmediaposts", // required
  labels: {
    singular: "Social Media Post",
    plural: "Social Media Post",
  },
  fields: [
    // required
    {
      name: "socialMediaName",
      type: "radio",
      options: [
        {
          label: "Facebook",
          value: "facebook",
        },
        {
          label: "Instagram",
          value: "instagram",
        },
        {
          label: "Tiktok",
          value: "tiktok",
        },
        {
          label: "Twitter",
          value: "twitter",
        },
      ],
      required: true,
    },
    {
      name: "url",
      label: "Url Postu",
      type: "text",
      required: true,
    },
  ],
};
