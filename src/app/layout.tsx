import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import Footer from '@/components/footer';
import Header from '@/components/header';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'cdbrw',
  description: "a very lame blog app. please don't index it.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <Header />
        <main className="flex flex-col items-center w-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
