
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from '@/contexts/ThemeContext';
import { AuthProvider } from '@/contexts/AuthContext';
import { Toaster } from '@/components/ui/toaster';
import { ProtectedRoute } from '@/components/ProtectedRoute';

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
import AdminLogin from '@/pages/admin/AdminLogin';
import AdminDashboard from '@/pages/admin/AdminDashboard';
import AdminUsers from '@/pages/admin/AdminUsers';
import AdminContent from '@/pages/admin/AdminContent';
import AdminAnalytics from '@/pages/admin/AdminAnalytics';
import AdminBilling from '@/pages/admin/AdminBilling';
import AdminSupport from '@/pages/admin/AdminSupport';
import AdminSettings from '@/pages/admin/AdminSettings';

// Error pages
import NotFound from '@/pages/NotFound';
import { UserPanelNotFound } from '@/components/error/UserPanelNotFound';
import { AdminPanelNotFound } from '@/components/error/AdminPanelNotFound';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <AuthProvider>
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

              {/* App routes (authenticated user panel) */}
              <Route path="/app" element={
                <ProtectedRoute>
                  <Index />
                </ProtectedRoute>
              } />
              <Route path="/app/dashboard" element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              } />
              <Route path="/app/ai-studio" element={
                <ProtectedRoute>
                  <AIStudio />
                </ProtectedRoute>
              } />
              <Route path="/app/idea-lab" element={
                <ProtectedRoute>
                  <IdeaLab />
                </ProtectedRoute>
              } />
              <Route path="/app/drafts" element={
                <ProtectedRoute>
                  <Drafts />
                </ProtectedRoute>
              } />
              <Route path="/app/pipeline" element={
                <ProtectedRoute>
                  <Pipeline />
                </ProtectedRoute>
              } />
              <Route path="/app/saved-posts" element={
                <ProtectedRoute>
                  <SavedPosts />
                </ProtectedRoute>
              } />
              <Route path="/app/library" element={
                <ProtectedRoute>
                  <Library />
                </ProtectedRoute>
              } />
              <Route path="/app/insights" element={
                <ProtectedRoute>
                  <Insights />
                </ProtectedRoute>
              } />
              <Route path="/app/network" element={
                <ProtectedRoute>
                  <Network />
                </ProtectedRoute>
              } />
              <Route path="/app/radar" element={
                <ProtectedRoute>
                  <Radar />
                </ProtectedRoute>
              } />
              <Route path="/app/team-space" element={
                <ProtectedRoute>
                  <TeamSpace />
                </ProtectedRoute>
              } />
              <Route path="/app/profile-settings" element={
                <ProtectedRoute>
                  <ProfileSettings />
                </ProtectedRoute>
              } />
              <Route path="/app/support-hub" element={
                <ProtectedRoute>
                  <SupportHub />
                </ProtectedRoute>
              } />
              {/* User panel 404 fallback */}
              <Route path="/app/*" element={<UserPanelNotFound />} />

              {/* Admin routes */}
              <Route path="/admin/login" element={<AdminLogin />} />
              <Route path="/admin" element={
                <ProtectedRoute requireAdmin redirectTo="/admin/login">
                  <AdminDashboard />
                </ProtectedRoute>
              } />
              <Route path="/admin/users" element={
                <ProtectedRoute requireAdmin redirectTo="/admin/login">
                  <AdminUsers />
                </ProtectedRoute>
              } />
              <Route path="/admin/content" element={
                <ProtectedRoute requireAdmin redirectTo="/admin/login">
                  <AdminContent />
                </ProtectedRoute>
              } />
              <Route path="/admin/analytics" element={
                <ProtectedRoute requireAdmin redirectTo="/admin/login">
                  <AdminAnalytics />
                </ProtectedRoute>
              } />
              <Route path="/admin/billing" element={
                <ProtectedRoute requireAdmin redirectTo="/admin/login">
                  <AdminBilling />
                </ProtectedRoute>
              } />
              <Route path="/admin/support" element={
                <ProtectedRoute requireAdmin redirectTo="/admin/login">
                  <AdminSupport />
                </ProtectedRoute>
              } />
              <Route path="/admin/settings" element={
                <ProtectedRoute requireAdmin redirectTo="/admin/login">
                  <AdminSettings />
                </ProtectedRoute>
              } />
              {/* Admin panel 404 fallback */}
              <Route path="/admin/*" element={<AdminPanelNotFound />} />

              {/* Catch all route */}
              <Route path="*" element={<NotFound />} />
            </Routes>
            <Toaster />
          </BrowserRouter>
        </AuthProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
