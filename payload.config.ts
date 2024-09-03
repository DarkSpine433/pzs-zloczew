import { mongooseAdapter } from "@payloadcms/db-mongodb";
// import { payloadCloud } from '@payloadcms/plugin-cloud'
import { lexicalEditor } from "@payloadcms/richtext-lexical"; // editor-import
import { seo } from "node_modules/@payloadcms/plugin-seo/dist";
import path from "path";
import { buildConfig } from "payload/config";
// import sharp from 'sharp'
import { fileURLToPath } from "url";

import { Users } from "./collections/Users";
import { Pages } from "./collections/Pages";

import Nav from "./collections/Nav";
import { Offer } from "./collections/Offer";

import { News } from "./collections/News";

import { Contact } from "./collections/Contact";
import { Media } from "./collections/Media";
import { Projects } from "./collections/Projects";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  admin: {
    user: Users.slug,
  },
  collections: [Users, Pages, News, Media, Projects],
  plugins: [seo({ collections: ["posts"] })],
  globals: [Nav, Offer, Contact],
  editor: lexicalEditor({}),
  // plugins: [payloadCloud()], // TODO: Re-enable when cloud supports 3.0
  secret: process.env.PAYLOAD_SECRET || "",
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || "",
  }),

  // Sharp is now an optional dependency -
  // if you want to resize images, crop, set focal point, etc.
  // make sure to install it and pass it to the config.

  // This is temporary - we may make an adapter pattern
  // for this before reaching 3.0 stable

  // sharp,
});
