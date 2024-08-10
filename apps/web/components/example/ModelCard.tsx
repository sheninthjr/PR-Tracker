'use client';
import React, { useState } from 'react';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { BackgroundGradient } from '../ui/background-gradient';
import { motion } from 'framer-motion';

export function ModelCard({ onClose }: { onClose: () => void }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [githubUrl, setGithubUrl] = useState('');

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setTitle(e.target.value);
  const handleDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
    setDescription(e.target.value);
  const handleGithubUrlChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setGithubUrl(e.target.value);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 perspective-1000">
      <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm" />
      <BackgroundGradient>
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.9,
            rotateX: 20,
            rotateY: 20,
            zIndex: 1,
          }}
          animate={{ opacity: 1, scale: 1, rotateX: 0, rotateY: 0 }}
          exit={{ opacity: 0, scale: 0.9, rotateX: 20, rotateY: 20 }}
          whileHover={{ scale: 1.05, rotateX: 5, rotateY: 5 }}
          transition={{ duration: 0.3 }}
          className="relative bg-black p-8 rounded-2xl shadow-lg transform-style-preserve-3d w-max lg:w-[35rem] xl:w-[35rem] h-auto"
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white hover:text-gray-700 dark:hover:text-gray-100"
            aria-label="Close"
          >
            &times;
          </button>
          <h4 className="text-xl md:text-2xl text-white font-bold text-center mb-6 dark:text-neutral-100">
            Enter Your Details
          </h4>
          <form className="space-y-4">
            <div>
              <Label htmlFor="title" className="block text-white mb-1">
                Title
              </Label>
              <Input
                id="title"
                type="text"
                value={title}
                onChange={handleTitleChange}
                placeholder="Enter title"
                className="w-full px-4 py-2 border border-neutral-300 dark:border-neutral-600 rounded-md text-neutral-700 dark:text-neutral-300 bg-white dark:bg-neutral-800 focus:outline-none focus:ring focus:ring-opacity-50"
              />
            </div>
            <div>
              <Label htmlFor="description" className="block text-white mb-1">
                Description
              </Label>
              <textarea
                id="description"
                value={description}
                onChange={handleDescriptionChange}
                placeholder="Enter description"
                rows={4}
                className="w-full px-4 py-2 border border-neutral-300 dark:border-neutral-600 rounded-md text-neutral-700 dark:text-neutral-300 bg-white dark:bg-neutral-800 focus:outline-none focus:ring focus:ring-opacity-50"
              />
            </div>
            <div>
              <Label htmlFor="githubUrl" className="block text-white mb-1">
                GitHub URL
              </Label>
              <Input
                id="githubUrl"
                type="text"
                value={githubUrl}
                onChange={handleGithubUrlChange}
                placeholder="Enter GitHub URL"
                className="w-full px-4 py-2 border border-neutral-300 dark:border-neutral-600 rounded-md text-neutral-700 dark:text-neutral-300 bg-white dark:bg-neutral-800 focus:outline-none focus:ring focus:ring-opacity-50"
              />
            </div>
            <div className="flex justify-center items-center flex-col space-y-8 pt-4">
              <button
                className="inline-flex h-12 w-fit p-4 animate-shimmer items-center justify-center rounded-md border border-slate-400 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </motion.div>
      </BackgroundGradient>
    </div>
  );
}
