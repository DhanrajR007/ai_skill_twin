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
  const detectDomain = (repo) => {
    const name = repo.name.toLowerCase();
    const lang = repo.language?.toLowerCase();

    if (lang === "python") return "data-backend";
    if (lang === "javascript" || lang === "typescript" || lang === "node")
      return "mern";
    if (lang === "java") return "backend";
    if (lang === "glsl") return "graphics";
    if (lang === "c" || lang === "c++" || lang === "rust") return "systems";
    if (lang === "go") return "backend";
    if (lang === "html" || lang === "css") return "frontend";

    if (
      name.includes("shader") ||
      name.includes("glsl") ||
      name.includes("threejs")
    )
      return "3D";
    if (name.includes("ml") || name.includes("ai")) return "data-backend";
    if (
      name.includes("api") ||
      name.includes("server") ||
      name.includes("backend") ||
      name.includes("mern") ||
      name.includes("node") ||
      name.includes("express") ||
      name.includes("react") ||
      name.includes("frontend")
    )
      return "mern";

    if (name.includes("systems")) return "systems";

    return "general";
  };

  const calculateRepoScore = (repo, domainDepth = 15) => {
    let score = 0;

    // Activity
    const months =
      (new Date().getFullYear() - new Date(repo.updated_at).getFullYear()) *
        12 +
      (new Date().getMonth() - new Date(repo.updated_at).getMonth());

    if (months <= 3) score += 20;
    else if (months <= 6) score += 15;
    else if (months <= 12) score += 10;
    else score += 5;

    // Popularity
    if (repo.stargazers_count > 50) score += 15;
    else if (repo.stargazers_count > 10) score += 10;
    else if (repo.stargazers_count > 0) score += 5;

    if (repo.forks_count > 30) score += 10;
    else if (repo.forks_count > 10) score += 5;

    // Size
    if (repo.size > 1000) score += 20;
    else if (repo.size > 500) score += 15;
    else if (repo.size > 200) score += 10;
    else score += 5;

    // Original
    score += repo.fork ? 5 : 15;

    // Tech depth (pass manually)
    score += domainDepth;

    return Math.min(score, 100);
  };

  const { data } = await octokit.repos.listForUser({
    username,
    per_page: 100,
    sort: "updated",
  });

  const filteredRepos = data.map((repo) => {
    return {
      name: repo.name,
      domain: detectDomain(repo),
      score: calculateRepoScore(repo),
    };
  });

  return filteredRepos;
};
