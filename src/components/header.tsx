'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="flex justify-between items-center py-4 px-7 border-b mb-8">
      <Link href={'/'}>
        <p>cdbrw</p>
      </Link>
      <nav>
        <ul className="flex gap-x-5 text-[14px]">
          <Link
            href="/posts"
            className={`hover:text-stone-900 ${
              pathname === '/posts' ? 'text-stone-900' : 'text-stone-400'
            }`}
          >
            <li>Posts</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
}
