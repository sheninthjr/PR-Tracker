'use server';

import prisma from 'db';

export async function getRepository(accessToken: string, userId: string) {
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
    for (const repo of data) {
      try {
        await prisma.userRepository.upsert({
          where: {
            id: repo.id.toString(),
          },
          update: {
            name: repo.name,
            repoUrl: repo.html_url,
            fork: repo.fork,
            commitCount: 0,
            user: {
              connect: { id: userId },
            },
          },
          create: {
            id: repo.id.toString(),
            name: repo.name,
            repoUrl: repo.html_url,
            fork: repo.fork,
            commitCount: 0,
            user: {
              connect: { id: userId },
            },
          },
        });
      } catch (e) {
        console.log('Error while storing the repository in the database', e);
      }
    }
    return data;
  } catch (e) {
    console.error('Error while fetching repository: ', e);
  }
}
