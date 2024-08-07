'use client';
import React from 'react';
import { LinkPreview } from '@/components/ui/link-preview';

export function LinkPrev({
  url,
  type,
}: {
  url: string;
  type: 'signin' | 'signup';
}) {
  return (
    <div className="flex justify-center items-center">
      <p className="text-white">
        <LinkPreview
          url={`${url}/${type === 'signin' ? 'signup' : 'signin'}`}
          className="font-bold"
        >
          {type === 'signin'
            ? "Don't have an account?"
            : 'Already have an account?'}
        </LinkPreview>
      </p>
    </div>
  );
}
