import { Octokit } from "@octokit/rest";

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN, // optional but recommended
});

export const getGithubProfile = async (username) => {
  const { data } = await octokit.users.getByUsername({
    username,
  });

  const {
    avatar_url,
    login,
    name,
    bio,
    public_repos,
    public_gists,
    followers,
    following,
  } = data;

  return {
    avatar_url,
    login,
    name,
    bio,
    public_repos,
    public_gists,
    followers,
    following,
  };
};

export const getGithubRepos = async (username) => {
  const { data } = await octokit.repos.listForUser({
    username,
    per_page: 100,
    sort: "updated",
  });

  const {
    name,
    full_name,
    html_url,
    fork,
    created_at,
    updated_at,
    size,
    stargazers_count,
    watchers_count,
    language,
    forks_count,

    topics,
  } = data;
  return {
    name,
    full_name,
    html_url,
    fork,
    created_at,
    updated_at,
    size,
    stargazers_count,
    watchers_count,
    language,
    forks_count,
    topics,
  };
};
