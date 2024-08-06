'use client';
import React, { useState } from 'react';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { cn } from '@/lib/utils';
import axios from 'axios';
import { BACKEND_URL } from '@/config';

export function SignupForm({ type }: { type: 'Signup' | 'Signin' }) {
  const [username, setUsername] = useState<string>('');
  const [firstname, setFirstname] = useState<string>('');
  const [lastname, setLastname] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (type === 'Signin') {
      const response = await axios.post(`${BACKEND_URL}/admin/signin`, {
        email: email,
        password: password,
      });
    }
    if (type === 'Signup') {
      const response = await axios.post(`${BACKEND_URL}/admin/signup`, {
        firstname,
        lastname,
        username,
        email,
        password,
      });
      alert(response);
    }
  };
  return (
    <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
      <h2 className="font-extrabold text-center text-3xl text-neutral-800 dark:text-neutral-200">
        Welcome to PR Tracker
      </h2>
      <form className="my-8" onSubmit={handleSubmit}>
        {type === 'Signup' && (
          <>
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
              <LabelInputContainer>
                <Label htmlFor="firstname">First name</Label>
                <Input
                  id="firstname"
                  placeholder="Firstname"
                  type="text"
                  onChange={(e) => setFirstname(e.target.value)}
                />
              </LabelInputContainer>
              <LabelInputContainer>
                <Label htmlFor="lastname">Last name</Label>
                <Input
                  id="lastname"
                  placeholder="Lastname"
                  type="text"
                  onChange={(e) => setLastname(e.target.value)}
                />
              </LabelInputContainer>
            </div>
            <LabelInputContainer className="mb-4">
              <Label htmlFor="username">Github Username</Label>
              <Input
                id="username"
                placeholder="Username"
                type="text"
                onChange={(e) => setUsername(e.target.value)}
              />
            </LabelInputContainer>
          </>
        )}
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            placeholder="Email"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            placeholder="••••••••"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </LabelInputContainer>
        <button
          className="bg-black block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
        >
          {type} &rarr;
          <BottomGradient />
        </button>
      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn('flex flex-col space-y-2 w-full', className)}>
      {children}
    </div>
  );
};
