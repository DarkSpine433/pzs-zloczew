'use server'

import { Octokit } from '@octokit/core'
import { win32 } from 'path/posix'

type Props = {
  fileSrc: String | null
  fileName: [] | null
}

export const uploadFile = async ({ fileSrc, fileName }: Props) => {
  if (fileSrc && fileName) {
    const GitHub_TOKEN = process.env.GITHUB_TOKEN!
    const Owner = process.env.OWNER!
    const Repo = process.env.REPO_NAME!
    const Name = process.env.NAME!
    const Email = process.env.EMAIL!

    let octokit = new Octokit({
      auth: GitHub_TOKEN,
    })
    try {
      const crypto = require('crypto')
      const PathGenerated =
        'New' + crypto.randomBytes(20).toString('hex') + '.' + fileName[fileName.length - 1]
      const { status, data } = await octokit.request(
        `PUT /repos/${Owner}/${Repo}/contents/${PathGenerated}`,
        {
          owner: `${Owner}`,
          repo: `${Repo}`,
          path: `${PathGenerated}`,
          message: 'Upload Image',
          committer: {
            name: `${Name}`,
            email: `${Email}`,
          },
          content: `${fileSrc}`,
          headers: {
            'X-GitHub-Api-Version': '2022-11-28',
          },
        },
      )
      console.log(status)
      return {
        message: `Uploaded File`,
        status: 200,
        sha: data.content.sha,
        path: PathGenerated,
      }
    } catch (err: any) {
      return { message: 'Filed to Upload File' + err, status: 409 }
    }
  } else {
    return { message: 'No File Found Make Sure You Select A File', status: 404 }
  }
}
