import Header from '@/components/Header';
import StoreProvider from '@/redux/StoreProvider';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Todo App | Knitto Skill Test',
  description:
    'Todo app with next js SSR ISR Implementation, based on Knitto skill test instructions',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-prim-white text-prim-dark`}>
        <Header />
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}
