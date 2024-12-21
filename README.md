<p>
  <p>
    <h2>How Use Payload Cms</h2>
    <ul>
      <li>How Access Payload: example.example/admin. For example: pzs-zloczew.vercel.app/admin</li>
      <li>Add content in collection or globals.</li>
      <li>When you save changes, pages will be updated automatically</li>
    </ul>
  </p> 
  <br/>
 <p>
 <h2> Best Practises of using Payload To Reduce Costs</h2>
  <h3>Image</h3>
  <ul>
    <li>Upload Images On Free Image Hosting. <a href="https://imgbb.com/" target="_blank">imgbb.com</a></li>
    <li>Upload Img in admin panel by Direct Source Link Of Image</li>
    <li>If You Have To Upload Image On Our Server. Change It in max 720p.And Convert it in <a href="https://tinypng.com/">tinypng.com</a> To Lower Size Of Image. Or just Use one of the method</li>
  </ul>
  <h3>Files</h3>
  <ul>
    <li>Upload Files On Free Files Hosting. <a href="https://www.scribd.com" target="_blank">scribd.com</a></li>
    <li>
      Upload File by Iframe Link. <b>NOT WHOLE IFRAME BLOCK. ONLY LINK!!!!. EXAMPLE:</b>
    </li>
      <h3>Wrong❌</h3>
      <code>&lt;iframe id="inlineFrameExample" title="Inline Frame Example" width="300" height="200" src="https://www.openstreetmap.org/export/embed.html?bbox=-0.004017949104309083%2C51.47612752641776%2C0.00030577182769775396%2C51.478569861898606&layer=mapnik">&lt;/iframe&gt;</code>
      <h3>Correct✅</h3>
      https://www.openstreetmap.org/export/embed.html?bbox=-0.004017949104309083%2C51.47612752641776%2C0.00030577182769775396%2C51.478569861898606&layer=mapnik
  </ul>
  </p>
</p> 
<br/>
<p>
  <h1>!!WARNING!!</h1>
  <ul>
    <li>
      <h3>IF YOU HAVE NO IDEA HOW CHANGE SOMETHING. DON'T CHANGE IT!!!. 
    </li>
    <li>
      <h3>CONTACT WITH SOMEONE WHO HAVE KNOWLEDGE TO MAKE IT PROPERLY</h3>
    </li>
    <li>
      <h3>ANY CHANGE MAY CAUSE ERRORS. BE AWARE WHAT ARE YOU DOING</h3>
    </li>
  </ul>
</p>
<br>

<p>
  <h2>How To Make Changes</h2>
</p>
<p>
  <h3>You Have To be One Of Collaborators</h3>
  <h4>Not Recommended</h3>
  <ul>
    <li>You can Make Direct changes in Main Branch on Github</li>
  </ul>
  <h4>Recommended</h3>
  <ul>
    <li>Make Sure You Have GIT installed</li>
    <li>For better Experience Download Github Desktop and Visual Studio Code</li>
    <li>Clone App From Develpment Branch</li>
    <li>Make Your Changes</li>
    <li>In terminal Go to Folder Where You Have Cloned App</li>
    <li>then type <b>npx next build</b></li>
    <li>If every thing is Ok</li>
    <li>type <b>npx next start</b></li>
    <li>If every thing is Ok</li>
    <li>Commit Changes on development branch With Name that describe what You done</li>
    <li>If every thing is Ok</li>
    <li>Create Pull Request To Main Branch from Develpment Branch</li>
    <li>If every thing is Ok</li>
    <li>Marge this Pull Request</li>
  </ul>
</p>
<br/>
<p>
    <h3>Change Fav Icon</h3>
    <ol>
      <li>For example go to <a href="https://favicon.io/favicon-converter/">favicon.io</a>. Upload Image to Generate favIcons and Download them</li>
      <li>Go To Source Code <b><i>/Public</i></b> and <b>change icons with the same names! <i>(important!!!)</i></b></li>
      <li>Commit This Change and Give Name for this Commit. for example: FavIcon Change</li>
    </ol>
   <h3>Change Logo On Webiste</h3>
    <ol>
      <li>Logo must have name: logo.png</li>
      <li>Go To Source Code <b><i>/Public</i></b> and <b>and upload it there or replace it with already existing logo</li>
      <li>Commit This Change and Give Name for this Commit. for example: Logo Change</li>
    </ol>
   <p>
      <h3>Changes in Source code</h3>
       <ul>
         <li>Go to this path: src/app/(app)/</li>
         OR
         <li>Go to this path: src/</li>
       </ul>
    </p>
</p>
<br>

<p>
  <h2>Technology/Languages/Frameworks/Library/...</h2>
</p>

<p>
  <h3>Main Language:</h3>
  -TypeScript
