import { Repository } from '@/hooks/useRepository';
import Image from 'next/image';

interface CustomCardProps {
  repoData: Repository[];
}

export function CustomCard({ repoData }: CustomCardProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 p-10 pt-9">
      {repoData.map((repo, index) => (
        <div
          key={index}
          className="group relative border border-transparent rounded-xl w-80 shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-indigo-500 opacity-0 rounded-xl transition-opacity duration-500 group-hover:opacity-50"></div>
          <div className="relative z-10 bg-[#0D1224] border border-slate-700 rounded-xl p-4 shadow-md transition-transform duration-300 group-hover:translate-y-2 group-hover:shadow-lg h-full flex flex-col justify-between">
            <div className="relative">
              <Image
                src={repo.imageUrl}
                width={3840}
                height={2160}
                quality={100}
                alt="Repository Image"
                className="w-full h-[180px] object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute top-2 right-2 bg-black text-white font-bold text-sm border border-white px-2 py-1 rounded-lg shadow-lg">
                🌟 {repo.starCount}
              </div>
            </div>
            <div className="mt-2 text-center">
              <h3 className="font-bold mb-2 text-xl text-white transition-colors duration-300">
                {repo.name}
              </h3>
              <p className="text-sm text-justify text-slate-300 mt-1 group-hover:text-white transition-colors duration-300 line-clamp-3 overflow-hidden text-ellipsis">
                {repo.description}
              </p>
            </div>

            <div className="mt-4">
              <div className="flex justify-center gap-2">
                {repo.tags.slice(0, 3).map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-3 py-1 rounded-md bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold text-sm transition-transform duration-300 transform hover:scale-105"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex justify-between mt-6 text-sm text-gray-700">
              <span className="flex items-center border-2 border-slate-700 border-gradient-to-r from-green-400 to-teal-400 px-3 py-1 rounded-lg shadow-md transition-transform duration-300 hover:scale-105">
                <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-500">
                  PRs:
                </span>
                <span className="ml-2 font-medium text-green-500">
                  {repo.prCount}
                </span>
              </span>
              <span className="flex items-center border-2 border-slate-700 border-gradient-to-r from-blue-400 to-cyan-500 px-3 py-1 rounded-lg shadow-md transition-transform duration-300 hover:scale-105">
                <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-500">
                  Commits:
                </span>
                <span className="ml-2 font-medium text-blue-500">
                  {repo.commitCount}
                </span>
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
