
import React from 'react';
import { AppShell } from '@/components/layout/AppShell';
import { TocNav } from './TocNav';

interface BlogLayoutProps {
  children: React.ReactNode;
  showToc?: boolean;
  tocHeadings?: Array<{ id: string; title: string; level: number }>;
}

export const BlogLayout: React.FC<BlogLayoutProps> = ({ 
  children, 
  showToc = false, 
  tocHeadings = [] 
}) => {
  return (
    <AppShell>
      <div className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className={`grid gap-8 ${showToc ? 'lg:grid-cols-4' : ''}`}>
            <article className={showToc ? 'lg:col-span-3' : 'max-w-4xl mx-auto'}>
              {children}
            </article>
            
            {showToc && tocHeadings.length > 0 && (
              <aside className="lg:col-span-1">
                <TocNav headings={tocHeadings} />
              </aside>
            )}
          </div>
        </div>
      </div>
    </AppShell>
  );
};
