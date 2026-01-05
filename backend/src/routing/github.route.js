import express from "express";
import { getGithubProfile, getGithubRepos } from "../services/git.service.js";

const router = express.Router();

router.get("/:username", async (req, res) => {
  const { username } = req.params;
  console.log(username);

  try {
    const profile = await getGithubProfile(username);
    const repos = await getGithubRepos(username);

    res.json({ profile, repos });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
