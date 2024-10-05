'use client';

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { Repository } from '@/hooks/useRepository';
import { CustomCard } from '@/components/ui/CustomCard';
import { getRepository } from './actions/getRepository';
import { getMaxPullRequestNumber } from '@/hooks/getMaxPullRequestNumber';

export default function Home() {
  const { data: session, status } = useSession();
  const [repos, setRepos] = useState<Repository[]>([]);

  useEffect(() => {
    if (session?.accessToken) {
      const getRepo = async () => {
        const response = await getRepository(session.accessToken);
        console.log(response);
        const prCount = await getMaxPullRequestNumber();
        alert(prCount);
        setRepos(response);
      };
      getRepo();
    }
  }, [session]);

  return <CustomCard repoData={repos} />;
}
