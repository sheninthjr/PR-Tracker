export function NavBar() {
  return (
    <div className="flex text-white justify-between items-center p-5 border-b border-b-slate-700 w-full">
      <div className="font-bold text-3xl pl-4">
        <a
          href="/"
          className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 flex transition-colors duration-300 hover:bg-[#1A1A1D]"
        >
          PR Tracker
        </a>
      </div>
      <div className="flex gap-4">
        <div>
          <button className="bg-gradient-to-r from-purple-500 to-pink-500 px-5 py-2 rounded-lg font-semibold text-white shadow-lg transition-transform hover:scale-105">
            Leaderboard
          </button>
        </div>
        <div>
          <button className="bg-[#886DFA] px-5 py-2 rounded-lg font-semibold text-white shadow-lg transition-transform hover:scale-105">
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
