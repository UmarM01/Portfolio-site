import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Umar Munshi | Software Engineer & Full-Stack Developer',
  description: 'Software Engineer and Full-Stack Developer based in Bengaluru, India. Building scalable platforms, intelligent systems, and high-performance web applications.',
  keywords: ['Umar Munshi', 'Software Engineer', 'Full-Stack Developer', 'Next.js', 'React', 'TypeScript', 'Node.js', 'Bengaluru'],
  authors: [{ name: 'Umar Munshi' }],
  icons: {
    icon: '/about/umar.jpg',
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
