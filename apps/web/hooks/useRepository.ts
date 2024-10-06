export interface Repository {
  name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  topics: string[];
  commitCount: number; // Commit count
  owner: {
    login: string;
    avatar_url: string;
  };
  fork: boolean; // Indicates if the repo is a fork
  source?: {
    owner?: {
      avatar_url: string;
    };
  };
}

// export function useRepository(): Repository[] {
//   const data: Repository[] = [
//     {
//       name: 'Next Level Dev',
//       description:
//         'Create seamless and personalized question papers effortlessly with our Question Paper Generator. Powered by React and TypeScript, this innovative tool automates the process, saving educators valuable time.',
//       imageUrl:
//         'https://i.pinimg.com/564x/80/b0/c5/80b0c5191a07687dabc6d5e863d2bf52.jpg',
//       starCount: 987,
//       prCount: 23,
//       commitCount: 152,
//       tags: ['Next.js', 'React', 'GraphQL'],
//     },
//     {
//       name: 'Tailwind Magic',
//       description: 'Explore custom designs with Tailwind CSS and patterns',
//       imageUrl:
//         'https://i.pinimg.com/564x/c9/83/4c/c9834cbab76848174803de2d2e74ff74.jpg',
//       starCount: 345,
//       prCount: 12,
//       commitCount: 89,
//       tags: ['TailwindCSS', 'CSS', 'Design'],
//     },
//     {
//       name: 'ReactPower',
//       description: 'Boost your React knowledge with patterns and techniques.',
//       imageUrl: 'https://avatars.githubusercontent.com/u/8079861?v=4',
//       starCount: 1432,
//       prCount: 76,
//       commitCount: 320,
//       tags: ['React', 'JavaScript', 'Hooks'],
//     },
//     {
//       name: 'API Guru',
//       description: 'Comprehensive guide to building and managing APIs.',
//       imageUrl: 'https://avatars.githubusercontent.com/u/158404377?s=48&v=4',
//       starCount: 1109,
//       prCount: 45,
//       commitCount: 210,
//       tags: ['Node.js', 'Express', 'APIs'],
//     },
//     {
//       name: 'VueMaster',
//       description: 'Advanced Vue.js practices for seamless UI development.',
//       imageUrl:
//         'https://lh3.googleusercontent.com/a/ACg8ocKlD9GXjUunundfJ4FhbJRnuYI8w54lNeSADKhLNcYQ51pP65I=s96-c',
//       starCount: 876,
//       prCount: 34,
//       commitCount: 190,
//       tags: ['Vue.js', 'JavaScript', 'SPA'],
//     },
//     {
//       name: 'Fullstack Blitz',
//       description: 'End-to-end guide for building fullstack applications.',
//       imageUrl:
//         'https://lh3.googleusercontent.com/a/ACg8ocKlD9GXjUunundfJ4FhbJRnuYI8w54lNeSADKhLNcYQ51pP65I=s96-c',
//       starCount: 1578,
//       prCount: 98,
//       commitCount: 400,
//       tags: ['Node.js', 'React', 'MongoDB', 'Fullstack'],
//     },
//     {
//       name: 'AI Innovator',
//       description: 'A repository for AI and machine learning enthusiasts.',
//       imageUrl:
//         'https://lh3.googleusercontent.com/a/ACg8ocKlD9GXjUunundfJ4FhbJRnuYI8w54lNeSADKhLNcYQ51pP65I=s96-c',
//       starCount: 1300,
//       prCount: 56,
//       commitCount: 230,
//       tags: ['Python', 'Machine Learning', 'AI'],
//     },
//     {
//       name: 'DockerWorld',
//       description: 'All about Docker containers and orchestration techniques.',
//       imageUrl:
//         'https://lh3.googleusercontent.com/a/ACg8ocKlD9GXjUunundfJ4FhbJRnuYI8w54lNeSADKhLNcYQ51pP65I=s96-c',
//       starCount: 643,
//       prCount: 33,
//       commitCount: 142,
//       tags: ['Docker', 'Kubernetes', 'DevOps'],
//     },
//     {
//       name: 'TypeScript Pro',
//       description: 'Learn how to write type-safe JavaScript with TypeScript.',
//       imageUrl:
//         'https://lh3.googleusercontent.com/a/ACg8ocKlD9GXjUunundfJ4FhbJRnuYI8w54lNeSADKhLNcYQ51pP65I=s96-c',
//       starCount: 1550,
//       prCount: 67,
//       commitCount: 290,
//       tags: ['TypeScript', 'JavaScript', 'OOP'],
//     },
//     {
//       name: 'Open Source Helper',
//       description: 'Helping developers contribute to open source projects.',
//       imageUrl:
//         'https://lh3.googleusercontent.com/a/ACg8ocKlD9GXjUunundfJ4FhbJRnuYI8w54lNeSADKhLNcYQ51pP65I=s96-c',
//       starCount: 912,
//       prCount: 20,
//       commitCount: 175,
//       tags: ['Open Source', 'Git', 'Collaboration'],
//     },
//   ];

//   return data;
// }