</p>
<br>
<p>
  <h3>Library:</h3>
  -React(18.2.0)
</p>
<br>
<p>
  <h3>FrameWork:</h3>
  -NextJs(14.2.0-canary.23)
</p>
<br>
<p>
  <h3>Validaion Library:</h3>
  -Zod
</p>
<br>
<p>
  <h3>HTTP client:</h3>
  -Axios
    <br>
  -Octokit.js
</p>

<br>
<p>
  <h3>State Menager:</h3>
    <h4>Global State</h4>
     -zustand
</p>
<br>
<p>
  <h3>Ui FrameWorks:</h3>
  -Shadcn ui
    <br>
  -Radix
    <br>
  -Framer Motion
    <br>
  -React-icons
</p>
<br>
<p>
  <h3>Styling:</h3>
  -Tailwindcss
</p>
<br>
<p>
  <h3>Server: | Server Type: Edge</h3>
  -Vercel
</p>
<br>
<p>
  <h3>DataBase:</h3>
  -MongoDB
</p>
<br>
<p>
  <h3>Other:</h3>
  -HtmlParser: html-react-parser
  <br>
  -react-fast-marquee
    <br>
  -react-hook-form
  <br>
  -react-doc-viewer
</p>
<br>
<p>
  <h3>Cms:</h3>
  -Payload(3.0.0-beta.10)
