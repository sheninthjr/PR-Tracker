import axios from 'axios';

export async function getCountCommits(
  owner: string,
  repo: string,
  token: string,
  page = 1,
  commitCount = 0,
): Promise<number> {
  try {
    const response = await axios.get(
      `https://api.github.com/repos/${owner}/${repo}/commits?per_page=100&page=${page}`,
      {
        headers: {
          Authorization: `token ${token}`,
        },
      },
    );
    commitCount += response.data.length;
    if (response.data.length === 100) {
      return getCountCommits(owner, repo, token, page + 1, commitCount);
    }
    return commitCount;
  } catch (error) {
    console.error('Error fetching commits:', error);
    return commitCount;
  }
}
