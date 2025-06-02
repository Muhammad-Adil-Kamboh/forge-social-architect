
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ErrorBoundary } from "@/components/ErrorBoundary";

// User Panel Pages (with /app prefix)
import Index from "./pages/Index";
import IdeaLab from "./pages/IdeaLab";
import Drafts from "./pages/Drafts";
import Pipeline from "./pages/Pipeline";
import Insights from "./pages/Insights";
import Radar from "./pages/Radar";
import Network from "./pages/Network";
import SavedPosts from "./pages/SavedPosts";
import AIStudio from "./pages/AIStudio";
import Library from "./pages/Library";
import TeamSpace from "./pages/TeamSpace";
import ProfileSettings from "./pages/ProfileSettings";
import SupportHub from "./pages/SupportHub";

// Public Pages
import Home from "./pages/public/Home";
import Features from "./pages/public/Features";
import Pricing from "./pages/public/Pricing";
import FreeTools from "./pages/public/FreeTools";
import Resources from "./pages/public/Resources";

// Admin Panel
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminUsers from "./pages/admin/AdminUsers";
import AdminContent from "./pages/admin/AdminContent";
import AdminAnalytics from "./pages/admin/AdminAnalytics";
import AdminBilling from "./pages/admin/AdminBilling";
import AdminSupport from "./pages/admin/AdminSupport";
import AdminSettings from "./pages/admin/AdminSettings";

import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <ErrorBoundary>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Public Pages */}
            <Route path="/" element={<Home />} />
            <Route path="/features" element={<Features />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/free-tools" element={<FreeTools />} />
            <Route path="/resources" element={<Resources />} />
            
            {/* User Panel Routes (with /app prefix) */}
            <Route path="/app" element={<Index />} />
            <Route path="/app/idea-lab" element={<IdeaLab />} />
            <Route path="/app/drafts" element={<Drafts />} />
            <Route path="/app/pipeline" element={<Pipeline />} />
            <Route path="/app/insights" element={<Insights />} />
            <Route path="/app/radar" element={<Radar />} />
            <Route path="/app/network" element={<Network />} />
            <Route path="/app/saved-posts" element={<SavedPosts />} />
            <Route path="/app/ai-studio" element={<AIStudio />} />
            <Route path="/app/library" element={<Library />} />
            <Route path="/app/team-space" element={<TeamSpace />} />
            <Route path="/app/profile-settings" element={<ProfileSettings />} />
            <Route path="/app/support-hub" element={<SupportHub />} />
            
            {/* Admin Panel Routes */}
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/admin/users" element={<AdminUsers />} />
            <Route path="/admin/content" element={<AdminContent />} />
            <Route path="/admin/analytics" element={<AdminAnalytics />} />
            <Route path="/admin/billing" element={<AdminBilling />} />
            <Route path="/admin/support" element={<AdminSupport />} />
            <Route path="/admin/settings" element={<AdminSettings />} />
            
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </ErrorBoundary>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
