import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

import { SEO } from '@/data/constants';
import Layout from '@/components/layout';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: SEO.title,
  description: SEO.description,
  openGraph: {
    title: SEO.openGraph.title,
    description: SEO.openGraph.description,
    images: [
      {
        url: `${SEO.openGraph.url}/${SEO.openGraph.image}`,
        width: 900,
        height: 900,
        alt: SEO.openGraph.title,
      },
    ],
    url: SEO.openGraph.url,
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
