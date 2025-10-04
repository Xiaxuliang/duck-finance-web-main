import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import '@/styles/index.css';
import { appName } from '@/configs/app';
import { fontsClassName } from '@/lib/utils/fonts';
import { Header } from '@/ui/app/header';
import { Providers } from '@/ui/components/providers';

export const metadata: Metadata = {
  title: appName,
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={fontsClassName}>
        <Providers>
          <div className="flex min-h-screen w-full flex-col bg-[#e9d8b9] font-sans">
            <Header />
            <div className="w-full flex-1 overflow-x-hidden">{children}</div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
