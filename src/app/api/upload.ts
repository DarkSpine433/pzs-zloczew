import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'

interface Data {
  url?: string
  message?: string
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Only POST requests allowed' })
  }

  const { fileName, content } = req.body

  if (!fileName || !content) {
    return res.status(400).json({ message: 'Missing fileName or content' })
  }

  const token = process.env.GITHUB_TOKEN
  const repo = 'your-repo'
  const owner = 'your-username'
  const path = `path/to/${fileName}`
  const message = `Upload ${fileName}`

  const url = `https://api.github.com/repos/${owner}/${repo}/contents/${path}`

  try {
    const response = await axios.put(
      url,
      {
        message,
        content,
      },
      {
        headers: {
          Authorization: `token ${token}`,
          'Content-Type': 'application/json',
        },
      },
    )

    return res.status(200).json({ url: response.data.content.html_url })
  } catch (error: any) {
    return res
      .status(500)
      .json({ message: error.response ? error.response.data.message : error.message })
  }
}
