"use server";

import { Octokit } from "@octokit/core";

export const fetchFiles = async () => {
  const GitHub_TOKEN = process.env.GITHUB_TOKEN!;
  const Owner = process.env.OWNER!;
  const Repo = process.env.REPO_NAME!;

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
    const name = data.map((item: any) => item.name);
    const sha = data.map((item: any) => item.sha);
    const download_url = data.map((item: any) => item.download_url);

    const dataConverted = name.map((item: any, index: number) => {
      let objecContainer = {
        sha: sha[index],
        download_url: download_url[index],
        name: name[index],
      };
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

      return objecContainer;
    });

    const dataConvertedSorted = dataConverted.sort((a: any, b: any) => {
      return (
        //@ts-ignore
        new Date(b.date.split("|").join(" ")) -
        //@ts-ignore
        new Date(a.date.split("|").join(" "))
      );
    });

    return {
      status: 200,
      data: dataConvertedSorted,
    };
  } catch (err: any) {
    return { message: "Filed to Fetch Files" + err, status: 409 };
  }
};
