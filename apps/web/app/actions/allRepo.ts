'use server';

import prisma from 'db';

export async function allRepo() {
  try {
    const repos = await prisma.repos.findMany();
    return repos;
  } catch (error) {
    console.error(`Error fetching repos: ${error}`);
    throw new Error('Failed to fetch repos');
  }
}
