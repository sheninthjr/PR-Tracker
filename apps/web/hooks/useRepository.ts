export interface Repository {
  name: string;
  description: string;
  imageUrl: string;
  starCount: number;
  prCount: number;
  commitCount: number;
  tags: string[];
}

export function useRepository(): Repository[] {
  const data: Repository[] = [
    {
      name: 'Awesome Repository',
      description: 'This is a dummy description of a repository.',
      imageUrl:
        'https://lh3.googleusercontent.com/a/ACg8ocKlD9GXjUunundfJ4FhbJRnuYI8w54lNeSADKhLNcYQ51pP65I=s96-c',
      starCount: 1234,
      prCount: 42,
      commitCount: 256,
      tags: ['JavaScript', 'React', 'Next.js', 'TailwindCSS'],
    },
    {
      name: 'Shenith Jr',
      description: 'This is a dummy description of a repository.',
      imageUrl:
        'https://lh3.googleusercontent.com/a/ACg8ocKlD9GXjUunundfJ4FhbJRnuYI8w54lNeSADKhLNcYQ51pP65I=s96-c',
      starCount: 1234,
      prCount: 42,
      commitCount: 256,
      tags: ['JavaScript', 'React', 'Next.js', 'TailwindCSS'],
    },
  ];
  return data;
}
