import type { ReactNode } from 'react';
import Header from './header';
import Footer from './footer';
import Hero from './hero';

interface Props {
  children: ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <div className="flex flex-col min-h-screen font-sans bg-white text-neutral-900 dark:bg-neutral-900 dark:text-neutral-100">
      <Header />
      <Hero />
      <main className="flex-grow px-4 py-8 max-w-6xl mx-auto w-full">
        {children}
      </main>
      <Footer />
    </div>
  );
}
