'use client';

import Link from 'next/link';
import { FaTerminal, FaGithub } from 'react-icons/fa';

export default function Header() {
  return (
    <header className="p-4 bg-sky-100 text-neutral-900 dark:bg-gray-900 dark:text-neutral-100 shadow">
      <nav className="w-full max-w-4xl flex items-center justify-between mx-auto">
        <Link
          href="/"
          className="flex items-center gap-2 text-primary-light hover:text-primary-dark dark:text-primary-dark dark:hover:text-primary-light"
        >
          <FaTerminal className="text-2xl" />
        </Link>
        <a
          href="https://github.com/fjlaubscher"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-auto text-neutral-700 dark:text-neutral-200 hover:text-primary-light dark:hover:text-primary-dark transition-colors flex items-center gap-2"
          aria-label="GitHub"
        >
          <FaGithub className="text-2xl" />
        </a>
      </nav>
    </header>
  );
}
