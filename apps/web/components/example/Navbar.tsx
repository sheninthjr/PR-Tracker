import React from 'react';
import Link from 'next/link';

export function Navbar() {
  return (
    <nav className="fixed bg-gray-900 p-4">
      <div className="flex justify-start items-center max-w-full mx-0">
        <div className="text-white text-2xl font-bold">
          <Link href="/">PR Tracker</Link>
        </div>
      </div>
    </nav>
  );
}
