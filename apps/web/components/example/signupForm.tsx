'use client';
import React, { useState } from 'react';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { LinkPrev } from './Link';
import { cn } from '@/lib/utils';
import axios from 'axios';
import { BACKEND_URL, FRONTEND_URL } from '@/config';
import { BackgroundGradient } from '../ui/background-gradient';
import { useToast } from '../ui/use-toast';

export function SignupForm({
  type,
  userType,
}: {
  type: 'signup' | 'signin';
  userType: 'admin' | 'user';
}) {
  const { toast } = useToast();
  const [username, setUsername] = useState<string>('');
  const [firstname, setFirstname] = useState<string>('');
  const [lastname, setLastname] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (type === 'signin') {
        const response = await axios.post(`${BACKEND_URL}/${userType}/signin`, {
          email: email,
          password: password,
        });
        if (response.status === 200) {
          toast({
            variant: 'success',
            title: 'Logged In',
            description: 'Successfully logged into PR Tracker',
          });
        }
      } else if (type === 'signup') {
        const response = await axios.post(`${BACKEND_URL}/${userType}/signup`, {
          firstname,
          lastname,
          username,
          email,
          password,
        });
        if (response.status === 201) {
          toast({
            variant: 'success',
            title: 'Signed Up',
            description: 'Successfully signed up to PR Tracker',
          });
        }
      }
    } catch (error: any) {
      if (error.response && error.response.status === 401) {
        toast({
          variant: 'destructive',
          title: "You don't have an account",
          description: 'Please try to sign up',
        });
      } else {
        toast({
          variant: 'destructive',
          title: 'Error',
          description: 'An error occurred. Please try again.',
        });
      }
    }
  };

  return (
    <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-black dark:bg-zinc-900">
      <h2 className="font-extrabold text-center text-3xl text-white dark:text-neutral-200">
        Welcome to PR Tracker
      </h2>
      <form className="my-8" onSubmit={handleSubmit}>
        {type === 'signup' && (
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
        <div className="flex justify-center flex-col space-y-8 pt-4">
          <button
            className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
            type="submit"
          >
            {type} &rarr;
          </button>
          <LinkPrev url={`${FRONTEND_URL}/${userType}`} type={type} />
        </div>
      </form>
    </BackgroundGradient>
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
