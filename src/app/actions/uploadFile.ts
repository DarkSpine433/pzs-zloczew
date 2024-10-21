"use server";

import { Octokit } from "@octokit/core";
import { Console } from "console";
import { join } from "path";

type Props = {
  fileSrc: String | null;
  fileName: [] | null;
  fileType: String | null;
};

export const uploadFile = async ({ fileSrc, fileName, fileType }: Props) => {
  if (fileSrc && fileName && fileType) {
    const GitHub_TOKEN = process.env.GITHUB_TOKEN!;
    const Owner = process.env.OWNER!;
    const Repo = process.env.REPO_NAME!;
    const Name = process.env.NAME!;
    const Email = process.env.EMAIL!;
    if (!GitHub_TOKEN || !Owner || !Repo) {
      return {
        message: "Environment variables not set",
        status: 500,
      };
    }

    //@ts-ignore
    let fileNames = fileName.split(".");

    let octokit = new Octokit({
      auth: GitHub_TOKEN,
    });
    try {
      const crypto = require("crypto");
      const generateDate = `date=${new Date()
        .toUTCString()
        .split(" ")
        .join("-")}`;
      let PathGenerated =
        generateDate +
        `_id=${crypto.randomBytes(10).toString("hex")}_filetype=${fileType.replaceAll("/", "-").toString()}_filename=${fileNames.join(".").replaceAll("_", "(-)")}.${fileNames[fileNames.length - 1]}`;

      PathGenerated = PathGenerated.replaceAll(" ", "%20");
      const { status, data } = await octokit.request(
        `PUT /repos/${Owner}/${Repo}/contents/${PathGenerated}`,
        {
          owner: `${Owner}`,
          repo: `${Repo}`,
          path: `${PathGenerated}`,
          message: "Upload Image",

          committer: {
            name: `${Name}`,
            email: `${Email}`,
          },
          content: `${fileSrc}`,
          headers: {
            "X-GitHub-Api-Version": "2022-11-28",
          },
        },
      );

      return {
        message: `Uploaded File`,
        status: 200,
        sha: data.content.sha,
        path: PathGenerated,
      };
    } catch (err: any) {
      return { message: "Filed to Upload File" + err, status: 409 };
    }
  } else {
    return {
      message: "No File Found Make Sure You Select A File",
      status: 404,
    };
  }
};

export const getShaInfoToCheckIfFileAlreadyExists = async (sha1: String) => {
  const GitHub_TOKEN = process.env.GITHUB_TOKEN ?? "";
  const Owner = process.env.OWNER ?? "";
  const Repo = process.env.REPO_NAME ?? "";

  if (!GitHub_TOKEN || !Owner || !Repo) {
    return false;
  }

  let octokit = new Octokit({
    auth: GitHub_TOKEN,
  });

  const { data } = await octokit.request(
    `GET /repos/${Owner}/${Repo}/contents/`,
    {
      owner: `${Owner}`,
      repo: `${Repo}`,
      path: "",
      headers: {
        "X-GitHub-Api-Version": "2022-11-28",
      },
    },
  );

  const sha = data.map((item: any) => item.sha);

  if (sha.includes(sha1)) {
    return true;
  }
  return false;
};
