import Link from 'next/link';
import { Search, Home, Settings, Award, Trophy } from 'lucide-react';

export function SideBar() {
  return (
    <div className="w-80 h-[90vh] text-white p-5 border-r border-r-[#252525] flex flex-col justify-between">
      <div className="flex flex-col space-y-8 flex-grow">
        <Link
          href="/"
          className="gap-4 font-bold text-2xl text-white flex pl-4 py-2 transition-colors duration-300 hover:bg-[#1A1A1D] rounded-lg cursor-pointer"
        >
          <Home className="self-center text-purple-500" size={'25'} /> Home
        </Link>
        <Link
          href="/explore"
          className="gap-4 font-bold text-2xl text-white flex pl-4 py-2 transition-colors duration-300 hover:bg-[#1A1A1D] rounded-lg cursor-pointer"
        >
          <Search className="self-center text-teal-400" size={'25'} /> Explore
        </Link>
        <Link
          href="/toprepository"
          className="gap-4 font-bold text-2xl text-white to-purple-500 flex pl-4 py-2 transition-colors duration-300 hover:bg-[#1A1A1D] rounded-lg cursor-pointer"
        >
          <Award className="self-center text-pink-500" size={'25'} /> Top Repos
        </Link>
        <Link
          href="/leaderboard"
          className="gap-4 font-bold text-2xl text-white to-orange-500 flex pl-4 py-2 transition-colors duration-300 hover:bg-[#1A1A1D] rounded-lg cursor-pointer"
        >
          <Trophy className="self-center text-yellow-500" size={'25'} />{' '}
          LeaderBoard
        </Link>
      </div>

      <div className="">
        <Link
          href="/settings"
          className="gap-4 font-bold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500 flex pl-4 py-2 transition-colors duration-300 hover:bg-[#1A1A1D] rounded-lg cursor-pointer"
        >
          <Settings className="self-center text-blue-400" size={'25'} />{' '}
          Settings
        </Link>
      </div>
    </div>
  );
}
