'use client';
import React, { useState } from 'react';
import { ModelCard } from './ModelCard';
import Link from 'next/link';

export function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <nav className="bg-gray-900 p-4 flex justify-between items-center w-full fixed z-50">
      <div className="text-white text-2xl font-bold">
        <Link href="/">PR Tracker</Link>
      </div>
      <div className="text-white hidden md:block lg:block xl:block">
        <button onClick={handleModalToggle} className="p-[3px] relative">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
          <div className="px-8 py-2 bg-black rounded-[6px] relative group transition duration-200 text-white hover:bg-transparent">
            Create
          </div>
        </button>
      </div>
      {isModalOpen && <ModelCard onClose={handleCloseModal} />}
    </nav>
  );
}
