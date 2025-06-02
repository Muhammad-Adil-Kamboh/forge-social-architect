
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ErrorBoundary } from "@/components/ErrorBoundary";

// User Panel Pages
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
            {/* User Panel Routes */}
            <Route path="/" element={<Index />} />
            <Route path="/idea-lab" element={<IdeaLab />} />
            <Route path="/drafts" element={<Drafts />} />
            <Route path="/pipeline" element={<Pipeline />} />
            <Route path="/insights" element={<Insights />} />
            <Route path="/radar" element={<Radar />} />
            <Route path="/network" element={<Network />} />
            <Route path="/saved-posts" element={<SavedPosts />} />
            <Route path="/ai-studio" element={<AIStudio />} />
            <Route path="/library" element={<Library />} />
            <Route path="/team-space" element={<TeamSpace />} />
            <Route path="/profile-settings" element={<ProfileSettings />} />
            <Route path="/support-hub" element={<SupportHub />} />
            
            {/* Public Pages */}
            <Route path="/home" element={<Home />} />
            <Route path="/features" element={<Features />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/free-tools" element={<FreeTools />} />
            <Route path="/resources" element={<Resources />} />
            
            {/* Admin Panel Routes */}
            <Route path="/admin" element={<AdminDashboard />} />
            
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </ErrorBoundary>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
