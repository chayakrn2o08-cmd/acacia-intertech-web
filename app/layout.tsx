import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Acacia Intertech Co., Ltd.',
  description: 'One-stop IT solutions for business and enterprise technology services in Thailand.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
