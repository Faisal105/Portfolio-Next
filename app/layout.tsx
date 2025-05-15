import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Fullstack/Frontend TAMM Developer | Faisal Bashir',
  description: 'Portfolio of Faisal Bashir, a full stack developer specializing in React, Next.js, TypeScript, and TAMM platform development.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}