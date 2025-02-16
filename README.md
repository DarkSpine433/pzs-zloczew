# Project Documentation

## CMS Information

For detailed information about the CMS, refer to the [Payload CMS Documentation](https://payloadcms.com/docs/).

## Technologies and Dependencies

You can find a list of the technologies, languages, frameworks, libraries, and other dependencies used in this project in the [`package.json`](./package.json) file.

## Contributing to the Project🚀

If you would like to contribute to this project, please ensure that your reports follow the appropriate templates:

- [Bug Report](./.github/ISSUE_TEMPLATE/bug_report.md)
- [Feature Request](./.github/ISSUE_TEMPLATE/feature_request.md)

Or Make **Pull Request** To **Development Branch** And We Will Check It Out

## Using the CMS

**Note:** Changes made within the CMS may take some time to be reflected on the website.

- **Accessing the CMS:** Navigate to `yourdomain.com/admin`. For example: [pzs-zloczew.vercel.app/admin](https://pzs-zloczew.vercel.app/admin).
- **Adding Content:** You can add content in collections or globals.
- **Saving Changes:** Once you save your changes, the pages will be updated automatically.

## Best Practices for Using CMS to Reduce Costs

### Images

- **External Hosting:** Upload images to free image hosting services like [imgbb.com](https://imgbb.com/).
- **Direct Source Link:** In the admin panel, upload images by providing the direct source link.
- **Server Uploads:** If you must upload images to our server, ensure they are no larger than 720p and compress them using [tinypng.com](https://tinypng.com/).

### Files

- **External Hosting:** Upload files to free file hosting services like [scribd.com](https://www.scribd.com).
- **Embedding Files:** Upload files by providing the iframe link. **Do not include the entire iframe tag; only provide the link.**

  **❌Incorrect:**

  ```html
  <iframe
    id="inlineFrameExample"
    title="Inline Frame Example"
    width="300"
    height="200"
    src="https://www.openstreetmap.org/export/embed.html?bbox=-0.004017949104309083%2C51.47612752641776%2C0.00030577182769775396%2C51.478569861898606&layer=mapnik"
  ></iframe>
  ```

  **✅Correct:**

  ```
  https://www.openstreetmap.org/export/embed.html?bbox=-0.004017949104309083%2C51.47612752641776%2C0.00030577182769775396%2C51.478569861898606&layer=mapnik
  ```

## ⚠️ Warning ⚠️

**If you are unsure about making a change, please do not proceed.**

- **Contact:** Reach out to someone with the necessary knowledge to make the change properly.
- **Caution:** Any change may cause errors. Be aware of what you are doing.

## Making Changes

**You must be a collaborator to make changes.**

### Not Recommended

- Making direct changes in the main branch on GitHub.

### Recommended

1. Ensure you have Git installed.
2. For a better experience, download GitHub Desktop and Visual Studio Code.
3. Clone the app from the development branch.
4. Make your changes.
5. In the terminal, navigate to the folder where you cloned the app.
6. Run `npx next build`.
7. If everything is okay, run `npx next start`.
8. If everything is okay, commit your changes to the development branch with a descriptive commit message.
9. Create a pull request to merge the development branch into the main branch.
10. Merge the pull request after review.

## Changing the Favicon

1. Visit [favicon.io](https://favicon.io/favicon-converter/), upload an image to generate favicons, and download them.
2. Go to the [public folder](/public) and **replace the existing icons with the new ones (keeping the same filenames!).**
3. Commit the changes with a meaningful commit message, e.g., `Updated Favicon`.

## Changing the Website Logo

1. The logo file must be named `logo.png`.
2. Go to the [public folder](/public) and upload or replace the existing logo.
3. Commit the changes with a meaningful commit message, e.g., `Updated Logo`.

## Making Source Code Changes

- Navigate to the source code paths:
  - `src/app/(app)/`
  - OR `src/`

---

# Development

## Running the Project Locally

To spin up the project locally, follow these steps:

1. Clone the repository.
2. Run `cd YOUR_PROJECT_REPO && cp .env.example .env`.
3. Install dependencies: `yarn && yarn dev` (or `docker-compose up`, see [Docker](#docker)).
4. Open [http://localhost:3000/admin](http://localhost:3000/admin) to access the admin panel.
5. Create your first admin user using the provided form.

Changes made in `./src` will be reflected in your app.

## Self-Hosting

Before deploying your app, ensure:

1. The app builds and serves correctly in production (see [Production](#production) for details).
2. Deploy Payload like any other Node.js or Next.js application via VPS, DigitalOcean, Coolify, etc.

For full details, check the [deployment documentation](https://payloadcms.com/docs/production/deployment).

## Questions

If you have any issues or questions, reach out on [Discord](https://discord.com/invite/payload) or start a [GitHub discussion](https://github.com/payloadcms/payload/discussions).
