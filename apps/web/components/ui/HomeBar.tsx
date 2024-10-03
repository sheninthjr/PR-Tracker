import { NavBar } from './NavBar';
import { SideBar } from './SideBar';

export function HomeBar({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full mx-auto text-white flex flex-col h-screen">
      <NavBar />
      <div className="flex flex-1 overflow-hidden">
        <SideBar />
        <div className="flex-1 overflow-y-auto p-6">{children}</div>{' '}
      </div>
    </div>
  );
}
