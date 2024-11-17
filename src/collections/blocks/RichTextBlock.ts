// @ts-nocheck
import type { Block } from "payload/types";

import {
  HTMLConverterFeature,
  lexicalEditor,
  TreeViewFeature,
  lexicalHTML,
} from "@payloadcms/richtext-lexical";

export const RichTextBlock: Block = {
  slug: "text",
  labels: {
    singular: "tekst",
    plural: "tekst",
  },

  fields: [
    {
      name: "nameOfYourRichTextField",
      label:
        'Tekst Input || Użyj "/" aby użyć więcej opcji lub zaznacz tekst zeby go edytować',
      type: "richText",

      editor: lexicalEditor({
        features: ({ defaultFeatures }) => [
          // The HTMLConverter Feature is the feature which manages the HTML serializers. If you do not pass any arguments to it, it will use the default serializers.

          HTMLConverterFeature({}),
        ],
      }),
    },
    lexicalHTML("nameOfYourRichTextField", {
      name: "nameOfYourRichTextField_html",
    }),
  ],
};
