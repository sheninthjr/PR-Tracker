'use client';

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { Repository, useRepository } from '@/hooks/useRepository';
import { CustomCard } from '@/components/ui/CustomCard';

export default function Home() {
  const { data: session, status } = useSession();
  const [repos, setRepos] = useState<Repository[]>([]);
  const data = useRepository();

  useEffect(() => {
    setRepos(data);
  }, [data]);

  return <CustomCard repoData={repos} />;
}
