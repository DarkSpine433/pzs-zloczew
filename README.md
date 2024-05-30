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
    <li>Upload Img by Direct Source Link Of Image</li>
  </ul>
  <h3>Files</h3>
  <ul>
    <li>Upload Files On Free Files Hosting. <a href="https://www.scribd.com" target="_blank">scribd.com</a></li>
    <li>
      Upload File by Iframe Link. <b>NOT WHOLE IFRAME BLOCK. ONLY LINK!!!!. EXAMPLE:</b>
    </li>
      <h3>Wrong❌</h3>
      <code>< iframe id="inlineFrameExample" title="Inline Frame Example" width="300" height="200" src="https://www.openstreetmap.org/export/embed.html?bbox=-0.004017949104309083%2C51.47612752641776%2C0.00030577182769775396%2C51.478569861898606&layer=mapnik"></ iframe >
      </code>
      <h3>Correct✅</h3>
      <code>https://www.openstreetmap.org/export/embed.html?bbox=-0.004017949104309083%2C51.47612752641776%2C0.00030577182769775396%2C51.478569861898606&layer=mapnik</code>
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

### Docker
<br/>

Alternatively, you can use [Docker](https://www.docker.com) to spin up this project locally. To do so, follow these steps:

1. Follow [steps 1 and 2 from above](#development), the docker-compose file will automatically use the `.env` file in your project root
1. Next run `docker-compose up`
1. Follow [steps 4 and 5 from above](#development) to login and create your first admin user

That's it! The Docker instance will help you get up and running quickly while also standardizing the development environment across your teams.
<br/>
<br/>

## Production
<br/>

To run Payload in production, you need to build and serve the Admin panel. To do so, follow these steps:

1. First invoke the `payload build` script by running `yarn build` or `npm run build` in your project root. This creates a `./build` directory with a production-ready admin bundle.
1. Then run `yarn serve` or `npm run serve` to run Node in production and serve Payload from the `./build` directory.
<br/>
<br/>

### Deployment
<br/>

The easiest way to deploy your project is to use [Payload Cloud](https://payloadcms.com/new/import), a one-click hosting solution to deploy production-ready instances of your Payload apps directly from your GitHub repo. You can also deploy your app manually, check out the [deployment documentation](https://payloadcms.com/docs/production/deployment) for full details.
<br/>
<br/>

## Questions

If you have any issues or questions, reach out to us on [Discord](https://discord.com/invite/payload) or start a [GitHub discussion](https://github.com/payloadcms/payload/discussions).
#   p z s - z l o c z e w 
<br/>
<br/>
 
 
