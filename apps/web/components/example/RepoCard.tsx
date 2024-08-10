'use client';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { HoverEffect } from '../ui/card-hover-effect';

interface RepoItem {
  id: string;
  title: string;
  description: string;
  githubUrl: string;
  forkCount: string;
  starCount: string;
  commitCount: string;
  adminId: string;
}

export function RepoCard() {
  const [projects, setProjects] = useState<RepoItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/allrepo');
        setProjects(response.data);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="text-white flex justify-start">
      <div className="max-w-max mx-auto px-8">
        <HoverEffect
          items={projects.map((project) => ({
            id: project.id,
            title: project.title,
            description: project.description,
          }))}
        />
      </div>
    </div>
  );
}
