import Layout from '@/components/Layout/Layout';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Next Full-Stack - Home',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
