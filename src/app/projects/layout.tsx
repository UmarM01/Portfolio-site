import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Engineering Projects & Systems',
  description: 'Selected engineering projects by Umar Munshi, featuring Zoopify (317-endpoint FastAPI & PostgreSQL platform), Selligo (164-endpoint Node.js & MongoDB recommerce), and distributed architectures.',
  alternates: {
    canonical: '/projects',
  },
  openGraph: {
    title: 'Engineering Projects & Systems | Umar Munshi',
    description: 'Explore production projects and systems engineering architectures built with FastAPI, Next.js, PostgreSQL, Node.js, and MongoDB.',
    url: '/projects',
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
