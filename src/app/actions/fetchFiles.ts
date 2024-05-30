'use server'

import { Octokit } from '@octokit/core'

export const fetchFiles = async () => {
  const GitHub_TOKEN = process.env.GITHUB_TOKEN!
  const Owner = process.env.OWNER!
  const Repo = process.env.REPO_NAME!

  let octokit = new Octokit({
    auth: GitHub_TOKEN,
  })
  try {
    const { status, data } = await octokit.request(`GET /repos/${Owner}/${Repo}/readme`, {
      owner: `${Owner}`,
      repo: `${Repo}`,
      headers: {
        'X-GitHub-Api-Version': '2022-11-28',
      },
    })
    console.log(data, status)
    return {
      message: `Uploaded File`,
      status: 200,
      sha: data.content.sha,
    }
  } catch (err: any) {
    return { message: 'Filed to Fetch Files' + err, status: 409 }
  }
}
