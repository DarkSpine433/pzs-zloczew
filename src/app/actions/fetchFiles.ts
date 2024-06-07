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
    const { data } = await octokit.request(`GET /repos/${Owner}/${Repo}/contents/`, {
      owner: `${Owner}`,
      repo: `${Repo}`,
      path: '',
      headers: {
        'X-GitHub-Api-Version': '2022-11-28',
      },
    })
    const name = data.map((item: any) => item.name)
    const sha = data.map((item: any) => item.sha)
    const download_url = data.map((item: any) => item.download_url)

    return {
      message: `Uploaded File`,
      status: 200,
      download_url: download_url,
      sha: sha,
      name: name,
    }
  } catch (err: any) {
    return { message: 'Filed to Fetch Files' + err, status: 409 }
  }
}
