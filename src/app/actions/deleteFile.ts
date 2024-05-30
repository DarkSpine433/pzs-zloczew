'use server'

import { Octokit } from '@octokit/core'

type Props = {
  sha: String
  path: String
}

export const deleteFile = async ({ sha, path }: Props) => {
  if (sha && path) {
    const GitHub_TOKEN = process.env.GITHUB_TOKEN!
    const Owner = process.env.OWNER!
    const Repo = process.env.REPO_NAME!
    const Name = process.env.NAME!
    const Email = process.env.EMAIL!

    let octokit = new Octokit({
      auth: GitHub_TOKEN,
    })
    try {
      await octokit.request(`DELETE /repos/${Owner}/${Repo}/contents/${path}`, {
        owner: `${Owner}`,
        repo: `${Repo}`,
        path: 'PATH',
        message: 'Upload Image',
        committer: {
          name: `${Name}`,
          email: `${Email}`,
        },
        sha: `${sha}`,
        headers: {
          'X-GitHub-Api-Version': '2022-11-28',
        },
      })
      return { message: 'Deleted', status: 200 }
    } catch (err: any) {
      return { message: 'Filed to Delete File' + err, status: 409 }
    }
  } else {
    return { message: 'No Sha Found', status: 404 }
  }
}