</p>
<br>
<br>
<p>
##################################
<h3>For More Detail Go To⤵️</h3>
<h4><i>/package.json</b></h4>
##################################
</p>
<br/>
<br/>
<h2> Payload Blank Template</h2>
A blank template for [Payload](https://github.com/payloadcms/payload) to help you get up and running quickly. This repo may have been created by running `npx create-payload-app@latest` and selecting the "blank" template or by cloning this template on [Payload Cloud](https://payloadcms.com/new/clone/blank).
<br/>

See the official [Examples Directory](https://github.com/payloadcms/payload/tree/main/examples) for details on how to use Payload in a variety of different ways.
<br/>
<br/>

## Development

<br/>

To spin up the project locally, follow these steps:
<br/>

1. First clone the repo
1. Then `cd YOUR_PROJECT_REPO && cp .env.example .env`
1. Next `yarn && yarn dev` (or `docker-compose up`, see [Docker](#docker))
1. Now `open http://localhost:3000/admin` to access the admin panel
1. Create your first admin user using the form on the page
   <br/>
   <br/>

That's it! Changes made in `./src` will be reflected in your app.
<br/>
<br/>

# Payload Website Template

This is the official [Payload Website Template](https://github.com/payloadcms/payload/blob/main/templates/website). Use it to power websites, blogs, or portfolios from small to enterprise. This repo includes a fully-working backend, enterprise-grade admin panel, and a beautifully designed, production-ready website.

This template is right for you if you are working on:

- A personal or enterprise-grade website, blog, or portfolio
- A content publishing platform with a fully featured publication workflow
- Exploring the capabilities of Payload

Core features:

- [Pre-configured Payload Config](#how-it-works)
- [Authentication](#users-authentication)
- [Access Control](#access-control)
- [Layout Builder](#layout-builder)
- [Draft Preview](#draft-preview)
- [Live Preview](#live-preview)
- [Redirects](#redirects)
- [SEO](#seo)
- [Website](#website)

## Quick Start

To spin up this example locally, follow these steps:

### Clone

If you have not done so already, you need to have standalone copy of this repo on your machine. If you've already cloned this repo, skip to [Development](#development).

#### Method 1 (recommended)

Go to Payload Cloud and [clone this template](https://payloadcms.com/new/clone/website). This will create a new repository on your GitHub account with this template's code which you can then clone to your own machine.

#### Method 2

Use the `create-payload-app` CLI to clone this template directly to your machine:

```bash
pnpx create-payload-app my-project -t website
```

#### Method 3

Use the `git` CLI to clone this template directly to your machine:

```bash
git clone -n --depth=1 --filter=tree:0 https://github.com/payloadcms/payload my-project && cd my-project && git sparse-checkout set --no-cone templates/website && git checkout && rm -rf .git && git init && git add . && git mv -f templates/website/{.,}* . && git add . && git commit -m "Initial commit"
```

### Development

1. First [clone the repo](#clone) if you have not done so already
1. `cd my-project && cp .env.example .env` to copy the example environment variables
1. `pnpm install && pnpm dev` to install dependencies and start the dev server
1. open `http://localhost:3000` to open the app in your browser

That's it! Changes made in `./src` will be reflected in your app. Follow the on-screen instructions to login and create your first admin user. Then check out [Production](#production) once you're ready to build and serve your app, and [Deployment](#deployment) when you're ready to go live.

## How it works

The Payload config is tailored specifically to the needs of most websites. It is pre-configured in the following ways:

### Collections

See the [Collections](https://payloadcms.com/docs/configuration/collections) docs for details on how to extend this functionality.

- #### Users (Authentication)

  Users are auth-enabled collections that have access to the admin panel and unpublished content. See [Access Control](#access-control) for more details.

  For additional help, see the official [Auth Example](https://github.com/payloadcms/payload/tree/examples/auth) or the [Authentication](https://payloadcms.com/docs/authentication/overview#authentication-overview) docs.

- #### Posts

  Posts are used to generated blog posts, news articles, or any other type of content that is published over time. All posts are layout builder enabled so you can generate unique layouts for each post using layout-building blocks, see [Layout Builder](#layout-builder) for more details. Posts are also draft-enabled so you can preview them before publishing them to your website, see [Draft Preview](#draft-preview) for more details.

- #### Pages

  All pages are layout builder enabled so you can generate unique layouts for each page using layout-building blocks, see [Layout Builder](#layout-builder) for more details. Pages are also draft-enabled so you can preview them before publishing them to your website, see [Draft Preview](#draft-preview) for more details.

- #### Media

  This is the uploads enabled collection used by pages, posts, and projects to contain media like images, videos, downloads, and other assets. It features pre-configured sizes, focal point and manual resizing to help you manage your pictures.

- #### Categories

  A taxonomy used to group posts together. Categories can be nested inside of one another, for example "News > Technology". See the official [Payload Nested Docs Plugin](https://payloadcms.com/docs/plugins/nested-docs) for more details.

### Globals

See the [Globals](https://payloadcms.com/docs/configuration/globals) docs for details on how to extend this functionality.

- `Header`

  The data required by the header on your front-end like nav links.

- `Footer`

  Same as above but for the footer of your site.

## Access control

Basic access control is setup to limit access to various content based based on publishing status.

- `users`: Users can access the admin panel and create or edit content.
- `posts`: Everyone can access published posts, but only users can create, update, or delete them.
- `pages`: Everyone can access published pages, but only users can create, update, or delete them.

For more details on how to extend this functionality, see the [Payload Access Control](https://payloadcms.com/docs/access-control/overview#access-control) docs.

## Layout Builder

Create unique page layouts for any type of content using a powerful layout builder. This template comes pre-configured with the following layout building blocks:

- Hero
- Content
- Media
- Call To Action
- Archive

Each block is fully designed and built into the front-end website that comes with this template. See [Website](#website) for more details.

## Lexical editor

A deep editorial experience that allows complete freedom to focus just on writing content without breaking out of the flow with support for Payload blocks, media, links and other features provided out of the box. See [Lexical](https://payloadcms.com/docs/lexical/overview) docs.

## Draft Preview

All posts and pages are draft-enabled so you can preview them before publishing them to your website. To do this, these collections use [Versions](https://payloadcms.com/docs/configuration/collections#versions) with `drafts` set to `true`. This means that when you create a new post, project, or page, it will be saved as a draft and will not be visible on your website until you publish it. This also means that you can preview your draft before publishing it to your website. To do this, we automatically format a custom URL which redirects to your front-end to securely fetch the draft version of your content.

Since the front-end of this template is statically generated, this also means that pages, posts, and projects will need to be regenerated as changes are made to published documents. To do this, we use an `afterChange` hook to regenerate the front-end when a document has changed and its `_status` is `published`.

For more details on how to extend this functionality, see the official [Draft Preview Example](https://github.com/payloadcms/payload/tree/examples/draft-preview).

## Live preview

In addition to draft previews you can also enable live preview to view your end resulting page as you're editing content with full support for SSR rendering. See [Live preview docs](https://payloadcms.com/docs/live-preview/overview) for more details.

## SEO

This template comes pre-configured with the official [Payload SEO Plugin](https://payloadcms.com/docs/plugins/seo) for complete SEO control from the admin panel. All SEO data is fully integrated into the front-end website that comes with this template. See [Website](#website) for more details.

## Search

This template also pre-configured with the official [Payload Saerch Plugin](https://payloadcms.com/docs/plugins/search) to showcase how SSR search features can easily be implemented into Next.js with Payload. See [Website](#website) for more details.

## Redirects

If you are migrating an existing site or moving content to a new URL, you can use the `redirects` collection to create a proper redirect from old URLs to new ones. This will ensure that proper request status codes are returned to search engines and that your users are not left with a broken link. This template comes pre-configured with the official [Payload Redirects Plugin](https://payloadcms.com/docs/plugins/redirects) for complete redirect control from the admin panel. All redirects are fully integrated into the front-end website that comes with this template. See [Website](#website) for more details.

## Website

This template includes a beautifully designed, production-ready front-end built with the [Next.js App Router](https://nextjs.org), served right alongside your Payload app in a instance. This makes it so that you can deploy both your backend and website where you need it.

Core features:

- [Next.js App Router](https://nextjs.org)
- [TypeScript](https://www.typescriptlang.org)
- [React Hook Form](https://react-hook-form.com)
- [Payload Admin Bar](https://github.com/payloadcms/payload-admin-bar)
- [TailwindCSS styling](https://tailwindcss.com/)
- [shadcn/ui components](https://ui.shadcn.com/)
- User Accounts and Authentication
- Fully featured blog
- Publication workflow
- Dark mode
- Pre-made layout building blocks
- SEO
- Search
- Redirects
- Live preview

### Cache

Although Next.js includes a robust set of caching strategies out of the box, Payload Cloud proxies and caches all files through Cloudflare using the [Official Cloud Plugin](https://www.npmjs.com/package/@payloadcms/payload-cloud). This means that Next.js caching is not needed and is disabled by default. If you are hosting your app outside of Payload Cloud, you can easily reenable the Next.js caching mechanisms by removing the `no-store` directive from all fetch requests in `./src/app/_api` and then removing all instances of `export const dynamic = 'force-dynamic'` from pages files, such as `./src/app/(pages)/[slug]/page.tsx`. For more details, see the official [Next.js Caching Docs](https://nextjs.org/docs/app/building-your-application/caching).

## Development

To spin up this example locally, follow the [Quick Start](#quick-start). Then [Seed](#seed) the database with a few pages, posts, and projects.

### Docker

Alternatively, you can use [Docker](https://www.docker.com) to spin up this template locally. To do so, follow these steps:

1. Follow [steps 1 and 2 from above](#development), the docker-compose file will automatically use the `.env` file in your project root
1. Next run `docker-compose up`
1. Follow [steps 4 and 5 from above](#development) to login and create your first admin user

That's it! The Docker instance will help you get up and running quickly while also standardizing the development environment across your teams.

### Seed

To seed the database with a few pages, posts, and projects you can click the 'seed database' link from the admin panel.

The seed script will also create a demo user for demonstration purposes only:

- Demo Author
  - Email: `demo-author@payloadcms.com`
  - Password: `password`

> NOTICE: seeding the database is destructive because it drops your current database to populate a fresh one from the seed template. Only run this command if you are starting a new project or can afford to lose your current data.

## Production

To run Payload in production, you need to build and start the Admin panel. To do so, follow these steps:

1. Invoke the `next build` script by running `pnpm build` or `npm run build` in your project root. This creates a `.next` directory with a production-ready admin bundle.
1. Finally run `pnpm start` or `npm run start` to run Node in production and serve Payload from the `.build` directory.
1. When you're ready to go live, see Deployment below for more details.

### Deploying to Payload Cloud

The easiest way to deploy your project is to use [Payload Cloud](https://payloadcms.com/new/import), a one-click hosting solution to deploy production-ready instances of your Payload apps directly from your GitHub repo.

### Deploying to Vercel

This template can also be deployed to Vercel for free. You can get started by choosing the Vercel DB adapter during the setup of the template or by manually installing and configuring it:

```bash
pnpm add @payloadcms/db-vercel-postgres
```

```ts
// payload.config.ts
import { vercelPostgresAdapter } from '@payloadcms/db-vercel-postgres'

export default buildConfig({
  // ...
  db: vercelPostgresAdapter({
    pool: {
      connectionString: process.env.POSTGRES_URL || '',
    },
  }),
  // ...
```

We also support Vercel's blob storage:

```bash
pnpm add @payloadcms/storage-vercel-blob
```

```ts
// payload.config.ts
import { vercelBlobStorage } from '@payloadcms/storage-vercel-blob'

export default buildConfig({
  // ...
  plugins: [
    vercelBlobStorage({
      collections: {
        [Media.slug]: true,
      },
      token: process.env.BLOB_READ_WRITE_TOKEN || '',
    }),
  ],
  // ...
```

There is also a simplified [one click deploy](https://github.com/payloadcms/payload/tree/templates/with-vercel-postgres) to Vercel should you need it.

### Self-hosting

Before deploying your app, you need to:

1. Ensure your app builds and serves in production. See [Production](#production) for more details.
2. You can then deploy Payload as you would any other Node.js or Next.js application either directly on a VPS, DigitalOcean's Apps Platform, via Coolify or more. More guides coming soon.

You can also deploy your app manually, check out the [deployment documentation](https://payloadcms.com/docs/production/deployment) for full details.

## Questions

If you have any issues or questions, reach out to us on [Discord](https://discord.com/invite/payload) or start a [GitHub discussion](https://github.com/payloadcms/payload/discussions).
