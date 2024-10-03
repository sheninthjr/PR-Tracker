import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import SessionWrapper from './lib/SessionWrapper';
import { HomeBar } from '@/components/ui/HomeBar';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'PR Tracker',
  description: 'Created by Sheninth Jr',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SessionWrapper>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <HomeBar>{children}</HomeBar>
        </body>
      </html>
    </SessionWrapper>
  );
}
