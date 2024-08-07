'use client';
import React from 'react';
import Link from 'next/link';
import { BackgroundGradient } from '../ui/background-gradient';
import { FRONTEND_URL } from '@/config';
import { useRouter } from 'next/navigation';

export function BackgroundCard({ type }: { type: 'Admin' | 'Contributor' }) {
  const navigate = useRouter();
  const handleClick = (url: string) => {
    navigate.push(url);
  };
  return (
    <div>
      <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-black dark:bg-zinc-900">
        <Link
          href={
            type === 'Admin'
              ? `${FRONTEND_URL}/admin/signup`
              : `${FRONTEND_URL}/user/signup`
          }
        >
          {type === 'Admin' && (
            <div className="space-y-4">
              <div className="text-3xl font-extrabold text-white text-center">
                Admin Login
              </div>
              <p className="text-base sm:text-xl text-center text-white mt-4 mb-2 dark:text-neutral-200">
                PR Repository Maintainer
              </p>

              <p className="text-md text-justify text-neutral-400 dark:text-neutral-400">
                PR Tracker helps the contributor to showcase the Open source
                contribution to the real world users
              </p>
              <div className="flex justify-center">
                <button
                  onClick={() => handleClick(`${FRONTEND_URL}/admin/signup`)}
                  className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
                >
                  Login
                </button>
              </div>
            </div>
          )}
          {type === 'Contributor' && (
            <div className="space-y-4">
              <div className="text-3xl font-extrabold text-white text-center">
                Contributor Login
              </div>
              <p className="text-base sm:text-xl text-center text-white mt-4 mb-2 dark:text-neutral-200">
                Login for more opportunities
              </p>

              <p className="text-md text-justify text-neutral-400 dark:text-neutral-400">
                PR Tracker helps the contributor to showcase the Open source
                contribution to the real world users
              </p>
              <div className="flex justify-center">
                <button
                  onClick={() => handleClick(`${FRONTEND_URL}/user/signup`)}
                  className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
                >
                  Login
                </button>
              </div>
            </div>
          )}
        </Link>
      </BackgroundGradient>
    </div>
  );
}
