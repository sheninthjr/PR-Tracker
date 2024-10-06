'use client';

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { Repository } from '@/hooks/useRepository';
import { CustomCard } from '@/components/ui/CustomCard';
import { getRepository } from './actions/getRepository';
import { getCountCommits } from '@/hooks/getCommitCount';

export default function Home() {
  const { data: session } = useSession();
  const [repos, setRepos] = useState<Repository[]>([]);

  useEffect(() => {
    if (session?.accessToken) {
      const getRepoData = async () => {
        const storedRepoData = localStorage.getItem('repoData');
        if (storedRepoData) {
          setRepos(JSON.parse(storedRepoData));
          return;
        }
        const response = await getRepository(session.accessToken);
        const reposWithCommitCounts = await Promise.all(
          response.map(async (repo: Repository) => {
            const commitCount = await getCountCommits(
              repo.owner.login,
              repo.name,
              session.accessToken,
            );
            return { ...repo, commitCount };
          }),
        );
        console.log(reposWithCommitCounts);
        localStorage.setItem('repoData', JSON.stringify(reposWithCommitCounts));
        setRepos(reposWithCommitCounts);
      };

      getRepoData();
    }
  }, [session]);

  return <CustomCard repoData={repos} />;
}
