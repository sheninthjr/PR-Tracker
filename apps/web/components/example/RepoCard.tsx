import { HoverEffect } from '../ui/card-hover-effect';

export function RepoCard() {
  return (
    <div className="text-white flex justify-start">
      <div className="max-w-max mx-auto px-8">
        <HoverEffect items={projects} />
      </div>
    </div>
  );
}
export const projects = [
  {
    id: 1,
    title: 'Stripe',
    description:
      'A technology company that builds economic infrastructure for the internet.',
  },
  {
    id: 2,
    title: 'Netflix',
    description:
      'A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.',
  },
  {
    id: 3,
    title: 'Google',
    description:
      'A multinational technology company that specializes in Internet-related services and products.',
  },
  {
    id: 4,
    title: 'Meta',
    description:
      "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
  },
  {
    id: 5,
    title: 'Amazon',
    description:
      'A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.',
  },
  {
    id: 6,
    title: 'Microsoft',
    description:
      'A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.',
  },
];
