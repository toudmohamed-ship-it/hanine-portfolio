import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });

export const metadata: Metadata = {
  title: {
    default: 'Hanine Toudghi | PhD Candidate in AI & Digital Marketing',
    template: '%s | Hanine Toudghi',
  },
  description: 'Academic portfolio of Hanine Toudghi, PhD Candidate at ENCG Settat. Specializing in Artificial Intelligence, Digital Marketing Analytics, Consumer Behavior, and Sustainable Marketing.',
  keywords: ['Hanine Toudghi', 'PhD Candidate', 'Artificial Intelligence', 'Digital Marketing', 'Consumer Behavior', 'Academic Portfolio', 'ENCG Settat', 'Marketing Analytics'],
  authors: [{ name: 'Hanine Toudghi' }],
  creator: 'Hanine Toudghi',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://haninetoudghi.com', // Placeholder URL
    title: 'Hanine Toudghi | PhD Candidate in Digital Marketing',
    description: 'Academic portfolio and research of Hanine Toudghi.',
    siteName: 'Hanine Toudghi Academic Portfolio',
    images: [
      {
        url: '/avatar.jpg',
        width: 800,
        height: 800,
        alt: 'Hanine Toudghi',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hanine Toudghi | PhD Candidate',
    description: 'Research in Digital Marketing Analytics and Consumer Behavior.',
    images: ['/avatar.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased bg-slate-50 text-slate-900 flex flex-col min-h-screen`}>
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
