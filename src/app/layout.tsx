import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://umarmunshi.dev';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Umar Munshi | Software Engineer & Full-Stack Developer',
    template: '%s | Umar Munshi',
  },
  description: 'Software Engineer and Full-Stack Developer specializing in high-concurrency platforms, distributed backend architecture (Zoopify, Selligo), and intelligent web systems.',
  keywords: [
    'Umar Munshi',
    'Software Engineer',
    'Full-Stack Developer',
    'FastAPI',
    'Next.js',
    'PostgreSQL',
    'Distributed Systems',
    'React',
    'TypeScript',
    'Node.js',
    'Bengaluru',
  ],
  authors: [{ name: 'Umar Munshi', url: 'https://github.com/UmarM01' }],
  creator: 'Umar Munshi',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Umar Munshi | Software Engineer & Full-Stack Developer',
    description: 'Software Engineer and Full-Stack Developer specializing in high-concurrency platforms, distributed backend architecture (Zoopify, Selligo), and intelligent web systems.',
    url: '/',
    siteName: 'Umar Munshi Portfolio',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Umar Munshi — Software Engineer & Full-Stack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Umar Munshi | Software Engineer & Full-Stack Developer',
    description: 'Software Engineer and Full-Stack Developer specializing in high-concurrency platforms, distributed backend architecture (Zoopify, Selligo), and intelligent web systems.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-black text-white antialiased selection:bg-white/20 selection:text-white flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-1">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
