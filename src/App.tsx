
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from '@/components/theme/ThemeProvider';

// Public pages
import Home from '@/pages/public/Home';
import Features from '@/pages/public/Features';
import FreeTools from '@/pages/public/FreeTools';
import Pricing from '@/pages/public/Pricing';
import Blog from '@/pages/public/Blog';
import BlogArticle from '@/pages/public/BlogArticle';
import Help from '@/pages/public/Help';
import HelpArticle from '@/pages/public/HelpArticle';
import Community from '@/pages/public/Community';
import Careers from '@/pages/public/Careers';
import Contact from '@/pages/public/Contact';
import Partners from '@/pages/public/Partners';
import Resources from '@/pages/public/Resources';

// Legal pages
import PrivacyPolicy from '@/pages/legal/PrivacyPolicy';
import TermsOfService from '@/pages/legal/TermsOfService';

// Auth pages
import Login from '@/pages/auth/Login';
import Signup from '@/pages/auth/Signup';

// Tool pages
import LinkedInPostGenerator from '@/pages/tools/LinkedInPostGenerator';
import LinkedInHeadlineGenerator from '@/pages/tools/LinkedInHeadlineGenerator';
import LinkedInSummaryGenerator from '@/pages/tools/LinkedInSummaryGenerator';
import LinkedInCarouselGenerator from '@/pages/tools/LinkedInCarouselGenerator';
import LinkedInProfileFeedback from '@/pages/tools/LinkedInProfileFeedback';
import LinkedInPostBooster from '@/pages/tools/LinkedInPostBooster';
import ViralPostGenerator from '@/pages/tools/ViralPostGenerator';
import LinkedInVideoDownloader from '@/pages/tools/LinkedInVideoDownloader';

// App pages (authenticated)
import Index from '@/pages/Index';
import Dashboard from '@/pages/Dashboard';
import AIStudio from '@/pages/AIStudio';
import IdeaLab from '@/pages/IdeaLab';
import Drafts from '@/pages/Drafts';
import Pipeline from '@/pages/Pipeline';
import SavedPosts from '@/pages/SavedPosts';
import Library from '@/pages/Library';
import Insights from '@/pages/Insights';
import Network from '@/pages/Network';
import Radar from '@/pages/Radar';
import TeamSpace from '@/pages/TeamSpace';
import ProfileSettings from '@/pages/ProfileSettings';
import SupportHub from '@/pages/SupportHub';

// Admin pages
import AdminDashboard from '@/pages/admin/AdminDashboard';
import AdminUsers from '@/pages/admin/AdminUsers';
import AdminContent from '@/pages/admin/AdminContent';
import AdminAnalytics from '@/pages/admin/AdminAnalytics';
import AdminBilling from '@/pages/admin/AdminBilling';
import AdminSupport from '@/pages/admin/AdminSupport';
import AdminSettings from '@/pages/admin/AdminSettings';

// Error pages
import NotFound from '@/pages/NotFound';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="system" storageKey="leadkin-ui-theme">
        <BrowserRouter>
          <Routes>
            {/* Public routes */}
            <Route path="/" element={<Home />} />
            <Route path="/features" element={<Features />} />
            <Route path="/free-tools" element={<FreeTools />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogArticle />} />
            <Route path="/help" element={<Help />} />
            <Route path="/help/:slug" element={<HelpArticle />} />
            <Route path="/community" element={<Community />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/resources" element={<Resources />} />

            {/* Legal routes */}
            <Route path="/our-privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />

            {/* Auth routes */}
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />

            {/* Tool routes */}
            <Route path="/tools/linkedin-post-generator" element={<LinkedInPostGenerator />} />
            <Route path="/tools/linkedin-headline-generator" element={<LinkedInHeadlineGenerator />} />
            <Route path="/tools/linkedin-summary-generator" element={<LinkedInSummaryGenerator />} />
            <Route path="/tools/linkedin-carousel-generator" element={<LinkedInCarouselGenerator />} />
            <Route path="/tools/linkedin-profile-feedback" element={<LinkedInProfileFeedback />} />
            <Route path="/tools/linkedin-post-booster" element={<LinkedInPostBooster />} />
            <Route path="/tools/viral-post-generator" element={<ViralPostGenerator />} />
            <Route path="/tools/linkedin-video-downloader" element={<LinkedInVideoDownloader />} />

            {/* App routes (authenticated) */}
            <Route path="/app" element={<Index />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/ai-studio" element={<AIStudio />} />
            <Route path="/idea-lab" element={<IdeaLab />} />
            <Route path="/drafts" element={<Drafts />} />
            <Route path="/pipeline" element={<Pipeline />} />
            <Route path="/saved-posts" element={<SavedPosts />} />
            <Route path="/library" element={<Library />} />
            <Route path="/insights" element={<Insights />} />
            <Route path="/network" element={<Network />} />
            <Route path="/radar" element={<Radar />} />
            <Route path="/team-space" element={<TeamSpace />} />
            <Route path="/profile-settings" element={<ProfileSettings />} />
            <Route path="/support-hub" element={<SupportHub />} />

            {/* Admin routes */}
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/admin/users" element={<AdminUsers />} />
            <Route path="/admin/content" element={<AdminContent />} />
            <Route path="/admin/analytics" element={<AdminAnalytics />} />
            <Route path="/admin/billing" element={<AdminBilling />} />
            <Route path="/admin/support" element={<AdminSupport />} />
            <Route path="/admin/settings" element={<AdminSettings />} />

            {/* Catch all route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
