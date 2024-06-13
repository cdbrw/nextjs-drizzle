'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavLink {
  href: string;
  label: string;
}

const navLinks: NavLink[] = [{ href: '/posts', label: 'Posts' }];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="flex justify-between items-center py-4 px-7 border-b mb-8">
      <Link href={'/'}>
        <p>cdbrw</p>
      </Link>
      <nav>
        <ul className="flex gap-x-5 text-[14px]">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`hover:text-stone-900 ${
                pathname === href ? 'text-stone-900' : 'text-stone-400'
              }`}
            >
              <li>{label}</li>
            </Link>
          ))}
        </ul>
      </nav>
    </header>
  );
}
