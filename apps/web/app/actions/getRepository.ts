'use server';

// import prisma from 'db';

export async function getRepository(accessToken: string) {
  try {
    let allRepositories: any = [];
    let page = 1;

    while (true) {
      const response = await fetch(
        `https://api.github.com/user/repos?per_page=100&page=${page}`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        },
      );

      if (!response.ok) {
        throw new Error('Failed to fetch repositories');
      }

      const data = await response.json();
      if (data.length === 0) {
        break;
      }

      allRepositories = allRepositories.concat(data);
      page++;
    }

    // Uncomment and modify the following section if you want to store repositories in your database.
    // for (const repo of allRepositories) {
    //   try {
    //     await prisma.userRepository.upsert({
    //       where: {
    //         id: repo.id.toString(),
    //       },
    //       update: {
    //         name: repo.name,
    //         repoUrl: repo.html_url,
    //         fork: repo.fork,
    //         commitCount: 0,
    //         user: {
    //           connect: { id: userId },
    //         },
    //       },
    //       create: {
    //         id: repo.id.toString(),
    //         name: repo.name,
    //         repoUrl: repo.html_url,
    //         fork: repo.fork,
    //         commitCount: 0,
    //         user: {
    //           connect: { id: userId },
    //         },
    //       },
    //     });
    //   } catch (e) {
    //     console.log('Error while storing the repository in the database', e);
    //   }
    // }

    return allRepositories;
  } catch (e) {
    console.error('Error while fetching repository: ', e);
  }
}
