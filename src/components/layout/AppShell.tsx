
import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { CookiesBanner } from './CookiesBanner';
import { SupportButton } from '@/components/support/SupportButton';

interface AppShellProps {
  children: React.ReactNode;
}

export const AppShell: React.FC<AppShellProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
      <CookiesBanner />
      <SupportButton />
    </div>
  );
};
