
import React from 'react';
import { AppShell } from './AppShell';

interface LegalLayoutProps {
  children: React.ReactNode;
  title: string;
  lastUpdated?: string;
}

export const LegalLayout: React.FC<LegalLayoutProps> = ({ children, title, lastUpdated }) => {
  return (
    <AppShell>
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-slate-900 mb-4">{title}</h1>
            {lastUpdated && (
              <p className="text-slate-600">Last updated: {lastUpdated}</p>
            )}
          </div>
          
          <article className="prose prose-lg max-w-none">
            {children}
          </article>
        </div>
      </div>
    </AppShell>
  );
};
