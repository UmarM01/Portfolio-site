import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Me',
  description: 'Learn more about Umar Munshi — Software Engineer and Full-Stack Developer specializing in distributed systems, high-concurrency backends, and full-stack engineering.',
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: 'About Umar Munshi | Software Engineer',
    description: 'Software Engineer and Full-Stack Developer based in Bengaluru, India. Background, technical stack, career experience, and education.',
    url: '/about',
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
