import axios from 'axios';

// Replace with the correct repository owner and repo
const owner = 'code100x';
const repo = 'cms';

export async function getMaxPullRequestNumber() {
  try {
    const response = await axios.get(
      `https://api.github.com/repos/${owner}/${repo}/pulls?state=all`,
    );
    const pullRequests = response.data;

    if (pullRequests.length === 0) {
      console.log('No pull requests found.');
      return;
    }

    // Find the maximum pull request number
    const maxPRNumber = Math.max(...pullRequests.map((pr) => pr.number));
    console.log('Final pull request number:', maxPRNumber);
  } catch (error) {
    console.error('Error fetching pull requests:', error.message);
  }
}
