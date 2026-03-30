import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Offline — Aurora Dental Sanctuary',
  description: 'You are currently offline. Please check your connection.',
};

export default function OfflineLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
