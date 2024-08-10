'use client';

import { useEffect } from 'react';

export default function RepoId({ params }: { params: { repoId: string } }) {
  useEffect(() => {
    alert(params.repoId);
  }, [params.repoId]);

  return (
    <div className="text-white flex justify-center h-screen text-5xl">
      My Post: {params.repoId}
    </div>
  );
}
