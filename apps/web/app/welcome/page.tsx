'use client';
import { BackgroundCard } from '@/components/example/Card';
import { user } from '../../../../packages/store/atoms/user';
import { useRecoilState } from 'recoil';

export default function Welcome() {
  const userId = useRecoilState(user);
  console.log(userId[0]);
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col md:flex-row justify-between max-w-max px-4 md:px-0 space-y-10 md:space-y-0 md:space-x-10">
        <BackgroundCard type="Admin" />
        <BackgroundCard type="Contributor" />
      </div>
    </div>
  );
}
