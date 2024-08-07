import { BackgroundCard } from '@/components/example/Card';

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col md:flex-row justify-between max-w-max px-4 md:px-0 space-y-10 md:space-y-0 md:space-x-10">
        <BackgroundCard type="Admin" />
        <BackgroundCard type="Contributor" />
      </div>
    </div>
  );
}
