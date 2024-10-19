"use server";

import { Octokit } from "@octokit/core";

export const fetchFiles = async () => {
  const GitHub_TOKEN = process.env.GITHUB_TOKEN ?? "";
  const Owner = process.env.OWNER ?? "";
  const Repo = process.env.REPO_NAME ?? "";

  if (!GitHub_TOKEN || !Owner || !Repo) {
    return {
      message: "Environment variables not set",
      status: 500,
    };
  }

  let octokit = new Octokit({
    auth: GitHub_TOKEN,
  });
  try {
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
    if (!data) {
      return {
        message: "No data found",
        status: 404,
      };
    }

    const name = data.map((item: any) => item.name);
    const sha = data.map((item: any) => item.sha);
    const download_url = data.map((item: any) => item.download_url);
    const path = data.map((item: any) => item.path);

    const dataConverted = name.map((item: any, index: number) => {
      let objecContainer: any = {
        sha: sha[index],
        download_url: download_url[index],
        name: name[index],
        path: path[index],
      };
      if (typeof item === "string") {
        let getRidOfExtention = item.split(".");
        getRidOfExtention.pop();
        const itemSplit = getRidOfExtention.join(".").split("_");
        itemSplit.map((item: any, index: number) => {
          if (itemSplit.length !== index) {
            const endItemSplit = item.split("=");
            objecContainer = {
              ...objecContainer,
              [endItemSplit[0]]: endItemSplit[1],
            };
          }
        });
      }

      return objecContainer;
    });

    const dataConvertedSorted = dataConverted.sort((a: any, b: any) => {
      if (a.date && b.date) {
        return (
          new Date(b.date.split("|").join(" ")).getTime() -
          new Date(a.date.split("|").join(" ")).getTime()
        );
      }
      return 0;
    });
    console.log(dataConvertedSorted);
    return {
      status: 200,
      data: dataConvertedSorted,
    };
  } catch (err: any) {
    return { message: "Error fetching files" + err, status: 500 };
  }
};
