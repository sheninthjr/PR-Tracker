'use client';
import { Sidebar } from '@/components/example/SideBar';
import { user } from '../../../packages/store/atoms/user';
import { useRecoilState } from 'recoil';

export default function Home() {
  const userId = useRecoilState(user);

  return (
    <>
      <Sidebar />
    </>
  );
}
