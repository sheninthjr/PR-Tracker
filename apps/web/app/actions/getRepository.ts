'use server';

export async function getRepository(accessToken: string) {
  try {
    const response = await fetch('https://api.github.com/user/repos', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    if (!response.ok) {
      throw new Error('Failed to fetch repositories');
    }
    const data = await response.json();
    console.log(data);
    return data;
  } catch (e) {
    console.error('Error while fetching repository: ', e);
  }
}
