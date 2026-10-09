import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact & Collaboration',
  description: 'Connect with Umar Munshi for software engineering roles, technical contract work, and product collaboration.',
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contact & Collaboration | Umar Munshi',
    description: 'Direct messaging and contact details for software engineering opportunities, contracts, and technical collaborations.',
    url: '/contact',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
