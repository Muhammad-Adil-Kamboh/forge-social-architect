
import React from 'react';
import { AppShell } from '@/components/layout/AppShell';
import { DocBreadcrumb } from '@/components/docs/DocBreadcrumb';
import { FeedbackPrompt } from '@/components/docs/FeedbackPrompt';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Clock } from 'lucide-react';
import { useParams } from 'react-router-dom';

const HelpArticle: React.FC = () => {
  const { slug } = useParams();

  // Mock data - in real app this would be fetched based on slug
  const article = {
    title: "How do I connect my LinkedIn account to LeadKin?",
    updatedAt: "Last updated: November 15, 2024",
    category: "Getting Started",
    content: `
      <p>Connecting your LinkedIn account to LeadKin is simple and secure. Follow these steps to get started:</p>
      
      <h2>Step 1: Navigate to Settings</h2>
      <p>In your LeadKin dashboard, click on your profile picture in the top right corner and select "Settings" from the dropdown menu.</p>
      
      <h2>Step 2: Find LinkedIn Integration</h2>
      <p>In the Settings page, look for the "Integrations" tab on the left sidebar. Click on it to see all available integrations.</p>
      
      <h2>Step 3: Connect LinkedIn</h2>
      <p>Find the LinkedIn integration card and click the "Connect" button. You'll be redirected to LinkedIn's authorization page.</p>
      
      <h2>Step 4: Authorize LeadKin</h2>
      <p>On LinkedIn's page, review the permissions and click "Allow" to authorize LeadKin to access your LinkedIn account.</p>
      
      <h2>Step 5: Verify Connection</h2>
      <p>You'll be redirected back to LeadKin. You should see a green checkmark indicating your LinkedIn account is now connected.</p>
      
      <h2>Troubleshooting</h2>
      <p>If you're having trouble connecting your account:</p>
      <ul>
        <li>Make sure you're logged into the correct LinkedIn account</li>
        <li>Check that your browser allows pop-ups from LeadKin</li>
        <li>Try clearing your browser cache and cookies</li>
        <li>Ensure you have a stable internet connection</li>
      </ul>
    `
  };

  const relatedArticles = [
    "Installing the Chrome extension",
    "Setting up your first LinkedIn post",
    "Understanding the dashboard",
    "Troubleshooting connection issues"
  ];

  const breadcrumbItems = [
    { label: 'Getting Started', href: '/help' },
    { label: article.title }
  ];

  return (
    <AppShell>
      <div className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <DocBreadcrumb items={breadcrumbItems} />
          
          <article>
            <header className="mb-8">
              <Badge className="mb-4">{article.category}</Badge>
              <h1 className="text-4xl font-bold text-slate-900 mb-4">
                {article.title}
              </h1>
              
              <div className="flex items-center text-slate-600">
                <Clock className="w-4 h-4 mr-2" />
                {article.updatedAt}
              </div>
            </header>

            <div 
              className="prose prose-lg max-w-none mb-12"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />

            <FeedbackPrompt />
          </article>

          {/* Related Articles */}
          <Card className="mt-12">
            <CardHeader>
              <CardTitle>Related Articles</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {relatedArticles.map((article, index) => (
                  <button
                    key={index}
                    className="block w-full text-left text-slate-600 hover:text-blue-600 transition-colors py-2 border-b border-slate-100 last:border-b-0"
                  >
                    {article}
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </AppShell>
  );
};

export default HelpArticle;
