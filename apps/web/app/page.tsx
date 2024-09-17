'use client';

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { getRepository } from './actions/getRepository';

export default function Home() {
  const { data: session, status } = useSession();
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRepos = async () => {
      if (session?.accessToken) {
        try {
          const data = await getRepository(session.accessToken);
          setRepos(data);
        } catch (err) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
      }
    };

    if (status === 'authenticated') {
      fetchRepos();
    } else {
      setLoading(false);
    }
  }, [session, status]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'unauthenticated') {
    return <div>Please sign in to view your repositories.</div>;
  }

  if (loading) {
    return <div>Loading repositories...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>{session.user.name}'s Repositories</h1>
      <ul>
        {repos.length > 0 ? (
          repos.map((repo) => (
            <li key={repo.id}>
              <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                {repo.name}
              </a>
            </li>
          ))
        ) : (
          <li>No repositories found.</li>
        )}
      </ul>
    </div>
  );
}
