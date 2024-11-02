import { Repository } from '@/hooks/useRepository';
import Image from 'next/image';
import { useState } from 'react';
import { Input } from './input';
import {
  Select,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectContent,
} from './select';

type CustomCardProps = {
  repoData: Repository[];
};

const truncateName = (name: string, maxLength: number = 25): string => {
  return name.length > maxLength ? `${name.slice(0, maxLength)}...` : name;
};

export function CustomCard({ repoData }: CustomCardProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOption, setSortOption] = useState<string>('stars');

  const sortedRepoData = [...repoData].sort((a, b) => {
    if (b.stargazers_count !== a.stargazers_count) {
      return b.stargazers_count - a.stargazers_count;
    }
    if (b.fork !== a.fork) {
      return b.fork ? 1 : -1;
    }
    if (b.forks_count !== a.forks_count) {
      return b.forks_count - a.forks_count;
    }
    return b.commitCount - a.commitCount;
  });

  const filteredAndSortedRepoData = sortedRepoData
    .filter((repo) =>
      repo.name.toLowerCase().includes(searchTerm.toLowerCase()),
    )
    .filter((repo) => {
      if (sortOption === 'forks') {
        return repo.fork;
      }
      return true;
    })
    .sort((a, b) => {
      switch (sortOption) {
        case 'stars':
          return b.stargazers_count - a.stargazers_count;
        case 'forks':
          return b.forks_count - a.forks_count;
        case 'commits':
          return b.commitCount - a.commitCount;
        default:
          return 0;
      }
    });

  return (
    <>
      <div className="pl-10 pr-16 pt-5 flex justify-between w-full">
        <div className="w-[75%]">
          <Input
            title="Search..."
            className="border border-slate-600"
            placeholder="Search your repository name"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="w-[20%]">
          <Select onValueChange={(value) => setSortOption(value)}>
            <SelectTrigger className="border-slate-600 text-white">
              <SelectValue placeholder="Sort by" className="text-white" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="stars">Sort by Stars</SelectItem>
              <SelectItem value="forks">Select by Forked Repo</SelectItem>
              <SelectItem value="fork_count">Sort by Forks Count</SelectItem>
              <SelectItem value="commits">Sort by Commits</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 p-10">
        {filteredAndSortedRepoData.map((repo, index) => (
          <div
            key={index}
            className="group relative border border-transparent rounded-xl w-80 shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-indigo-500 opacity-0 rounded-xl transition-opacity duration-500 group-hover:opacity-50"></div>
            <div className="relative z-10 bg-[#0D1224] border border-slate-700 rounded-xl p-4 shadow-md transition-transform duration-300 group-hover:translate-y-2 group-hover:shadow-lg h-full flex flex-col justify-between">
              <div className="relative">
                {repo.fork && repo.source?.owner?.avatar_url ? (
                  <Image
                    src={repo.source.owner.avatar_url}
                    width={3840}
                    priority={true}
                    height={2160}
                    quality={100}
                    alt="Forked Repository Owner Avatar"
                    className="w-full h-[180px] object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
                  />
                ) : repo.owner?.avatar_url ? (
                  <Image
                    src={repo.owner.avatar_url}
                    width={3840}
                    height={2160}
                    priority={true}
                    quality={100}
                    alt="Repository Owner Avatar"
                    className="w-full h-[180px] object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-[180px] bg-gray-200 rounded-xl flex items-center justify-center">
                    <span className="text-gray-500">No Image Available</span>
                  </div>
                )}
                <div className="absolute top-2 right-2 bg-black text-white font-bold text-sm border border-white px-2 py-1 rounded-lg shadow-lg">
                  🌟 {repo.stargazers_count}
                </div>
              </div>
              <div className="mt-2 text-center">
                <h3 className="font-bold mb-2 text-xl text-white transition-colors duration-300">
                  {truncateName(repo.name)}
                </h3>
                <p className="text-sm text-justify text-slate-300 mt-1 group-hover:text-white transition-colors duration-300 line-clamp-3 overflow-hidden text-ellipsis">
                  {repo.description}
                </p>
              </div>

              <div className="mt-4">
                <div className="flex justify-center gap-2">
                  {repo.topics.slice(0, 3).map((topic, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 rounded-md bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold text-sm transition-transform duration-300 transform hover:scale-105"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex justify-between mt-6 text-sm text-gray-700">
                <span className="flex items-center border-2 border-slate-700 border-gradient-to-r from-green-400 to-teal-400 px-3 py-1 rounded-lg shadow-md transition-transform duration-300 hover:scale-105">
                  <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-500">
                    Fork:
                  </span>
                  <span className="ml-2 font-medium text-green-500">
                    {repo.forks_count || 0}
                  </span>
                </span>
                <span className="flex items-center border-2 border-slate-700 border-gradient-to-r from-blue-400 to-cyan-500 px-3 py-1 rounded-lg shadow-md transition-transform duration-300 hover:scale-105">
                  <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-500">
                    Commits:
                  </span>
                  <span className="ml-2 font-medium text-blue-500">
                    {repo.commitCount || 0}
                  </span>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
